# VOSU for VS Code

Generate images, videos, and 3D from VS Code using the VOSU MCP server at `https://vosu.ai/mcp`.

The first tool call asks you to sign in to VOSU. Listing tools does not. `check_balance` does not spend credits.

## Install

From the Marketplace, once published: search for **VOSU**.

From a local package:

```bash
pnpm install
pnpm test
pnpm run package
code --install-extension vosuai-1.0.0.vsix
```

Reload VS Code. **MCP: List Servers** should include **VOSU**. In chat, ask it to check your VOSU credits.

## Publish

The Marketplace id is `VosuAI.vosuai`. Publish under the `VosuAI` publisher at [marketplace.visualstudio.com/manage](https://marketplace.visualstudio.com/manage), then:

```bash
pnpm exec vsce login VosuAI
pnpm exec vsce publish
```

`vsce publish` asks for an Azure DevOps personal access token with the Marketplace **Manage** scope. Packaging does not upload anything.

## Support

support@vosu.ai
