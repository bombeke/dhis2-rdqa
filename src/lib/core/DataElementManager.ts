import type { DataElement } from "./models";

export async function createDataElements(dataElements: Array<DataElement>){
    const authHeader = `Basic ${btoa('admin:@D1str1ct_M3')}`;
    const endpoint = "http://207.244.250.35:8095/api/dataElements";
    console.log(endpoint)
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
  const dhis2BaseUrl = "http://207.244.250.35:8095";
  //const authHeader = `Basic ${btoa('admin':'D1str1ct_M3')}`;
  const username = 'admin';
const password = '@D1str1ct_M3';
  console.log(`${dhis2BaseUrl}/api/dataElementGroups`)
  const response = await fetch(`/api/dataElementGroups.json`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${username}:${password}`)}`
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