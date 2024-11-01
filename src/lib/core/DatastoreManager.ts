const namespace = "rdqa";
const key = "assessments";
const data = { exampleField: "exampleValue" };

// Function to create the namespace and store data
export async function createNamespace() {
    const url = `http://your-dhis2-instance.org/api/dataStore/${namespace}/${key}`;
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + btoa("username:password"),  // Replace with your auth mechanism
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
