<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { mdiMenu, mdiInformationOutline, mdiSilverware, mdiStore, mdiMap } from '@mdi/js'

const show = ref<boolean>(true)
let autoCloseTimer: ReturnType<typeof setTimeout> | undefined

const cancelAutoClose = () => {
  if (autoCloseTimer !== undefined) {
    clearTimeout(autoCloseTimer)
    autoCloseTimer = undefined
  }
}

const toggle = () => {
  cancelAutoClose()
  show.value = !show.value
}

onMounted(() => {
  autoCloseTimer = setTimeout(() => {
    show.value = false
    autoCloseTimer = undefined
  }, 3000)
})

onBeforeUnmount(cancelAutoClose)
</script>
<template>
  <div class="content">
    <v-expand-transition>
      <div v-show="show" class="menu">
        <v-btn
          v-smooth-scroll="{ duration: 1000 }"
          href="#about"
          :icon="mdiInformationOutline"
          size="large"
          aria-label="紹介へ移動"
        />
        <v-btn
          v-smooth-scroll="{ duration: 1000 }"
          href="#menu"
          :icon="mdiSilverware"
          size="large"
          aria-label="お品書きへ移動"
        />
        <v-btn
          v-smooth-scroll="{ duration: 1000 }"
          href="#shop"
          :icon="mdiStore"
          size="large"
          aria-label="お店の紹介へ移動"
        />
        <v-btn
          v-smooth-scroll="{ duration: 1000 }"
          href="#access"
          :icon="mdiMap"
          size="large"
          aria-label="アクセスへ移動"
        />
      </div>
    </v-expand-transition>
    <div class="menuExpander">
      <v-btn
        :icon="mdiMenu"
        size="x-large"
        :aria-label="show ? 'ページ内メニューを閉じる' : 'ページ内メニューを開く'"
        :aria-expanded="show"
        @click="toggle"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.menuExpander {
  margin-top: var(--space-lg);
}
.content {
  position: fixed;
  z-index: var(--z-sticky);
  bottom: var(--space-lg);
  right: var(--space-lg);
  display: flex;
  flex-direction: column;
}
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 250px;
}

:deep(.v-btn) {
  transition: transform var(--dur-micro) var(--ease-out);
}

:deep(.v-btn:active) {
  transform: translateY(1px);
}

:deep(.v-btn:disabled) {
  cursor: not-allowed;
  opacity: 0.55;
}

:deep(.v-btn:focus-visible) {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}
</style>
