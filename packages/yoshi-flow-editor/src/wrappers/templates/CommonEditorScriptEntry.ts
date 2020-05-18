import { SentryConfig } from 'yoshi-flow-editor-runtime/build/constants';
import t from './template';
import { TemplateControllerConfig } from './CommonViewerScriptEntry';

type Opts = {
  controllersMeta: Array<TemplateControllerConfig>;
  editorEntryFileName: string;
  shouldUseAppBuilder: boolean;
  editorScriptWrapperPath: string;
  sentry: SentryConfig | null;
  artifactId: string;
};

// We want allow users to use default even despite fact that platform doesn't support it.
export default t<Opts>`
  var editorScriptEntry = require('${({ editorEntryFileName }) =>
    editorEntryFileName}');

  ${({ shouldUseAppBuilder, controllersMeta }) =>
    shouldUseAppBuilder
      ? `
  var editorScriptBuilder = require('@wix/bob-widget-services').editorScriptBuilder;

  var builder = editorScriptBuilder();
  if (editorScriptEntry.editorReady) {
    builder = builder.withEditorReady(editorScriptEntry.editorReady);
  }
  if (editorScriptEntry.appManifest) {
    builder = builder.withAppManifest(editorScriptEntry.appManifest);
  }
  if (editorScriptEntry.eventHandler) {
    builder = builder.withEventHandler(editorScriptEntry.eventHandler);
  }
  ${controllersMeta
    .map(
      (meta, i) =>
        `
  var userController_${i} = require('${meta.controllerFileName}');
  builder = builder.withWidget(userController_${i}.default || userController_${i});`,
    )
    .join('\n  ')}
  editorScriptEntry = builder.build();
  `
      : ''}

  ${({ shouldUseAppBuilder, editorScriptWrapperPath, artifactId, sentry }) =>
    !shouldUseAppBuilder
      ? `
  var editorReadyWrapper = require('${editorScriptWrapperPath}').editorReadyWrapper;
  var sentry = ${
    sentry
      ? `{
    DSN: '${sentry.DSN}',
    id: '${sentry.id}',
    projectName: '${sentry.projectName}',
    teamName: '${sentry.teamName}',
  }`
      : 'null'
  };

  if (editorScriptEntry.editorReady) {
    editorScriptEntry.editorReady = editorReadyWrapper(editorScriptEntry.editorReady, sentry, '${artifactId}');
  }
  `
      : ''}

  module.exports = editorScriptEntry.default || editorScriptEntry;
`;
