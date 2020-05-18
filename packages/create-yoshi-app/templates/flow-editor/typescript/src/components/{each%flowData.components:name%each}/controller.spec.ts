import Experiments from '@wix/wix-experiments';
import { IWidgetControllerConfig } from '@wix/native-components-infra/dist/src/types/types';
import translations from '../../assets/locales/messages_en.json';
import {
  appName,
  experiments as experimentsConfig,
} from '../../../.application.json';
import getControllerConfigMock from '../../../__tests__/helpers/controllerConfig.mock';
import mockExperiments from '../../../__tests__/helpers/experiments.mock';
import getFedopsLoggerMock from '../../../__tests__/helpers/fedops.mock';
import createAppController from './controller';

describe('createController', () => {
  it('should call setProps with data', async () => {
    const experiments = new Experiments({
      experiments: { 'specs.test.ShouldShowButton': 'true' },
    });
    mockExperiments(experimentsConfig.scope, experiments.all());
    const setPropsSpy = jest.fn();
    const language = 'en';
    const controllerConfig: IWidgetControllerConfig = getControllerConfigMock({
      setProps: setPropsSpy,
      appParams: {
        instance: '1',
        instanceId: '1',
        appDefinitionId: 'APP_DEF_ID',
        baseUrls: {
          staticsBaseUrl: 'http://some-static-url.com',
        },
      },
    });

    const controller = await createAppController({
      flowData: {
        getExperiments() {
          return Promise.resolve(experiments);
        },
      },
      controllerConfig,
      fedopsLogger: getFedopsLoggerMock(),
    });

    await controller.pageReady();

    expect(setPropsSpy).toBeCalledWith({
      appName,
      cssBaseUrl: controllerConfig.appParams.baseUrls.staticsBaseUrl,
      language,
      experiments: experiments.all(),
      mobile: false,
      translations,
    });
  });
});
