<template>
  <div class="footer">
    <picture>
      <source type="image/webp" srcset="@/assets/banner.png?preset=img&format=webp&srcset">
      <img src="@/assets/banner.png?preset=img&src" srcset="@/assets/banner.png?preset=img&srcset" alt=""/>
    </picture>
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
<script setup lang="ts">
</script>
