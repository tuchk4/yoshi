import prompts from 'prompts';
import { readCache, writeCache } from './cache';
import { FlowBMModel } from './model';

const readMetaSiteId = async () => {
  const { metaSiteId } = await prompts({
    type: 'text',
    name: 'metaSiteId',
    message: 'What is your preferred metaSiteId (for development)?',
  });

  return metaSiteId as string;
};

const getMetaSiteId = async (): Promise<string> =>
  readCache('metaSiteId') ?? readMetaSiteId();

const getStartUrl = async ({ pages }: FlowBMModel) => {
  const metaSiteId = await getMetaSiteId();

  writeCache('metaSiteId', metaSiteId);

  return `https://www.wix.com/dashboard/${metaSiteId}/${pages[0].route}`;
};

export default getStartUrl;
