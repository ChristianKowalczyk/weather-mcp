# 🌦️ Weather MCP Server

This is a little MCP server that tells you the weather for any city you want. I was specifically using Cursor.

## Quick Start with Cursor

1. **Run:**
   ```bash
   npm install
   ```
2. **Build:**
   ```bash
   npm run build
   ```
3. **Configure in Cursor:**
   - Go to **Cursor Settings > Tools & Integrations** to get to `mcp.json`.
   - Add something like this:
     ```json
     {
       "mcpServers": {
         "weather-mcp": {
           "command": "node",
           "args": ["path/to/dist/main.js"]
         }
       }
     }
     ```
   - Refresh Cursor/your chat and it should work! You should be able to see the tool in Cursor settings if it's working.

## What does it do?

- 🌍 **Finds your city** (Nominatim)
- ☀️ **Gets the current weather** (Open-Meteo)

## How do I use it?

Once it's running and hooked up to an MCP client, you can ask stuff (Command + Shift + L) like:

- "What's the weather in Honesdale, PA?"

## How does it work?

- **main.ts**: Handles weather requests.
- **Nominatim**: Turns city names into coords.
- **Open-Meteo**: Gives us the actual weather data.

---
