<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const expiresAt = Date.parse('2026-12-02T16:00:00+09:00')
const maxTimeout = 2_147_483_647
const visible = ref(false)
let expiryTimer: number | undefined

function updateVisibility() {
  window.clearTimeout(expiryTimer)
  const remaining = expiresAt - Date.now()
  visible.value = remaining > 0

  if (visible.value) {
    expiryTimer = window.setTimeout(updateVisibility, Math.min(remaining, maxTimeout))
  }
}

onMounted(() => {
  updateVisibility()
  document.addEventListener('visibilitychange', updateVisibility)
})

onBeforeUnmount(() => {
  window.clearTimeout(expiryTimer)
  document.removeEventListener('visibilitychange', updateVisibility)
})
</script>

<template>
  <section v-if="visible" class="announcement" aria-labelledby="announcement-title">
    <div class="announcement__panel">
      <h2 id="announcement-title">臨時休業のお知らせ</h2>
      <dl class="announcement__dates">
        <div class="announcement__closure">
          <dt><time datetime="2026-12-01">12月1日（火）</time></dt>
          <dd><strong>臨時休業</strong></dd>
        </div>
        <div>
          <dt><time datetime="2026-12-02">12月2日（水）</time></dt>
          <dd>定休日</dd>
        </div>
        <div>
          <dt><time datetime="2026-12-03T09:00:00+09:00">12月3日（木）</time></dt>
          <dd>朝9時から通常営業</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped lang="scss">
.announcement {
  padding: var(--space-lg) var(--space-md);
  background: var(--color-paper-2);
  border-block-end: var(--rule-hair) solid var(--color-rule);
}

.announcement__panel {
  display: grid;
  gap: var(--space-sm) var(--space-xl);
  max-width: 50rem;
  margin-inline: auto;
  border-inline-start: 3px solid var(--color-accent);
  padding-inline-start: var(--space-md);
}

.announcement h2 {
  color: var(--color-accent);
  font-size: var(--text-md);
}

.announcement__dates {
  display: grid;
  gap: 0.125rem;
}

.announcement__dates > div {
  display: grid;
  grid-template-columns: 8em minmax(0, 1fr);
  gap: var(--space-xs);
  padding: 0.25rem var(--space-xs);
}

.announcement__closure {
  color: #8a251e;
  background-color: #f8e2dc;
  border-radius: var(--radius-input);
}

.announcement dt {
  font-weight: 700;
}

.announcement dd {
  margin: 0;
}

@media (min-width: 40rem) {
  .announcement {
    padding-inline: var(--space-lg);
  }

  .announcement__panel {
    grid-template-columns: auto 1fr;
    align-items: start;
  }
}
</style>
