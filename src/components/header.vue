<template>
  <div class="headerArea">
    <div class="imageArea">
      <picture>
        <source type="image/webp" srcset="@/assets/topImage.png?preset=img&format=webp&srcset" />
        <img
          src="@/assets/topImage.png?preset=img&src"
          srcset="@/assets/topImage.png?preset=img&srcset"
          alt="田畑の焼きまんじゅう"
        />
      </picture>
    </div>
    <h1 class="title">
      <span>手作り田畑の</span>
      <span>焼きまんじゅう</span>
    </h1>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.headerArea {
  position: relative;
  background-color: var(--color-ink);
}

.title {
  z-index: var(--z-raised);
  margin: 0;
  font-weight: 700;
  color: var(--color-paper);
  text-align: left;
  position: absolute;
  top: 100px;
  left: var(--space-lg);
  line-height: 1.12;
  text-shadow: 0 2px 12px var(--color-shadow);

  span:nth-child(1) {
    display: block;
    font-size: var(--text-xl);
  }
  span:nth-child(2) {
    display: block;
    font-size: var(--text-display);
  }
}

.imageArea {
  position: relative;
  left: 0;
  right: 0;
  overflow: hidden;

  &::after {
    position: absolute;
    inset: 0;
    content: '';
    background-color: var(--color-overlay);
    pointer-events: none;
  }

  img {
    display: block;
    width: 100%;
    filter: blur(1px) saturate(0.92);
    transform: scale(1.01);
    object-fit: cover;
    object-position: 50% 50%;
    height: 300px;
  }
}
@media only screen and (max-width: 600px) {
  .title {
    top: 56px;
    left: var(--space-md);
    span:nth-child(1) {
      font-size: var(--text-md);
    }
    span:nth-child(2) {
      font-size: var(--text-2xl);
    }
  }
  .imageArea {
    img {
      height: 200px;
    }
  }
}
</style>
