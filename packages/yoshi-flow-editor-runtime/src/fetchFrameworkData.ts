import Experiments from '@wix/wix-experiments';

export async function fetchFrameworkData(scope: string) {
  const experiments = new Experiments({
    baseUrl: 'https://www.wix.com',
  });
  await experiments.load(scope);
  return {
    experimentsPromise: experiments.load(scope).then(() => experiments.all()),
  };
}
