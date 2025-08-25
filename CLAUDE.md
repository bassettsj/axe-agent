# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AXE Agent is a Model Context Protocol (MCP) server designed to help solve AXE accessibility errors. The project provides automated assistance for identifying, understanding, and resolving accessibility issues detected by AXE testing tools.

## Development Commands

### Building and Running
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled MCP server
- `npm run dev` - Watch mode compilation during development

### Testing and Quality
- `npm test` - Run test suite with Vitest
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix

## Architecture

### Core Structure
- **MCP Server**: Built using `@modelcontextprotocol/sdk` for protocol communication
- **Transport**: Uses stdio transport for communication with MCP clients
- **Entry Point**: `src/index.ts` contains the basic MCP server setup
- **Distribution**: Compiled output in `dist/` directory

### Development Roadmap
The project follows a phased development approach (see ROADMAP.md):

**Phase 1**: Core MCP tools for AXE result analysis, violation explanations, and fix suggestions
**Phase 2**: Framework-specific code generation (React, Vue, Angular)
**Phase 3**: Advanced analysis tools for color contrast, keyboard navigation, screen readers
**Phase 4**: Testing, validation, and WCAG compliance checking
**Phase 5**: Machine learning features and optimization

### Key MCP Tools (Planned)
- `analyze_axe_results` - Parse AXE-core JSON results
- `explain_violation` - Detailed accessibility violation explanations
- `suggest_fixes` - Generate specific fix recommendations
- `validate_fix` - Verify proposed accessibility fixes
- `get_wcag_info` - WCAG guideline information retrieval

## Testing

The project uses Vitest for testing. Test files are located in the `tests/` directory and follow the pattern `*.test.ts`.