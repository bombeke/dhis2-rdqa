import { mount } from 'svelte';
// import './lib/dhis2/dhis2.translate.js';
// import './lib/dhis2/dhis2.menu.js';
// import './lib/dhis2/dhis2.menu.ui.js';
import './app.css';
import App from './App.svelte';


const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
