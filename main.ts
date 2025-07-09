import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
    name: "weather-mcp",
    version: "1.0.0"
});

server.tool("get-weather", "Get the current weather for a city", {
    city: z.string().describe("The name of the city to get the weather for"),
}, async ({ city }: { city: string }) => {
    try {
        const geoUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`;
        const geoResponse = await fetch(geoUrl, { headers: { "User-Agent": "weather-mcp/1.0 (your@email.com)" } });
        const geoData = await geoResponse.json();
        const { lat, lon, display_name } = geoData[0] || {};
        if (!lat || !lon) throw new Error();

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        const current = weatherData.current_weather;
        if (!current) throw new Error();

        return {
            content: [{
                type: "text",
                text: `🌤️ **Weather in ${display_name}:**\n\n**Temperature**: ${current.temperature}°C\n**Wind Speed**: ${current.windspeed} km/h\n**Weather Code**: ${current.weathercode}`,
            }]
        };
    } catch {
        return {
            content: [{
                type: "text",
                text: `Error: Could not get weather for "${city}".`,
            }]
        };
    }
});

const transport = new StdioServerTransport();
server.connect(transport);