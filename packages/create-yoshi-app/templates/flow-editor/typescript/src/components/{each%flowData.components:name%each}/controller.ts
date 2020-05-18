import { IWidgetControllerConfig } from '@wix/native-components-infra/dist/src/types/types';
import { ControllerContext } from 'yoshi-flow-editor-runtime/build/types';
import { appName } from '../../../.application.json';
import { getSiteTranslations } from '../../config/i18n';
import { id as widgetId } from './.component.json';

function getSiteLanguage({ wixCodeApi }: IWidgetControllerConfig) {
  if (wixCodeApi.window.multilingual.isEnabled) {
    return wixCodeApi.window.multilingual.currentLanguage;
  }

  // NOTE: language can be null (see WEED-18001)
  return wixCodeApi.site.language || 'en';
}

function isMobile({ wixCodeApi }: IWidgetControllerConfig) {
  return wixCodeApi.window.formFactor === 'Mobile';
}

function isSSR({ wixCodeApi }: IWidgetControllerConfig): boolean {
  return wixCodeApi.window.rendering.env === 'backend';
}

async function createController({
  controllerConfig,
  fedopsLogger,
  flowData,
}: ControllerContext) {
  const { appParams, setProps } = controllerConfig;
  const language = getSiteLanguage(controllerConfig);
  const mobile = isMobile(controllerConfig);
  const [experiments, translations] = await Promise.all([
    flowData.getExperiments(),
    getSiteTranslations(language),
  ]);
  const { baseUrls = {} } = appParams;

  // Read more about fedops and how to configure it: https://bo.wix.com/wix-docs/client/client-viewer-platform/articles/fedops#client-viewer-platform_articles_fedops_fedops
  fedopsLogger.appLoadStarted();

  return {
    async pageReady() {
      setProps({
        appName,
        cssBaseUrl: baseUrls.staticsBaseUrl,
        language,
        mobile,
        experiments: experiments.all(),
        translations,
      });

      // report loaded SSR of widget
      if (isSSR(controllerConfig)) {
        fedopsLogger.appLoaded({ appId: appParams.appDefinitionId, widgetId });
      }
    },
  };
}

export default createController;
