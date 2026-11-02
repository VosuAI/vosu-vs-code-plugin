import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { VOSU_PROVIDER_ID, vosuHttpServerArgs } from "./vosuServer";

test("points VS Code at the live VOSU MCP endpoint", () => {
  const server = vosuHttpServerArgs();
  assert.equal(server.label, "VOSU");
  assert.equal(server.url, "https://vosu.ai/mcp");
  assert.equal(server.version, "1.0.0");
});

test("package.json activates the same provider id", () => {
  const pkg = JSON.parse(
    readFileSync(join(__dirname, "..", "package.json"), "utf8")
  ) as {
    name: string;
    publisher: string;
    engines: { vscode: string };
    activationEvents: string[];
    contributes: { mcpServerDefinitionProviders: { id: string; label: string }[] };
  };

  assert.equal(pkg.name, "vosuai");
  assert.equal(pkg.publisher, "VosuAI");
  assert.equal(pkg.engines.vscode, "^1.101.0");
  assert.deepEqual(pkg.activationEvents, [`onMcpCollection:${VOSU_PROVIDER_ID}`]);
  assert.deepEqual(pkg.contributes.mcpServerDefinitionProviders, [
    { id: VOSU_PROVIDER_ID, label: "VOSU" }
  ]);
});
