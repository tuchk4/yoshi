import Experiments, { ExperimentsBag } from '@wix/wix-experiments';
import { ExperimentsConfig } from './constants';

export async function fetchExperiments(
  config: ExperimentsConfig,
  baseUrl = 'https://www.wix.com',
): Promise<ExperimentsBag> {
  const experiments = new Experiments({
    baseUrl,
  });
  await experiments.load(config.scope);
  return experiments.all();
}
