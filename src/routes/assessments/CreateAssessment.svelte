<script lang="ts">
    import { onMount } from 'svelte';
    import { saveAssessment, saveProgramEvent } from '../../lib/core/AssessmentService';
    import { Assessment, DatastoreAssessment, ProgramEvent } from '../../lib/core/models';
    import { getUID } from '../../lib/core/SystemManager';
    import { toISOStringFromDate } from '../../lib/util';
    import { getOrgUnits } from '../../lib/core/OrganisationUnitManager';
  
    // Assessment form data
    let assessmentName = '';
    let assessmentDate = '';
    let selectedOrgUnit = '';
  
    // Searchable dropdown variables
    let searchQuery = '';
    let orgUnits: [] = []; // Organization units from DHIS2
    let filteredOrgUnits: [] = []; // Filtered organization units to display in the dropdown
  
    const authHeader = `Basic ${btoa('admin:district')}`;
    const apiUrl = 'https://play.im.dhis2.org/stable-2-39-6/api/organisationUnits';
    const authHeaders = {
      "Authorization": authHeader
    };
  
    // Fetch organization units from DHIS2 API on component mount
    onMount(async () => {
    //   try {
    //     const response = await fetch(`${apiUrl}.json?fields=id,name&paging=false`, {
    //       headers: authHeaders,
    //     });
    //     const data = await response.json();
    //     orgUnits = data.organisationUnits;
    //     filteredOrgUnits = orgUnits; // Initialize filtered list with all org units
    //   } catch (error) {
    //     console.error("Error fetching organization units:", error);
    //   }
      orgUnits = await getOrgUnits();
      console.log("On Mount", orgUnits);
      filteredOrgUnits = orgUnits;
    });
  
    // Update filteredOrgUnits based on search query
    $: filteredOrgUnits = orgUnits.filter((unit) =>
      unit.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Handle form submission
    async function submitAssessmentForm() {
      const assessmentData = {
        name: assessmentName,
        date: assessmentDate,
        organizationUnit: selectedOrgUnit
      };
      const uid = await getUID();
      await saveAssessment(new DatastoreAssessment(uid, assessmentName, toISOStringFromDate(assessmentDate), [selectedOrgUnit]));
      await saveProgramEvent(new ProgramEvent('viLWxLj3b50', selectedOrgUnit, toISOStringFromDate(assessmentDate), 'COMPLETED', [
        {dataElement: 'Oe50IGDnfqL', value: 'Michael Mwebaze'}, 
        {dataElement: 'jf6U41dolIX', value: 'Carryout facility RDQA'},
        {dataElement: 'GAsP09gxkJT', value: 'Clinic Name'},
        {dataElement: 'GrhbZdYdIOW', value: assessmentName},
      ]));
      console.log("Assessment Submitted:", assessmentData);
      assessmentName = '';
        assessmentDate = '';
        selectedOrgUnit = '';
      // Add logic to submit assessmentData to your server or backend here

    }
  </script>
  
  <form class="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg" on:submit|preventDefault={submitAssessmentForm}>
    <h2 class="text-2xl font-semibold text-gray-800 mb-6">Create Assessment</h2>
    
    <!-- Assessment Name -->
    <label class="block text-gray-700 font-medium mb-2" for="assessmentName">Assessment Name:</label>
    <input
      type="text"
      id="assessmentName"
      bind:value={assessmentName}
      placeholder="Enter assessment name"
      class="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  
    <!-- Assessment Date -->
    <label class="block text-gray-700 font-medium mb-2" for="assessmentDate">Assessment Date:</label>
    <input
      type="date"
      id="assessmentDate"
      bind:value={assessmentDate}
      class="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  
    <!-- Organization Unit Search Input -->
    <label class="block text-gray-700 font-medium mb-2" for="orgUnitSearch">Organization Unit:</label>
    <input
      type="text"
      id="orgUnitSearch"
      bind:value={searchQuery}
      placeholder="Search organization units..."
      class="w-full p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  
    <!-- Organization Unit Dropdown -->
    <select
      bind:value={selectedOrgUnit}
      size="3"
      class="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {#each filteredOrgUnits as unit}
        <option value={unit.id} class="p-2">{unit.name}</option>
      {/each}
    </select>
  
    <!-- Submit Button -->
    <button
      type="submit"
      class="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Submit Assessment
    </button>
  </form>
  