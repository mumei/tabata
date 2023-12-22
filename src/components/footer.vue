<script setup lang="ts">
import banner from '../assets/banner.png'
</script>
<template>
  <div class="footer">
    <img :src="banner"  alt=""/>
  </div>
</template>
<style scoped lang="scss">
.footer{
  margin-top: 20px;
  text-align: center;
  img{
    width: 100%;
    height: 250px;
    max-width: 700px;
    object-fit: cover;
    object-position: 50% 37%;
  }
}
</style>
