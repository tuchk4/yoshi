import prompts from 'prompts';
import { getProjectArtifactId } from 'yoshi-helpers/build/utils';
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

  const bmUrl = `https://www.wix.com/dashboard/${metaSiteId}/${pages[0].route}`;

  const artifactId = getProjectArtifactId()!;

  return elgarOverride(bmUrl, {
    [artifactId]: 'http://localhost:3200',
  });
};

const elgarOverride = (
  redirectToUrl: string,
  staticsVersions: Record<string, string>,
) =>
  'https://apps.wix.com/elgar-server/redirect' +
  `?redirectToUrl=${redirectToUrl}` +
  `&staticsVersions=${JSON.stringify(staticsVersions)}`;

export default getStartUrl;
