import Experiments from '@wix/wix-experiments';
import { ExperimentsConfig } from './constants';

export async function fetchExperiments(
  config: ExperimentsConfig,
  baseUrl = 'https://www.wix.com',
): Promise<Experiments> {
  const experiments = new Experiments({
    baseUrl,
  });
  await experiments.load(config.scope);
  return experiments;
}

export async function getEmptyExperiments(
  baseUrl = 'https://www.wix.com',
): Promise<Experiments> {
  const experiments = new Experiments({
    baseUrl,
    experiments: {},
  });
  return experiments;
}
