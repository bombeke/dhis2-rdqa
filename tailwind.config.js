/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,svelte,}",
  ],
  theme: {
    extend: {
      colors: {
        'dhis-blue': '#2C6693',
      }
    },
  },
  plugins: [],
}

