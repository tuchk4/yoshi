import { EditorReadyFn as PlatformEditorReadyFn } from '@wix/platform-editor-sdk';
import { SentryConfig } from './constants';
import { EditorReadyFn, ReportError } from './types';
import { getArtifact, buildSentryOptions } from './utils';

let reportError: ReportError;
let sentryMonitor: any;

export const editorReadyWrapper = (
  editorReady: EditorReadyFn,
  sentry: SentryConfig | null,
  artifactId: string,
): PlatformEditorReadyFn => (editorSDK, appDefinitionId, platformOptions) => {
  if (sentry) {
    const sentryOptions = buildSentryOptions(
      sentry.DSN,
      'Editor:Worker',
      getArtifact(),
    );

    const sentryMonitor = platformOptions.monitoring.createSentryMonitorForApp(
      sentryOptions.dsn,
      sentryOptions.config,
    );

    reportError = sentryMonitor.captureException.bind(sentryMonitor);
  }

  let fedopsLogger = platformOptions.monitoring.createFedopsLogger();
  // The platform has no way to know the application name there is a map in the Editor SDK that maps each appDefinitionId to an application name.
  // If your application has been added to this map, the createFedopsLogger function returns an instantiated logger that is ready to use and is configured with your application name.
  // If your application has not been added to the map, createFedopsLogger will return a factory function.
  // You should then invoke this function with your application name to instantiate your logger instance.
  fedopsLogger =
    typeof fedopsLogger === 'function'
      ? fedopsLogger(artifactId)
      : fedopsLogger;

  const flowOptions = {
    fedopsLogger,
    sentryMonitor,
    reportError,
  };

  return editorReady(editorSDK, appDefinitionId, platformOptions, flowOptions);
};
