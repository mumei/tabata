import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { join, parse, resolve } from 'node:path'
import { imagetools } from 'vite-imagetools'

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
  build: {
    rolldownOptions: {
      input: entryPoints('index.html', '404.html'),
    },
  },
})

function entryPoints(...paths) {
  const entries = paths.map(parse).map((entry) => {
    const { dir, base, name } = entry
    const key = join(dir, name)
    const path = resolve(import.meta.dirname, dir, base)
    return [key, path]
  })

  const config = Object.fromEntries(entries)
  return config
}
