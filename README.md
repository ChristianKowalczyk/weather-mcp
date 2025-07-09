# 🌦️ Weather MCP Server

Hey! This is a little MCP server that tells you the weather for any city you want. I was specifically using Cursor.

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

- 🌍 **Finds your city** (using Nominatim)
- ☀️ **Gets the current weather** (thanks, Open-Meteo!)
- 🌡️ **Tells you the temperature, wind speed, and weather code**
- 🖥️ **Works over stdio** (so you can plug it into other stuff)

## How do I use it?

Once it's running and hooked up to an MCP client, you can ask stuff (Command + Shift + L) like:

- "What's the weather in San Francisco?"
- "Get the current weather for Tokyo"
- "How's the weather in London?"
- "What's the temperature in New York?"

It'll give you the current temp, wind speed, and a weather code for the city you asked about.

## How does it work?

- **main.ts**: The brains of the operation. Handles your weather requests.
- **Nominatim**: Turns city names into coordinates.
- **Open-Meteo**: Gives us the actual weather data.

## Stuff it uses

- `@modelcontextprotocol/sdk` (for the MCP magic)
- `zod` (for making sure your input is cool)
- `typescript` (because types are nice)

---

That’s it! If you have any questions or want to make it better, feel free to open an issue or PR. Stay breezy! 🌬️