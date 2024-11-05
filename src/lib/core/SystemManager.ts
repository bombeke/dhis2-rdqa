import { Config } from "./Settings";

const authHeader = Config.authHeader;
const baseUrl = Config.baseUrl;

export async function getUID() {
    try {
        const response = await fetch(`${baseUrl}/api/system/id?limit=1`, {
          method: 'GET',
          headers: {
            'Authorization': authHeader,
            'Content-Type': 'application/json'
          }
        });
    
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    
        const data = await response.json();
        console.log("Generated UID:", data.codes[0]);
        return data.codes[0];
    
      } catch (error) {
        console.error("Error fetching UID:", error);
      }
}