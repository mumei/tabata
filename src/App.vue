<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'

const route = useRoute()

useHead(() => ({
  title: typeof route.meta.title === 'string' ? route.meta.title : undefined,
  meta: [{ name: 'robots', content: route.meta.noindex ? 'noindex' : 'index, follow' }],
}))
</script>
<template>
  <router-view />
</template>

<style scoped lang="scss">
.root {
  padding-bottom: 10px;
}
</style>
