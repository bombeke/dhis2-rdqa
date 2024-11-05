import { Config } from "./Settings";

const authHeader = Config.authHeader;
const baseUrl = Config.baseUrl;

const namespace = "rdqa";
const key = "assessments";
const data = { exampleField: "exampleValue" };

// Function to create the namespace and store data
export async function createNamespace() {
    const endpoint = `${baseUrl}/api/dataStore/${namespace}/${key}`;
    
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": authHeader
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log(`Namespace '${namespace}' created with key '${key}'`);
        } else {
            const error = await response.json();
            console.error("Error creating namespace:", error.message);
        }
    } catch (error) {
        console.error("Error creating namespace:", error);
    }
}
