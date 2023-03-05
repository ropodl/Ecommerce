<script setup>
import { mdiHeartOutline } from "@mdi/js";
import { useTheme } from "vuetify";

const isDarkTheme = () => {
  return useTheme().global.current.value.dark;
};
</script>
<template>
  <v-card border flat to="/product/test">
    <v-img
      src="https://demo2.chethemes.com/techmarket/wp-content/uploads/2017/02/Watch-224x197.jpg"
    >
      <v-btn icon flat color="transparent">
        <v-icon color="red-darken-2" :icon="mdiHeartOutline"></v-icon>
      </v-btn>
    </v-img>
    <v-card-title>test</v-card-title>
  </v-card>
</template>
<style lang=""></style>
