import * as vscode from "vscode";
import { VOSU_PROVIDER_ID, vosuHttpServerArgs } from "./vosuServer";

export function activate(context: vscode.ExtensionContext): void {
  const server = vosuHttpServerArgs();

  context.subscriptions.push(
    vscode.lm.registerMcpServerDefinitionProvider(VOSU_PROVIDER_ID, {
      provideMcpServerDefinitions: () => [
        new vscode.McpHttpServerDefinition(
          server.label,
          vscode.Uri.parse(server.url),
          undefined,
          server.version
        )
      ]
    })
  );
}

export function deactivate(): void {}
