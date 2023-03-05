<script setup>
import { mdiHeartOutline } from "@mdi/js";
import { useTheme } from "vuetify";

const isDarkTheme = () => {
  return useTheme().global.current.value.dark;
};
</script>
<template>
  <v-card border flat to="/product/test">
    <v-responsive :aspect-ratio="1">
      <v-img
        src="https://demo2.chethemes.com/techmarket/wp-content/uploads/2017/02/Watch-224x197.jpg"
      >
        <div class="d-flex">
          <v-spacer></v-spacer>
          <v-btn icon flat color="transparent">
            <v-icon color="red-darken-2" :icon="mdiHeartOutline"></v-icon>
          </v-btn>
        </div>
      </v-img>
    </v-responsive>
    <v-card-text class="font-weight-bold"
      >4K Action Cam with Wi-Fi & GPS</v-card-text
    >
  </v-card>
</template>
<style lang=""></style>
