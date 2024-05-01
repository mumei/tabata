<script setup lang="ts">
import kake from '../assets/kake.png'
import zaru from '../assets/zaru.png'
import tempra from '../assets/tempra.png'
</script>
<template>
  <div id="menu">
    <H1 class="title">お品書き</H1>
    <table>
      <tr>
        <td>焼きまんじゅう (1串４個)</td>
        <td>200円</td>
      </tr>
      <tr>
        <td>餡入り焼きまんじゅう (1串2個)</td>
        <td>220円</td>
      </tr>
      <tr>
        <td>かけうどん（温）</td>
        <td>390円</td>
      </tr>
      <tr>
        <td>ざるうどん（冷）</td>
        <td>390円</td>
      </tr>
      <tr>
        <td>かき揚げ天ぷら</td>
        <td>100円</td>
      </tr>
    </table>

    <div class="detail">
      <div class="item">
        <div><img :src="kake"/></div>
        <div class="itemTitle">かけうどん（温）</div>
        <div class="description">
          極太で腰の強い上州うどん<br/>
          丁寧に作り上げた出し汁<br/>
          高級な素材を合わせ、それを格安の値段にて提供いたします。<br/>
          ※「コ」は季節によって種類が変わります。
        </div>
      </div>
      <div class="item">
        <div><img :src="zaru"/></div>
        <div class="itemTitle">ざるうどん（冷）</div>
        <div class="description">
          極太で腰の強い上州うどん<br/>
          丁寧に作り上げたつゆ<br/>
          高級な素材を合わせ、それを格安の値段にて提供いたします。<br/>
          ※「コ」は季節によって種類が変わります。
        </div>
      </div>
      <div class="item">
        <div><img :src="tempra"/></div>
        <div class="itemTitle">かき揚げ天ぷら</div>
        <div class="description">
          裏の畑で採りたての新鮮野菜を使用したかき揚げです。
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.detail{
  margin-top: 40px;
  display: flex;
  .item{
    padding: 5px;
    flex: 1;

    div{
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
          box-shadow: inset 0 0 8px 8px white;
        }
      }
    }

    img{
      width: 100%;
    }
    .itemTitle{
      font-weight: bold;
      font-size: 24px;
    }
    .description{
      font-size: 20px;
    }
  }
}

#menu{
  padding: 0 20px;
  .title{
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }
  table{
    margin: 0 auto;
    font-size: 25px;
    border-collapse: collapse;
    font-weight: bold;
    tr{
      td:first-child{
        padding-top: 10px;
        width: 400px;
        border-bottom: solid 1px;
      }
      td:last-child{
        text-align: right;
        width: 100px;
        border-bottom: solid 1px;
        vertical-align: bottom;
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .detail{
    flex-direction: column;
    .item{
      padding: 20px 0;
    }
  }
  #menu{
    table{
      font-size: 19px;
    }
  }
}
</style>
