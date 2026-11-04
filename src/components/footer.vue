<template>
  <div class="footer">
    <picture>
      <source
        type="image/webp"
        srcset="@/assets/banner.png?w=320;640;1280&format=webp&quality=100&as=srcset"
      />
      <img
        src="@/assets/banner.png?w=1280&format=jpeg&quality=100"
        srcset="@/assets/banner.png?w=320;640;1280&format=jpeg&quality=100&as=srcset"
        alt=""
      />
    </picture>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.footer {
  margin-top: 20px;
  text-align: center;
  img {
    width: 100%;
    height: 250px;
    max-width: 700px;
    object-fit: cover;
    object-position: 50% 37%;
    mix-blend-mode: multiply;
  }
}
</style>
