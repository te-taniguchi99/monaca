import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const HOST = process.env.MONACA_SERVER_HOST || '0.0.0.0';

export default defineConfig({
  root: './src',
  base: '',
  plugins: [vue()],
  build: {
    outDir: '../www',
    minify: false,
    emptyOutDir: false,
  },
  server: {
    host: HOST,
    port: 8080,
  },
  publicDir: '../public'
});
