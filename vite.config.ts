import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist/build',
    rollupOptions: {
      output:{
        entryFileNames: 'bundle.js',
        assetFileNames: (assetInfo) => {
          //name is deprecated but I use it for now.
          if (assetInfo.type === 'asset' && assetInfo.name.endsWith('.css')){
            //console.log(assetInfo);
            return 'bundle.css';
          }
          return '[name][extname]'; 
        }
      }
    }
  },
  base: './',
  plugins: [svelte()],
})
