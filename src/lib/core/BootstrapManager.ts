export async function hasPermission(): Promise<boolean>{
    const baseUrl =  "http://207.244.250.35:8095/";
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("admin:@D1str1ct_M3")}`,
    };

    try {
        // Check if the namespace exists
        const response = await fetch(`${baseUrl}api/me.json?fields=userRoles[id,displayName]`, {
            headers,
            method: "GET",
        });

        if (response.status === 404) {
            return false;
        } else {
            console.log(response);
            return true;
        }
    } catch (error) {
        console.error("Failed to initialize namespace:", error);
        return false;
    }
}

export async function initializeNamespace() {
    const namespace = "rdqa";
    const defaultData = {
        "installation": { status: "1" },
    };

    const baseUrl =  "http://207.244.250.35:8095/";
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("admin:@D1str1ct_M3")}`, // Replace with valid credentials
    };

    try {
        // Check if the namespace exists
        const response = await fetch(`${baseUrl}api/dataStore/${namespace}`, {
            headers,
            method: "GET",
        });

        if (response.status === 404) {
            // Namespace doesn't exist; create it with default data
            for (const [key, value] of Object.entries(defaultData)) {
                await fetch(`${baseUrl}api/dataStore/${namespace}/${key}`, {
                    headers,
                    method: "POST",
                    body: JSON.stringify(value),
                });
                console.log(`Created key ${key} in namespace ${namespace}`);
            }
        } else {
            console.log(`Namespace ${namespace} already exists`);
        }
    } catch (error) {
        console.error("Failed to initialize namespace:", error);
    }
}