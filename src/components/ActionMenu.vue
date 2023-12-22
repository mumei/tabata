<script setup lang="ts">
import {onMounted, ref} from "vue";
import { mdiMenu, mdiInformationOutline, mdiSilverware, mdiStore, mdiMap } from '@mdi/js';

const show = ref<boolean>(true);
const showTooltip = ref(false);

const toggle = ()=>{
  if(show.value){
    showTooltip.value = false;
  }
  show.value = !show.value;
  setTimeout(()=>{
    showTooltip.value = show.value;
  },500)
}

onMounted(()=>{
  setTimeout(()=>{
    showTooltip.value = show.value;
  },500)
})

</script>
<template>
  <div class="content">
    <v-expand-transition>
      <div class="menu" v-show="show">
        <v-tooltip
            :model-value="showTooltip"
            @update:model-value="()=>{}"
            text="紹介"
            location="start">
          <template v-slot:activator="{ props }">
            <v-btn
                href="#about"
                v-smooth-scroll="{duration: 1000}"
                v-bind="props"
                :icon="mdiInformationOutline"
                size="large" />
          </template>
        </v-tooltip>
        <v-tooltip
            :model-value="showTooltip"
            @update:model-value="()=>{}"
            text="お品書き"
            location="start">
          <template v-slot:activator="{ props }">
            <v-btn
                href="#menu"
                v-smooth-scroll="{duration: 1000}"
                v-bind="props"
                :icon="mdiSilverware"
                size="large" />
          </template>
        </v-tooltip>
        <v-tooltip
            :model-value="showTooltip"
            @update:model-value="()=>{}"
            text="お店の紹介"
            location="start">
          <template v-slot:activator="{ props }">
            <v-btn
                href="#shop"
                v-smooth-scroll="{duration: 1000}"
                v-bind="props"
                :icon="mdiStore"
                size="large" />
          </template>
        </v-tooltip>
        <v-tooltip
            :model-value="showTooltip"
            @update:model-value="()=>{}"
            text="アクセス"
            location="start">
          <template v-slot:activator="{ props }">
            <v-btn
                href="#access"
                v-smooth-scroll="{duration: 1000}"
                v-bind="props"
                :icon="mdiMap"
                size="large" />
          </template>
        </v-tooltip>
      </div>
    </v-expand-transition>
    <div class="menuExpander">
      <v-btn :icon="mdiMenu" size="x-large" :onclick="toggle" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.menuExpander{
  margin-top: 20px;
}
.content{
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
}
.menu{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 250px;

}
</style>
