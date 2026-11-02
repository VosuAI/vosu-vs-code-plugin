/** Values the VS Code extension and its manifest must agree on. */
export const VOSU_PROVIDER_ID = "vosu";
export const VOSU_SERVER_LABEL = "VOSU";
export const VOSU_MCP_URL = "https://vosu.ai/mcp";
export const VOSU_SERVER_VERSION = "1.0.0";

export function vosuHttpServerArgs(): {
  label: string;
  url: string;
  version: string;
} {
  return {
    label: VOSU_SERVER_LABEL,
    url: VOSU_MCP_URL,
    version: VOSU_SERVER_VERSION
  };
}
