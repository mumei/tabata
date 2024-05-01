import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url';
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
      template: {
        transformAssetUrls: {
          tags: {
            source: ['src', 'srcset'],
            img: ['src', 'srcset'],
          }
        },
      }
    }),
    imagePresets({
      thumbnail: widthPreset({
        class: 'img thumb',
        loading: 'lazy',
        widths: [48, 96],
        formats: {
          webp: { quality: 50 },
          jpg: { quality: 70 },
        },
      }),
      img: widthPreset({
        class: 'img normal',
        loading: 'lazy',
        widths: [320, 640, 1280],
        formats: {
          webp: { quality: 100 },
          jpg: { quality: 100 },
        },
      }),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './'
})
