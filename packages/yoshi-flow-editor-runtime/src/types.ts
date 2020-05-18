import { ExperimentsBag } from '@wix/wix-experiments';

export interface FlowData {
  experiments?: Promise<ExperimentsBag>;
}
