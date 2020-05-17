import { ExperimentsBag } from '@wix/wix-experiments';

export interface FrameworkData {
  experiments?: Promise<ExperimentsBag>;
}
