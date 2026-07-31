<script setup lang="ts"></script>

<template>
  <div id="access">
    <h1 class="title">アクセス</h1>
    <div class="main">
      <div>
        <iframe
          title="田畑の焼きまんじゅう周辺地図"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25692.629175870334!2d139.102689!3d36.395193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ef2360fb0589b%3A0x8ebb5a04f9658b2e!2z5omL5L2c44KK55Sw55WR44Gu54S844GN44G-44KT44GY44KF44GG!5e0!3m2!1sja!2sjp!4v1703113674802!5m2!1sja!2sjp"
          width="100%"
          height="450"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="details">
        <div class="name">田畑の焼きまんじゅう</div>
        <dl class="information">
          <div>
            <dt>郵便番号</dt>
            <dd>〒371-0007</dd>
          </div>
          <div>
            <dt>住所</dt>
            <dd>群馬県前橋市上泉町49-2</dd>
          </div>
          <div>
            <dt>電話番号</dt>
            <dd>070-8506-0272</dd>
          </div>
          <div>
            <dt>営業時間</dt>
            <dd>9:00〜15:00</dd>
          </div>
          <div>
            <dt>定休日</dt>
            <dd>水曜日</dd>
          </div>
          <div>
            <dt>駐車場</dt>
            <dd>10台</dd>
          </div>
          <div>
            <dt>最寄り駅</dt>
            <dd>上毛電鉄 上泉駅から徒歩5分</dd>
          </div>
          <div>
            <dt>テイクアウト</dt>
            <dd>可能</dd>
          </div>
          <div>
            <dt>支払い方法</dt>
            <dd>現金のみ</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#access {
  margin-top: var(--space-xl);
  padding: 0 var(--space-lg) var(--space-xl);

  .title {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: var(--space-lg);
  }

  .main {
    display: flex;
    align-items: flex-start;
    gap: var(--space-xl);
    max-width: 1100px;
    margin: 0 auto;

    > div {
      flex: 1;
    }

    iframe {
      display: block;
      min-height: 520px;
      border-radius: var(--radius-card);
    }

    .details {
      min-width: 0;
    }

    .name {
      font-weight: bold;
      font-size: 24px;
      margin-bottom: var(--space-sm);
    }

    .information {
      margin: 0;
      font-size: 18px;

      > div {
        display: grid;
        grid-template-columns: minmax(110px, 0.42fr) 1fr;
        gap: var(--space-md);
        padding: var(--space-md) 0;
        border-bottom: var(--rule-hair) solid var(--color-rule);
      }

      dt {
        color: var(--color-muted);
        font-weight: 600;
      }

      dd {
        min-width: 0;
        margin: 0;
        color: var(--color-ink);
        overflow-wrap: anywhere;
      }
    }
  }

  @media only screen and (max-width: 750px) {
    padding-inline: var(--space-md);

    .main {
      flex-direction: column;
      gap: var(--space-lg);

      > div {
        width: 100%;
      }

      iframe {
        min-height: 320px;
        height: 320px;
      }

      .information {
        font-size: 16px;

        > div {
          grid-template-columns: 104px minmax(0, 1fr);
          gap: var(--space-sm);
          padding: var(--space-sm) 0;
        }
      }
    }
  }
}
</style>
