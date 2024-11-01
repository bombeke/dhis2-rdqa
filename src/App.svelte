<script lang="ts">
  import Router from "svelte-spa-router";
  import { routes } from './routes/routes';
  import Header from "./lib/components/Header.svelte";
</script>

<main>
<Header/>
<Router {routes}/>
</main>

<style>
  
</style>
