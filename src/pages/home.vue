<script setup lang="ts">
import headerArea from '@/components/header.vue'
import aboutArea from '@/components/about.vue'
import Menu from '@/components/menu.vue';
import Footer from '@/components/footer.vue';
import Shop from '@/components/shop.vue';
import Access from '@/components/access.vue';
import ActionMenu from '@/components/ActionMenu.vue'
</script>
<template>
  <div class="root">
    <headerArea/>
    <aboutArea/>
    <Menu />
    <Shop />
    <Access />
    <Footer />
    <action-menu />
  </div>
</template>

<style scoped lang="scss">
.root{
  padding-bottom: 10px;
}
</style>
