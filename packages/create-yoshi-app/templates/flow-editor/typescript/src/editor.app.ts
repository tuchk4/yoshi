import { EditorReadyFn } from 'yoshi-flow-editor-runtime/build/types';

export const editorReady: EditorReadyFn = async (
  editorSDK,
  appDefinitionId,
  { firstInstall },
  { reportError, fedopsLogger },
) => {
  fedopsLogger.appLoadStarted();

  try {
    if (firstInstall) {
      fedopsLogger.interactionStarted('install');
      // Place for your app initialization here. (Add pages to editor platform, init configs, etc);
      console.log('App was installed ✅');
      fedopsLogger.interactionEnded('install');
    }
  } catch (e) {
    reportError(e);
  }

  fedopsLogger.appLoaded();
};
