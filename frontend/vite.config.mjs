import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import Components from 'unplugin-vue-components/vite';
import ViteFonts from 'unplugin-fonts/vite';
import VueRouter from 'unplugin-vue-router/vite';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path'; // Ajouté pour gérer les chemins

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    Vue({
      template: { transformAssetUrls },
    }),
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    Components(),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@stripe/stripe-js': fileURLToPath(new URL('./node_modules/@stripe/stripe-js', import.meta.url)), // Alias Stripe ici
      '@equipements': resolve(__dirname, './src/components/equipements.js'), // Alias pour le composant des équipements
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: {
    port: 8080, // Port de développement
    proxy: {
      // Redirection des requêtes API vers votre backend
      '/api': {
        target: 'http://localhost:3000', // URL de votre backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
