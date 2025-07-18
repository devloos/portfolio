import { fileURLToPath, URL } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.startsWith('swiper-');
          },
        },
      },
    }),
    svgLoader({
      defaultImport: 'component',
    }),
    tailwindcss(),
  ],
  server: {
    port: 4550,
    proxy: {
      '/api': 'http://localhost:4560',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    __VITE_APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
