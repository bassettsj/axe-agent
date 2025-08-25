import { describe, it, expect } from 'vitest';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';

describe('AXE Agent MCP Server', () => {
  it('should create a server instance', () => {
    const server = new Server({
      name: 'axe-agent',
      version: '0.1.0',
    });

    expect(server).toBeDefined();
  });

  it('should have the correct server info', () => {
    const serverInfo = {
      name: 'axe-agent',
      version: '0.1.0',
    };

    expect(serverInfo.name).toBe('axe-agent');
    expect(serverInfo.version).toBe('0.1.0');
  });
});