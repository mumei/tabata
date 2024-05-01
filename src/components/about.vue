<script setup lang="ts">
import about from '../assets/about.png'

const alt = '手作り田端の焼きまんじゅう。 江戸時代、群馬で生まれた焼きまんじゅう。その美味しさから受け継がれてきた味と伝統。麹・米・小麦で作ったまんじゅうに秘伝のたれをつけて焼き上げた素朴な味わい。そんな昔懐かしい味を再現した田畑の焼きまんじゅう。是非、ご賞味ください。';
</script>
<template>
  <div id="about">
    <img :src="about"  :alt="alt"/>
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
