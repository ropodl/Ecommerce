<script setup>
  import { defineAsyncComponent } from "vue";
  const Carousel = defineAsyncComponent(() => import("../components/shared/home/Carousel.vue"));
  const Hotnew = defineAsyncComponent(() => import("../components/shared/home/HotNew.vue"));
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <Carousel />
      </v-col>
    </v-row>
  </v-container>
  <Hotnew />
</template>
