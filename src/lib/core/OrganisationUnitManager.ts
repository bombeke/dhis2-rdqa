import { Config } from "./Settings";

const authHeader = Config.authHeader;
const baseUrl = Config.baseUrl;

// const authHeader = `Basic ${btoa('admin:@D1str1ct_M3')}`;
// const baseUrl = 'http://207.244.250.35:8095';

export async function getOrgUnits(){
    try {
        const response = await fetch(`${baseUrl}/api/organisationUnits.json?fields=id,name&paging=false`, {
            method: 'GET',
            headers: {
                'Authorization': authHeader
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data.organisationUnits;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }