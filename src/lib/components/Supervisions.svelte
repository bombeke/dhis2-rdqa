<script lang="ts">
  import { onMount } from 'svelte';
  async function getOrgUnits(){
    const username = 'admin';
    const password = 'district';
    const base64Credentials = btoa(`${username}:${password}`);
    try {
        const response = await fetch(`https://play.im.dhis2.org/stable-2-39-6/api/organisationUnits.json`, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${base64Credentials}`
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

  onMount(() => {
    getOrgUnits().then((data) => {
        console.log(data);
    });
  });
</script>
<div class="container mx-auto p-4">
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead>
          <tr>
            <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600 border-b">Facility Name</th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600 border-b">Assessment Description</th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600 border-b">Created On</th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600 border-b">Assessed by</th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600 border-b">Operations</th>
          </tr>
        </thead>
        <tbody>
          <!-- Example Row -->
          <tr>
            <td class="px-6 py-4 border-b">Facility A</td>
            <td class="px-6 py-4 border-b">Monthly health check</td>
            <td class="px-6 py-4 border-b">2024-10-25</td>
            <td class="px-6 py-4 border-b">John Doe</td>
            <td class="px-6 py-4 border-b text-center relative">
              <!-- Dropdown -->
              <div class="relative inline-block text-left">
                <button
                  class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true">
                  Operations
                  <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.93l3.71-3.72a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
  
                <!-- Dropdown Menu -->
                <div
                  class="hidden origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1">
                  <div class="py-1" role="none">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1">Edit</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1">Delete</a>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <!-- Additional rows can go here -->
        </tbody>
      </table>
    </div>
  </div>