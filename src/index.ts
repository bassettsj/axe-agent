import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server(
  {
    name: 'axe-agent',
    version: '0.1.0',
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('AXE Agent MCP server running on stdio');
}

main().catch(console.error);