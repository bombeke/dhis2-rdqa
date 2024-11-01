<script lang="ts">
    import { createProgram, createProgramStage } from '../../lib/core/AssessmentService';
    import { initializeNamespace, hasPermission } from '../../lib/core/BootstrapManager';
    import { createDataElementGroup, createDataElements } from '../../lib/core/DataElementManager';
    import { ProgramStage } from '../../lib/core/models';
    import { data_elements } from '../../lib/data/data_elements';
    import { onMount } from 'svelte';

    let hasThePermission = false;

    async function initiateSetup(){
        const userConfirmed = confirm("Do you want to proceed with the setup process?");
        if (userConfirmed) {
          //await createDataElements(data_elements);
          //await createProgram();
          const sampleStage = new ProgramStage("Assessment", {id: 'viLWxLj3b50'}, [{
            'dataElement': {id: 'jf6U41dolIX'},
            compulsory: true
          }])
          await createProgramStage(sampleStage);
          //await createDataElementGroup('rdqa_test');
          console.log('Setup process initiated...');
      //process 1
      //Create rdqa data element group
      //create data elements and add them to the group
      //create event program and add the data elements from the group

    } else {
      console.log('Setup process cancelled.');
      //check if the event program has data
      //if it has, delete and reinstallation cannot happen
      //if it doesn't, the process in 1 above will proceed
    }
    }
    onMount(async function(){
    	// hasPermission().then(async (response) => {
		// 	console.log(await response.json());
		// })
        hasThePermission = await hasPermission();
        console.log(hasThePermission)
	})
</script>
<div class="flex items-center justify-center h-screen">
    <div class="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
      <h1 class="text-2xl font-semibold mb-4">Setup Process</h1>
      <p class="mb-6">Click the button below to initiate the setup process.</p>
      <button 
        on:click={initiateSetup}
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Start Setup
      </button>
    </div>
  </div>