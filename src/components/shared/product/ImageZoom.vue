<script setup>
import { ref } from "vue";

let overlay = ref(false);
</script>
<template>
  <v-overlay v-model="overlay" :persistent="true"> </v-overlay>
</template>
<style lang=""></style>
