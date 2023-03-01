<script setup>
import { ref } from "vue";
import { scrollToId } from "@/composable/scrollToId.js";

let fab = ref(false);

const onScroll = (e) => {
  if (typeof window === "undefined") return;
  const top = window.pageYOffset || e.target.scrollTop || 0;
  fab.value = top > 300 ? true : false;
};
</script>
<template>
  <v-hover v-slot="{ isHovering, props }">
    <!-- <transition name="slide-x-reverse-transition"> -->
    <v-btn
      icon
      flat
      v-show="fab"
      aria-label="Go to top"
      size="x-large"
      rounded="x-large"
      position="fixed"
      location="bottom right"
      v-bind="props"
      @click="scrollToId('app')"
      v-scroll="onScroll"
      class="ma-10"
      :icon="
        isHovering
          ? 'fa:fa-light fa-arrow-up-to-line'
          : 'fa:fa-light fa-arrow-up'
      "
      style="z-index: 10"
    >
    </v-btn>
    <!-- </transition> -->
  </v-hover>
</template>
