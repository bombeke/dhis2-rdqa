import type { DataElement } from "./models";
import { Config } from "./Settings";

const authHeader = Config.authHeader;
const baseUrl = Config.baseUrl;

export async function createDataElements(dataElements: Array<DataElement>){
    const endpoint = `${baseUrl}/api/dataElements`;
    for (const element of dataElements) {
      console.log(element);
        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': authHeader
            },
            body: JSON.stringify(element)
          });
    
          if (response.ok) {
            console.log(`Data element created: ${element.name}`);
          } else {
            const errorData = await response.json();
            console.error(`Failed to create ${element.name}:`, errorData);
          }
        } catch (error) {
          console.error(`Error creating data element ${element.name}:`, error);
        }
      }
}

export async function createDataElementGroup(groupName: string) {
  const endpoint = `${baseUrl}/api/dataElementGroups.json`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
    },
    body: JSON.stringify({
        name: groupName,
        displayName: groupName,
        shortName: groupName,
        code: groupName.toLowerCase().replace(/\s+/g, '_'),
    }),
});

if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Error creating data element group: ${errorMessage}`);
}

const group = await response.json();
console.log('Data Element Group created:', group);
return group;
}