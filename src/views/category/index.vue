<script setup>
import { defineAsyncComponent } from "vue";
// components
const Breadcrumb = defineAsyncComponent(() =>
  import("@/components/layout/Breadcrumb.vue")
);
// data
let path = [
  {
    title: "Home",
    to: "/",
  },
  {},
];
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Breadcrumb :path="path" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3">
        <v-card variant="text">
          <v-card-title>Filters</v-card-title>
          <v-divider></v-divider>
          <v-card-text> test </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="9"> productss </v-col>
    </v-row>
  </v-container>
</template>
<style lang=""></style>
