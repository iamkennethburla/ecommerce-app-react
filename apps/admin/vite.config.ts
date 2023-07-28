/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  cacheDir: '../../node_modules/.vite/admin',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  define: {
    'process.env': {
      NODE_ENV: 'development',
      API_URL: 'http://localhost:1337/api/',
    },
  },

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
