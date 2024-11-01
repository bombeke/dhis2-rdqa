
export async function getOrgUnits(){
    const authHeader = `Basic ${btoa('admin:@D1str1ct_M3')}`;
    try {
        const response = await fetch(`http://207.244.250.35:8095/api/organisationUnits.json`, {
            method: 'GET',
            headers: {
                'Authorization': authHeader
            }
        });

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }