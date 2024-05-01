<script setup lang="ts">
import img0Srcset from '@/assets/img_0.png?preset=img&srcset'
import img1Srcset from '@/assets/img_1.png?preset=img&srcset'
import img2Srcset from '@/assets/img_2.png?preset=img&srcset'
import img3Srcset from '@/assets/img_3.png?preset=img&srcset'


import img0Src from '@/assets/img_0.png?preset=img&src'
import img1Src from '@/assets/img_1.png?preset=img&src'
import img2Src from '@/assets/img_2.png?preset=img&src'
import img3Src from '@/assets/img_3.png?preset=img&src'

import img0WebpSrcset from '@/assets/img_0.png?preset=img&format=webp&srcset'
import img1WebpSrcset from '@/assets/img_1.png?preset=img&format=webp&srcset'
import img2WebpSrcset from '@/assets/img_2.png?preset=img&format=webp&srcset'
import img3WebpSrcset from '@/assets/img_3.png?preset=img&format=webp&srcset'
import 'vue3-carousel/dist/carousel.css'

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const images = [
  {srcset: img0Srcset, src: img0Src, webp: img0WebpSrcset },
  {srcset: img1Srcset, src: img1Src, webp: img1WebpSrcset},
  {srcset: img2Srcset, src: img2Src, webp: img2WebpSrcset},
  {srcset: img3Srcset, src: img3Src, webp: img3WebpSrcset}
];
</script>
<template>
  <div id="shop">
    <H1 class="title">お店の紹介</H1>
    <div class="item">
      <div>
        <picture>
          <source type="image/webp" srcset="@/assets/gate.png?preset=img&format=webp&srcset">
          <img src="@/assets/gate.png?preset=img&src" srcset="@/assets/gate.png?preset=img&srcset" alt="入口の様子" />
        </picture>
      </div>
      <div>
        <H3 class="commentTitle">入口の様子</H3>
        手作り手編みの暖簾と手作り看板
      </div>
    </div>
    <div class="item">
      <div>
        <h3 class="commentTitle">店内の様子</h3>
      </div>
      <div>
        <picture>
          <source type="image/webp" srcset="@/assets/inside.png?preset=img&format=webp&srcset">
          <img src="@/assets/inside.png?preset=img&src" srcset="@/assets/inside.png?preset=img&srcset" alt="店内の様子" />
        </picture>
      </div>
    </div>
    <div class="item">
      <div>
        <picture>
          <source type="image/webp" srcset="@/assets/farm.png?preset=img&format=webp&srcset">
          <img src="@/assets/farm.png?preset=img&src" srcset="@/assets/farm.png?preset=img&srcset" alt="お店の裏の畑" />
        </picture>
      </div>
      <div>
        <h3 class="commentTitle">お店の裏の畑</h3>
        野菜は裏の畑で無農薬にて育てておりますので安心してお召し上がりください。
      </div>
    </div>


    <H2 class="otherImages">その他の写真</H2>
    <div class="slide">
    <carousel
        pauseAutoplayOnHover
        :items-to-show="1.3"
        wrapAround
        :autoplay="3000"
        :transition="1000" >
      <slide v-for="(item,index) in images" :key="index">
        <div class="imgArea">
          <picture>
            <source type="image/webp" :srcset="item.webp">
            <img :src="item.src" :srcset="item.srcset" alt="">
          </picture>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
    </div>
  </div>
</template>
<style scoped lang="scss">
#shop{
  padding: 0 20px;
  padding-top: 40px;
  .title{
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }

  .item{
    display: flex;
    flex-direction: row;
    margin-top: 20px;

    div{
      padding: 5px;
      &:has(img){
        padding: 0;
        position: relative;
        &:after{
          position: absolute;
          content: '';
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          box-shadow: inset 0 0 10px 10px white;
        }
      }
      &:has(+div){
        text-align: right;
      }

      img{
        position: relative;
        width: 100%;

      }
      flex: 1;
      font-size: 20px;
      .commentTitle{
        font-size: 25px;
        font-weight: bold;
      }
    }
  }

  @media only screen and (max-width: 750px) {
    .item{
      flex-direction: column;
      &:has(div+div>img){
        flex-direction: column-reverse;
        div{
          text-align: left;
        }
      }
    }
  }
  .otherImages{
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
  }
  .slide{
    background-color: #f1f1f1;
    padding: 20px 0;
  }
  .imgArea{
    width: 90%;
    height: 400px;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    &:has(img){
       padding: 0;
       position: relative;
       &:after{
         position: absolute;
         content: '';
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
         box-shadow: inset 0 0 10px 10px #f1f1f1;
       }
     }
  }
}
</style>
