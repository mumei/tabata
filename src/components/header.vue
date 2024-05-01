<template>
  <div>
    <div class="imageArea">
      <picture>
        <source type="image/webp" srcset="@/assets/topImage.png?preset=img&format=webp&srcset">
        <img src="@/assets/topImage.png?preset=img&src" srcset="@/assets/topImage.png?preset=img&srcset" alt="田畑の焼きまんじゅう">
      </picture>
    </div>
    <div class="title">
      <span>手作り田畑の</span>
      <span>焼きまんじゅう</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title{
  font-weight: bold;
  color: white;
  text-align: left;
  position: absolute;
  top: 100px;
  margin-left: 20px;

  -webkit-text-stroke: 1px white;
  text-stroke: 1px white;

  span:nth-child(1){
    display: block;
    font-size: 30px;
  }
  span:nth-child(2){
    display: block;
    font-size: 70px;
  }
}

.imageArea{
  position: relative;
  left: 0;
  right: 0;
  img{
    width: 100%;
    filter: blur(4px) opacity(80%);;
    object-fit: cover;
    object-position: 50% 50%;
    height: 300px;
  }
}
@media only screen and (max-width: 600px) {
  .title {
    top: 100px;
    span:nth-child(1){
      font-size: 20px;
    }
    span:nth-child(2){
      font-size: 40px;
    }
  }
  .imageArea{
    img{
      height: 200px;
    }
  }
}
</style>
<script setup lang="ts">
</script>
