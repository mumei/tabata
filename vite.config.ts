import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { imagetools } from 'vite-imagetools'
import type {} from 'vite-ssg'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          tags: {
            source: ['src', 'srcset'],
            img: ['src', 'srcset'],
          },
        },
      },
    }),
    imagetools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // The site is served from the root of its custom domain. Root-relative
  // assets keep the GitHub Pages 404 document working for nested URLs.
  base: '/',
  ssr: {
    noExternal: ['vuetify'],
  },
  ssgOptions: {
    includedRoutes: () => ['/', '/404'],
    dirStyle: 'flat',
  },
})
