<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import headerArea from '@/components/header.vue'
import aboutArea from '@/components/about.vue'
import Menu from '@/components/menu.vue'
import Footer from '@/components/footer.vue'
import Shop from '@/components/shop.vue'
import Access from '@/components/access.vue'
import ActionMenu from '@/components/ActionMenu.vue'
import Media from '@/components/media.vue'
import { trackEvent } from '@/analytics'

const sections = ['about', 'menu', 'shop', 'media', 'access'] as const
let sectionObserver: IntersectionObserver | undefined

onMounted(() => {
  const viewedSections = new Set<string>()

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionName = entry.target.id

        if (!entry.isIntersecting || viewedSections.has(sectionName)) {
          return
        }

        viewedSections.add(sectionName)
        trackEvent('section_view', { section_name: sectionName })
        sectionObserver?.unobserve(entry.target)
      })
    },
    {
      rootMargin: '-35% 0px -55% 0px',
      threshold: 0,
    },
  )

  sections.forEach((sectionName) => {
    const section = document.getElementById(sectionName)
    if (section) {
      sectionObserver?.observe(section)
    }
  })
})

onBeforeUnmount(() => {
  sectionObserver?.disconnect()
})
</script>
<template>
  <div class="root">
    <headerArea />
    <aboutArea />
    <Menu />
    <Shop />
    <Media />
    <Access />
    <Footer />
    <action-menu />
  </div>
</template>

<style scoped lang="scss">
.root {
  padding-bottom: 10px;
}
</style>
