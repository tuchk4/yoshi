import Experiments from '@wix/wix-experiments';

export async function fetchFrameworkData(scope: string, baseUrl = 'https://www.wix.com') {
  const experiments = new Experiments({
    baseUrl,
  });
  return {
    experimentsPromise: experiments.load(scope).then(() => experiments.all()),
  };
}
