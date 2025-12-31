<script setup lang="ts">
const mediaArticles = [
  {
    title: '前橋500円グルメ探検隊▶３',
    source: '前橋新聞 mebuku',
    url: 'https://mebuku.city/gourmet/gourmet-43404/',
    description: '自家栽培の野菜をたっぷり使ったうどんと巨大なかき揚げ天を紹介'
  },
  {
    title: 'コがたっぷりの上州うどん',
    source: '前橋新聞 mebuku',
    url: 'https://mebuku.city/gourmet/gourmet-23811/',
    description: '極太麺の上州うどんと1.5倍サイズの焼きまんじゅうを紹介'
  },
  {
    title: 'グルメ散歩③ 前橋のオモウマ店大集合',
    source: '前橋新聞 mebuku',
    url: 'https://mebuku.city/news/play/post-49463/',
    description: '驚きのボリュームと味を誇る前橋の個性的な飲食店として紹介'
  },
  {
    title: '麺食い2025ランキング',
    source: '前橋新聞 mebuku',
    url: 'https://mebuku.city/gourmet/gourmet-54687/',
    description: '蕎麦、うどんの"二刀流"特集で紹介'
  }
];
</script>
<template>
  <div id="media">
    <h1 class="title">メディア掲載</h1>
    <p class="subtitle">当店をご紹介いただいたメディア記事</p>
    <div class="articles">
      <a
        v-for="(article, index) in mediaArticles"
        :key="index"
        :href="article.url"
        target="_blank"
        rel="noopener noreferrer"
        class="article"
      >
        <span class="source">{{ article.source }}</span>
        <h3 class="articleTitle">{{ article.title }}</h3>
        <p class="description">{{ article.description }}</p>
      </a>
    </div>
  </div>
</template>
<style scoped lang="scss">
#media {
  margin-top: 40px;
  padding: 40px 20px;
  background-color: #faf8f5;

  .title {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .subtitle {
    text-align: center;
    font-size: 16px;
    color: #666;
    margin-bottom: 30px;
  }

  .articles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .article {
    display: block;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .source {
      display: inline-block;
      font-size: 12px;
      color: #888;
      background-color: #f0f0f0;
      padding: 4px 8px;
      border-radius: 4px;
      margin-bottom: 10px;
    }

    .articleTitle {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #333;
    }

    .description {
      font-size: 14px;
      color: #666;
      line-height: 1.5;
      margin: 0;
    }
  }
}

@media only screen and (max-width: 750px) {
  #media {
    .title {
      font-size: 30px;
    }

    .articles {
      grid-template-columns: 1fr;
    }
  }
}
</style>
