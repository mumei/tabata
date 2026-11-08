<template>
  <section id="about" class="about" aria-labelledby="about-title">
    <div class="about__panel">
      <div class="about__shop">
        <img
          class="about__character"
          src="@/assets/about-character.png?w=440&format=webp&quality=90"
          width="220"
          height="280"
          alt=""
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      <div class="about__story">
        <h2 id="about-title" class="about__title">
          <span>手作り</span>
          <span>田畑の焼きまんじゅう</span>
        </h2>
        <p class="about__copy">
          <span>江戸時代、群馬で生まれた焼きまんじゅう。</span
          ><span>その美味しさから受け継がれて</span><span>きた味と伝統。</span
          ><span>麹・米・小麦で作ったまんじゅう</span><span>に秘伝のたれをつけて焼き上げた</span
          ><span>素朴な味わい。</span><span>そんな昔懐かしい味を再現した</span
          ><span>田畑の焼きまんじゅう。是非、ご賞味ください。</span>
        </p>
      </div>

      <img
        class="about__skewer"
        src="@/assets/about-skewer.png?w=280&format=webp&quality=90"
        width="140"
        height="330"
        alt=""
        loading="lazy"
        aria-hidden="true"
      />
    </div>

    <p class="about__license">酒母製造免許：前酒1 第94号</p>
  </section>
</template>

<style scoped lang="scss">
/* Hallmark · component: brand story section · genre: editorial · theme: existing warm paper
 * pre-emit critique: P5 H4 E5 S5 R5 V4 · contrast: pass
 */
.about {
  display: grid;
  gap: var(--space-sm);
  padding: var(--space-xl) var(--space-md) var(--space-lg);
  color: var(--color-ink);
  background: var(--color-paper);
}

.about__panel {
  display: grid;
  grid-template-areas:
    'story'
    'shop';
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-sm);
  width: min(100%, 50rem);
  margin-inline: auto;
}

.about__shop {
  grid-area: shop;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: end;
  gap: var(--space-md);
  margin: 0;
}

.about__character {
  display: block;
  width: 100%;
  max-width: 7rem;
  height: auto;
  margin-inline-start: auto;
  margin-inline-end: 0;
  object-fit: contain;
}

.about__story {
  grid-area: story;
  display: grid;
  gap: var(--space-lg);
  min-width: 0;
}

.about__title {
  display: grid;
  gap: var(--space-xs);
  margin: 0;
  color: var(--color-accent);
  font-size: clamp(var(--text-lg), 7vw, var(--text-xl));
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: 0.04em;
}

.about__title span {
  display: block;
}

.about__copy {
  max-width: 38rem;
  margin: 0;
  font-family: var(--font-display);
  font-size: var(--text-base);
  font-weight: 700;
  line-height: 1.9;
  letter-spacing: 0.02em;
}

.about__copy span {
  display: inline;
}

.about__skewer {
  grid-area: skewer;
  display: none;
  width: 100%;
  height: auto;
  align-self: center;
  object-fit: contain;
}

.about__license {
  width: min(100%, 50rem);
  margin-inline: auto;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: 700;
}

@media (min-width: 40rem) {
  .about {
    padding: var(--space-xl) var(--space-lg) var(--space-lg);
  }

  .about__panel {
    grid-template-areas: 'shop copy title skewer';
    grid-template-columns: 9rem minmax(0, 1fr) auto 5rem;
    align-content: start;
    align-items: start;
    gap: var(--space-md);
    min-height: 0;
  }

  .about__shop {
    grid-template-columns: minmax(0, 1fr);
    align-self: end;
    gap: var(--space-xs);
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .about__character {
    max-width: 9rem;
    margin-inline: auto;
  }

  .about__story {
    display: contents;
  }

  .about__title {
    grid-area: title;
    display: flex;
    flex-direction: row-reverse;
    gap: var(--space-xs);
    font-size: var(--text-xl);
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: 0.04em;
  }

  .about__title span,
  .about__copy span {
    writing-mode: vertical-rl;
    text-orientation: upright;
  }

  .about__copy {
    grid-area: copy;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    gap: var(--space-xs);
    max-width: none;
    font-family: var(--font-display);
    font-size: clamp(var(--text-base), 2.4vw, var(--text-md));
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: 0.02em;
  }

  .about__skewer {
    display: block;
  }
}

@media (min-width: 48rem) {
  .about__panel {
    grid-template-areas: 'shop story skewer';
    grid-template-columns: 11.5rem minmax(0, 1fr) 6.5rem;
    align-content: normal;
    align-items: center;
    min-height: 30rem;
  }

  .about__character {
    max-width: 11rem;
  }

  .about__shop {
    align-self: end;
    margin-block-start: 0;
    margin-block-end: var(--space-lg);
  }

  .about__story {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-self: auto;
    align-items: flex-start;
    gap: var(--space-lg);
    min-height: 28rem;
  }

  .about__title {
    grid-area: auto;
    font-size: clamp(var(--text-xl), 4vw, var(--text-2xl));
  }

  .about__copy {
    grid-area: auto;
    font-size: var(--text-md);
    line-height: 1.3;
  }
}

@media (min-width: 60rem) {
  .about__panel {
    gap: var(--space-xl);
  }
}
</style>
