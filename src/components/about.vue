<script setup lang="ts">
import about from '../assets/about.png'
</script>
<template>
  <div id="about">
    <img :src="about"  alt=""/>
  </div>
</template>
<style scoped lang="scss">
#about{
  text-align: center;
  img{
    width: 100%;
    max-width: 700px;
    object-fit: contain;
  }
}
</style>
