import { ViteSSG } from 'vite-ssg'
import '../tokens.css'
import './style.css'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VBtn, VCol, VContainer, VExpandTransition, VRow } from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { routes } from './router.ts'

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app }) => {
    const vuetify = createVuetify({
      ssr: true,
      theme: {
        defaultTheme: 'light',
      },
      components: {
        VBtn,
        VCol,
        VContainer,
        VExpandTransition,
        VRow,
      },
      icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
      },
    })

    app.use(VueSmoothScroll).use(vuetify)
  },
  { hydration: import.meta.env.PROD },
)
