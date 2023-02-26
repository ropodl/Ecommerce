<script setup>
  import { defineAsyncComponent } from "vue";
  import Carousel from "../components/shared/home/Carousel.vue";
  const Hotnew = defineAsyncComponent(() => import("../components/shared/home/HotNew.vue"));
</script>
<template>
  <v-container class="pt-0">
    <v-row>
      <v-col cols="12" md="12">
        <Carousel />
      </v-col>
    </v-row>
  </v-container>
  <Hotnew />
</template>
