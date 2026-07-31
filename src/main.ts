import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VBtn, VCol, VContainer, VExpandTransition, VRow, VTooltip } from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import VueSmoothScroll from 'vue3-smooth-scroll'
import router from './router.ts'

const vuetify = createVuetify({
  components: {
    VBtn,
    VCol,
    VContainer,
    VExpandTransition,
    VRow,
    VTooltip,
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

createApp(App).use(VueSmoothScroll).use(vuetify).use(router).mount('#app')
