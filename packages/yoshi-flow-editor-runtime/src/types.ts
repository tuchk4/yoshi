import { EditorReadyFn as PlatformEditorReadyFn } from '@wix/platform-editor-sdk';

export type ReportError = (error: Error | ErrorEvent | string) => void;

export interface EditorReadyFlowOptions {
  fedopsLogger: any;
  sentryMonitor: any;
  reportError: ReportError;
}

type EditorReadyParams = Parameters<PlatformEditorReadyFn>;

export type EditorReadyFn = (
  editorSDK: EditorReadyParams[0],
  appDefinitionId: EditorReadyParams[1],
  platformOptions: EditorReadyParams[2],
  flowOptions: EditorReadyFlowOptions,
) => Promise<void> | void;
