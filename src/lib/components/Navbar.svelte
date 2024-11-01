<script lang="ts">
  import { link } from "svelte-spa-router";
    let mobileMenuVisible = false;
function toggleMenu() {
  mobileMenuVisible = !mobileMenuVisible;
}
  </script>
 <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="flex items-center">
        <a href="/" class="text-2xl font-bold text-white">Assessment Planner</a>
      </div>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex space-x-4">
        <a href="/dashboard" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" use:link>Dashboard</a>

        <!-- Supervisions Dropdown -->
        <div class="relative group">
          <div  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
            Assessments
          </div >
          <div class="absolute hidden group-hover:block bg-gray-700 rounded-md shadow-lg py-2 mt-2 w-40 z-10">
            <a href="/assessments/assessments" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white" use:link>Assessments</a>
            <a href="/assessments/create" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white" use:link>Create</a>
          </div>
        </div>

        <!-- Reports Dropdown -->
        <div class="relative group">
          <button class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Reports
          </button>
          <div class="absolute hidden group-hover:block bg-gray-700 rounded-md shadow-lg py-2 mt-2 w-40 z-10">
            <a href="/export/csv" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white" use:link>Export CSV</a>
            <a href="/export/pdf" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white" use:link>Export PDF</a>
          </div>
        </div>
        <a href="/setup" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" use:link>Setup</a>
      </nav>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button on:click={toggleMenu}  id="mobile-menu-button" class="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu (hidden by default) -->
  <div id="mobile-menu" class="hidden md:hidden bg-gray-700" class:hidden={!mobileMenuVisible}>
    <nav class="px-2 pt-2 pb-3 space-y-1">
      <a href="/dashboard" class="block text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-base font-medium" use:link>Dashboard</a>
      
      <!-- Supervisions Dropdown -->
      <div class="px-3 py-2">
        <span class="text-gray-300 text-base font-medium">Supervisions</span>
        <div class="mt-1 space-y-1">
          <a href="/assessments/assessments" class="block text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-base" use:link>Assessments</a>
          <a href="/assessments/create" class="block text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-base" use:link>Create</a>
        </div>
      </div>

      <!-- Reports Dropdown -->
      <div class="px-3 py-2">
        <span class="text-gray-300 text-base font-medium">Reports</span>
        <div class="mt-1 space-y-1">
          <a href="/export/csv" class="block text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-base" use:link>Export CSV</a>
          <a href="/export/pdf" class="block text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-base" use:link>Export PDF</a>
        </div>
      </div>
    </nav>
  </div>
