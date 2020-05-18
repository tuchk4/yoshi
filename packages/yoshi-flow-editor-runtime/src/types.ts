import {
  IWidgetControllerConfig,
  IWidgetConfig,
  IAppData,
} from '@wix/native-components-infra/dist/src/types/types';
import Experiments from '@wix/wix-experiments';

export interface FlowData {
  getExperiments: () => Promise<Experiments>;
}

export interface ControllerContext {
  flowData: FlowData;
  appData?: IAppData;
  widgetConfig?: IWidgetConfig;
  controllerConfig: IWidgetControllerConfig;
  fedopsLogger?: any;
}

export type ReportError = (error: Error | ErrorEvent | string) => void;
