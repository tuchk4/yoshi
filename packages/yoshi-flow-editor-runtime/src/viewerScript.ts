import {
  IWidgetControllerConfig,
  IAppData,
  IPlatformAPI,
  IWixAPI,
  IPlatformServices,
} from '@wix/native-components-infra/dist/src/types/types';
import { buildSentryOptions, getArtifact } from './utils';
import {
  SentryConfig,
  WidgetType,
  OOI_WIDGET_COMPONENT_TYPE,
  ExperimentsConfig,
} from './constants';
import { FlowData, ReportError } from './types';
import { fetchExperiments, getEmptyExperiments } from './fetchExperiments';

const flowData: FlowData = {
  // Initialize with an empty `Experiments`.
  getExperiments: () => getEmptyExperiments(),
};
let reportError: ReportError;

type ControllerDescriptor = {
  id: string | null;
  method: Function;
  widgetType: WidgetType;
};

const getFirstDescriptor = (descriptors: Array<ControllerDescriptor>) => {
  if (descriptors.length === 1) {
    return descriptors[0];
  }
};

const defaultControllerWrapper = (
  controllerDescriptor: ControllerDescriptor,
  controllerConfig: IWidgetControllerConfig,
  appData: any,
) =>
  controllerDescriptor.method({
    controllerConfig,
    flowData,
    appData,
    reportError,
  });

function ooiControllerWrapper(
  controllerDescriptor: ControllerDescriptor,
  controllerConfig: IWidgetControllerConfig,
  appData: any,
) {
  const { setProps, appParams, platformAPIs } = controllerConfig;

  const setState = (newState: any) => {
    const updatedState = {
      ...context.state,
      ...newState,
    };

    // Track state
    context.state = updatedState;

    // Run state change callback
    wrappedController.then((userController: any) => {
      if (userController.stateChange) {
        userController.stateChange();
      }
    });

    // Update render cycle
    return setProps({ state: updatedState });
  };

  const context = {
    state: {},
    setState,
  };

  const { appDefinitionId } = appParams;
  const fedopsLogger = platformAPIs.fedOpsLoggerFactory?.getLoggerForWidget({
    appId: appDefinitionId,
    widgetId: controllerDescriptor.id,
  });

  const userControllerPromise = controllerDescriptor.method.call(context, {
    controllerConfig,
    flowData,
    appData,
    reportError,
    fedopsLogger,
  });

  const wrappedController = Promise.resolve(userControllerPromise).then(
    (userController: any) => {
      return {
        ...userController,
        pageReady: async (...args: Array<any>) => {
          // TODO: export by property (methods, state) so we won't have conflicting props
          setProps({
            __publicData__: controllerConfig.config.publicData,
            // Set initial state
            state: context.state,
            // Set methods
            methods: userController.methods,
          });

          // Optional `pageReady`
          if (userController.pageReady) {
            return userController.pageReady(...args);
          }
        },
        exports: userController.corvid,
      };
    },
  );

  return wrappedController;
}

const wrapControllerByWidgetType = (
  controllerDescriptor: ControllerDescriptor,
  controllerConfig: IWidgetControllerConfig,
  appData: any,
) => {
  switch (controllerDescriptor.widgetType) {
    case OOI_WIDGET_COMPONENT_TYPE:
      return ooiControllerWrapper(
        controllerDescriptor,
        controllerConfig,
        appData,
      );
    default:
      return defaultControllerWrapper(
        controllerDescriptor,
        controllerConfig,
        appData,
      );
  }
};

const getDescriptorForConfig = (
  type: string,
  descriptors: Array<ControllerDescriptor>,
) => {
  return (
    descriptors.find(descriptor => descriptor.id === type) ||
    getFirstDescriptor(descriptors)
  );
};

export const createControllers = (
  createController: Function,
  mapPlatformStateToAppData: Function,
) => {
  return createControllersWithDescriptors(
    [
      {
        method: createController,
        id: null,
        widgetType: OOI_WIDGET_COMPONENT_TYPE,
      },
    ],
    mapPlatformStateToAppData,
  );
};

export const createControllersWithDescriptors = (
  controllerDescriptors: Array<ControllerDescriptor>,
  mapPlatformStateToAppData: Function,
) => (controllerConfigs: Array<IWidgetControllerConfig>) => {
  // It should be called inside initAppForPage
  const { appParams, platformAPIs, wixCodeApi } = controllerConfigs[0];
  const appData =
    typeof mapPlatformStateToAppData === 'function'
      ? mapPlatformStateToAppData({
          controllerConfigs,
          flowData,
          appParams,
          platformAPIs,
          wixCodeApi,
        })
      : {};

  const wrappedControllers = controllerConfigs.map(controllerConfig => {
    // [Platform surprise] `type` here, is a widgetId. :(
    const { type } = controllerConfig;
    const controllerDescriptor:
      | ControllerDescriptor
      | undefined = getDescriptorForConfig(type, controllerDescriptors);

    if (!controllerDescriptor) {
      throw new Error(
        `Descriptor for widgetId: "${controllerConfig.type}" was not found. Please create a ".component.json" file for current widget`,
      );
    }

    return wrapControllerByWidgetType(
      controllerDescriptor,
      controllerConfig,
      appData,
    );
  });

  return wrappedControllers;
};

export const initAppForPageWrapper = (
  initAppForPage: Function,
  sentry: SentryConfig | null,
  experimentsConfig: ExperimentsConfig | null,
) => (
  initParams: IAppData,
  apis: IPlatformAPI,
  namespaces: IWixAPI,
  platformServices: IPlatformServices,
  ...other: Array<any>
) => {
  if (sentry) {
    const sentryOptions = buildSentryOptions(
      sentry.DSN,
      'Viewer:Worker',
      getArtifact(),
    );

    const sentryInstance = platformServices.monitoring.createMonitor(
      sentryOptions.dsn,
      config => ({
        ...config,
        ...sentryOptions.config,
      }),
    );

    reportError = sentryInstance.captureException.bind(sentryInstance);
  }

  // If user didn't configure experiments, we'll just mock it to empty object.
  if (experimentsConfig) {
    flowData.getExperiments = () => fetchExperiments(experimentsConfig);
  }

  if (initAppForPage) {
    return initAppForPage(
      initParams,
      apis,
      namespaces,
      platformServices,
      ...other,
    );
  }
  return {};
};
