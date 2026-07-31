<script setup lang="ts"></script>
<template>
  <div class="root">
    <h1>ページが見つかりません</h1>
    <p>指定されたページは存在しないか、移動した可能性があります。</p>
    <router-link to="/">トップページへ戻る</router-link>
  </div>
</template>

<style scoped lang="scss">
.root {
  padding: 40px 20px;
  text-align: center;
}
</style>
