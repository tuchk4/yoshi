import {
  SentryConfig,
  ExperimentsConfig,
} from 'yoshi-flow-editor-runtime/build/constants';
import t from './template';

type Opts = Record<
  | 'editorAppWrapperPath'
  | 'componentFileName'
  | 'controllerFileName'
  | 'viewerAppFileName'
  | 'componentName',
  string
> & {
  sentryConfig: SentryConfig | null;
  experimentsConfig: ExperimentsConfig | null;
};

export default t<Opts>`
    import React from 'react';
    import ReactDOM from 'react-dom';
    import EditorAppWrapper from '${({ editorAppWrapperPath }) =>
      editorAppWrapperPath}';

    import UserComponent from '${({ componentFileName }) => componentFileName}';
    import createController from '${({ controllerFileName }) =>
      controllerFileName}';
    import * as viewerApp from '${({ viewerAppFileName }) =>
      viewerAppFileName}';
    var importedApp = viewerApp;

    var componentName = '${({ componentName }) => componentName}';
    var sentryConfig = ${({ sentryConfig }) =>
      sentryConfig
        ? `{
      DSN: '${sentryConfig.DSN}',
      id: '${sentryConfig.id}',
      projectName: '${sentryConfig.projectName}',
      teamName: '${sentryConfig.teamName}',
    }`
        : 'null'};

    var experimentsConfig = ${({ experimentsConfig }) =>
      experimentsConfig
        ? `{
        scope: '${experimentsConfig.scope}'
      }`
        : 'null'};

    var WrappedEditorApp = () => React.createElement(EditorAppWrapper, {
      UserComponent: UserComponent,
      name: componentName,
      sentry: sentryConfig,
      experimentsConfig: experimentsConfig,
      userController: createController,
      mapPlatformStateToAppData: importedApp.mapPlatformStateToAppData,
      customInitAppForPage: importedApp.initAppForPage
    });

    ReactDOM.render(React.createElement(WrappedEditorApp, null), document.getElementById('root'));
`;
