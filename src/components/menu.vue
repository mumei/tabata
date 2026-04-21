<template>
  <div id="menu">
    <H1 class="title">お品書き</H1>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <table>
            <tbody>
            <tr>
              <td colspan="2" style="text-align: left;">焼きまんじゅう</td>
            </tr>
            <tr>
              <td></td>
              <td> (餡無) 1串4個</td>
              <td>200円</td>
            </tr>
            <tr>
              <td></td>
              <td> (餡入) 1串2個</td>
              <td>220円</td>
            </tr>
            </tbody>
          </table>
        </v-col>
        <v-col cols="12" sm="6">
          <table>
            <tbody>
              <tr>
                <td colspan="2" style="text-align: left">うどん</td>
              </tr>
              <tr>
                <td></td>
                <td>(温)かけうどん</td>
                <td>390円</td>
              </tr>
              <tr>
                <td></td>
                <td>(冷)ざるうどん</td>
                <td>390円</td>
              </tr>
            </tbody>
          </table>
        </v-col>
        <v-col cols="12" sm="6">
          <table>
            <tbody>
            <tr>
              <td colspan="2" style="text-align: left">うどん増量</td>
            </tr>
            <tr>
              <td></td>
              <td>大盛り (1.5倍)</td>
              <td>+100円</td>
            </tr>
            <tr>
              <td></td>
              <td>特盛り (2倍)</td>
              <td>+200円</td>
            </tr>
            </tbody>
          </table>
        </v-col>
        <v-col cols="12" sm="6">
          <table>
            <tbody>
            <tr>
              <td colspan="2" style="text-align: left">うどんトッピング</td>
            </tr>
            <tr>
              <td></td>
              <td>玉子</td>
              <td>100円</td>
            </tr>
            <tr>
              <td></td>
              <td>餅</td>
              <td>100円</td>
            </tr>
            </tbody>
          </table>
        </v-col>
        <v-col cols="12" sm="6">
          <table>
            <tbody>
            <tr>
              <td colspan="2" style="text-align: left">天ぷら</td>
            </tr>
            <tr>
              <td></td>
              <td>かき揚げ</td>
              <td>120円</td>
            </tr>
            <tr>
              <td></td>
              <td>ちくわ天</td>
              <td>80円</td>
            </tr>
            </tbody>
          </table>
        </v-col>
        <v-col cols="12" sm="6">
          <table>
            <tbody>
            <tr>
              <td colspan="2" style="text-align: left">その他</td>
            </tr>
            <tr>
              <td></td>
              <td>上泉伊勢守饅頭(酒饅頭)</td>
              <td>120円</td>
            </tr>
            </tbody>
          </table>
        </v-col>
      </v-row>
    </v-container>

    <div class="detail">
      <div class="item">
        <div>
          <picture>
            <source type="image/webp" srcset="@/assets/topImage.png?preset=img&format=webp&srcset">
            <img src="@/assets/topImage.png?preset=img&src" srcset="@/assets/topImage.png?preset=img&srcset" alt="かけうどん（温）" />
          </picture>
        </div>
        <div class="itemTitle">焼きまんじゅう(餡無)</div>
        <div class="description">
          群馬県名物の焼きまんじゅう<br/>
          饅頭の製造のために酒母製造免許を取得して一から手作りしています。<br/>
          <span style="font-size: 14px;">酒母製造免許: 前酒1 第94号</span>
        </div>
      </div>
      <div class="item">
        <div>
          <picture>
            <source type="image/webp" srcset="@/assets/kake.png?preset=img&format=webp&srcset">
            <img src="@/assets/kake.png?preset=img&src" srcset="@/assets/kake.png?preset=img&srcset" alt="かけうどん（温）" />
          </picture>
        </div>
        <div class="itemTitle">かけうどん（温）</div>
        <div class="description">
          極太で腰の強い上州うどん<br/>
          丁寧に作り上げた出し汁<br/>
          高級な素材を合わせ、それを格安の値段にて提供いたします。<br/>
          ※「コ」は季節によって種類が変わります。
        </div>
      </div>
      <div class="item">
        <div>
          <picture>
            <source type="image/webp" srcset="@/assets/zaru.png?preset=img&format=webp&srcset">
            <img src="@/assets/zaru.png?preset=img&src" srcset="@/assets/zaru.png?preset=img&srcset" alt="ざるうどん（冷）"/>
          </picture>
        </div>
        <div class="itemTitle">ざるうどん（冷）</div>
        <div class="description">
          極太で腰の強い上州うどん<br/>
          丁寧に作り上げたつゆ<br/>
          高級な素材を合わせ、それを格安の値段にて提供いたします。<br/>
          ※「コ」は季節によって種類が変わります。
        </div>
      </div>
      <div class="item">
        <div>
          <picture>
            <source type="image/webp" srcset="@/assets/tempra.png?preset=img&format=webp&srcset">
            <img src="@/assets/tempra.png?preset=img&src" srcset="@/assets/tempra.png?preset=img&srcset" alt="かき揚げ天ぷら"/>
          </picture>
        </div>
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
    //font-weight: bold;
    tr{
      td:first-child{
        padding-top: 10px;
        width: 60px;
        font-weight: bold;
      }
      td:nth-child(2){
        padding-top: 10px;
        width: 340px;
        border-bottom: solid 1px;
      }
      td:last-child{
        text-align: right;
        width: 120px;
        border-bottom: solid 1px;
        vertical-align: bottom;
        font-weight: bold;
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
<script setup lang="ts">
</script>
