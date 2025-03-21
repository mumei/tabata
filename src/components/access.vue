<script setup lang="ts">

</script>

<template>
  <div id="access">
    <h1 class="title">アクセス</h1>
    <div class="main">
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25692.629175870334!2d139.102689!3d36.395193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ef2360fb0589b%3A0x8ebb5a04f9658b2e!2z5omL5L2c44KK55Sw55WR44Gu54S844GN44G-44KT44GY44KF44GG!5e0!3m2!1sen!2sus!4v1703113674802!5m2!1sen!2sus" width="100%" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div>
        <div class="name">田畑の焼きまんじゅう</div>
        <table>
          <tr>
            <td>郵便番号:</td>
            <td>〒371-0007</td>
          </tr>
          <tr>
            <td>住所:</td>
            <td>群馬県前橋市上泉町49-2</td>
          </tr>
          <tr>
            <td>電話番号:</td>
            <td>070-8506-0272</td>
          </tr>
          <tr>
            <td>営業時間:</td>
            <td>8:30 ~ 15:00</td>
          </tr>
          <tr>
            <td>定休日:</td>
            <td>水曜日</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#access{
  margin-top: 20px;
  .title{
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .main{
    display: flex;
    >div{
      flex: 1;
    }

    .name{
      font-weight: bold;
      font-size: 24px;
    }

    div:last-child{
      padding-left: 10px;
    }

    table{
      font-size: 24px;
      td{
        padding-top: 25px;
        vertical-align: top;

        &:first-child{
          width: 150px;
        }
      }
    }
  }

  @media only screen and (max-width: 750px) {
    .main{
      flex-direction: column;

      table{
        font-size: 20px;
      }
    }
  }
}
</style>
