<script setup lang="ts">
import topImage from "../assets/topImage.png"
</script>

<template>
  <div>
    <div class="imageArea">
      <img :src="topImage">
    </div>
    <div class="title">
      <div>手作り田畑の</div>
      <div>焼きまんじゅう</div>
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

  div:nth-child(1){
    font-size: 30px;
  }
  div:nth-child(2){
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
    div:nth-child(1){
      font-size: 20px;
    }
    div:nth-child(2){
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
