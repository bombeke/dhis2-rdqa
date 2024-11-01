<script lang="ts">
  import { chart } from "svelte-apexcharts";
  import mapboxgl from "mapbox-gl";
  import { onMount } from "svelte";

  const options = {
    chart: {
      type: "bar",
    },
    series: [
      {
        name: "sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const optionz = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  onMount(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibXdlYmF6ZSIsImEiOiJjbTJ2b21kODQwZG16Mm1xNjMza2t2bXdvIn0.PiBwMihzvnrahgh3OftrZw";
    const map = new mapboxgl.Map({
      container: "map",
      center: [-74.5, 40],
      zoom: 9,
    });
  });
</script>

<div class="container mx-auto p-4">
  <h1 class="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>

  <!-- Dashboard Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- Row 1, Column 1 -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-2">
        Data Visualization 1
      </h2>
      <div class="h-80 bg-gray-100 rounded flex items-center justify-center">
        <!-- Placeholder for Data Visualization (e.g., Chart.js) -->
        <div use:chart={options}></div>
      </div>
    </div>

    <!-- Row 1, Column 2 -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-2">
        Data Visualization 2
      </h2>
      <div class="h-80 bg-gray-100 rounded flex items-center justify-center">
        <div use:chart={optionz}></div>
      </div>
    </div>

    <!-- Row 1, Column 3 -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-2">
        Data Visualization 3
      </h2>
      <div class="h-80 bg-gray-100 rounded flex items-center justify-center">
        <div id="map"></div>
      </div>
    </div>

    <!-- Row 2, Column 1 -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-2">
        Data Visualization 4
      </h2>
      <div class="h-80 bg-gray-100 rounded flex items-center justify-center">
        <span class="text-gray-500">Chart 4</span>
      </div>
    </div>

    <!-- Row 2, Column 2 -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-2">
        Data Visualization 5
      </h2>
      <div class="h-80 bg-gray-100 rounded flex items-center justify-center">
        <span class="text-gray-500">Chart 5</span>
      </div>
    </div>

    <!-- Row 2, Column 3 -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-lg font-semibold text-gray-700 mb-2">
        Data Visualization 6
      </h2>
      <div class="h-80 bg-gray-100 rounded flex items-center justify-center">
        <span class="text-gray-500">Chart 6</span>
      </div>
    </div>
  </div>
</div>
