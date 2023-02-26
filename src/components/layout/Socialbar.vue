<script setup>
import { useTheme } from "vuetify";
const isDarkTheme = () => {
  return useTheme().global.current.value.dark;
};

let socials = [
  {
    title: "Facebook",
    link: "https://facebook.com/",
    icon: "fa:fa-brands fa-facebook-f",
  },
  {
    title: "Twitter",
    link: "https://facebook.com/",
    icon: "fa:fa-brands fa-twitter",
  },
  {
    title: "Google",
    link: "https://facebook.com/",
    icon: "fa:fa-brands fa-google",
  },
];
</script>
<template>
  <v-card flat :theme="isDarkTheme ? 'dark' : 'light'" rounded="0">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <ul class="d-flex list-style-none justify-center">
            <li
              :class="i + 1 < socials.length ? 'mr-3' : ''"
              v-for="(social, i) in socials"
            >
              <v-btn flat variant="text" target="_blank" :href="social['link']">
                <v-icon start :icon="social['icon']"></v-icon>
                <span class="text-capitalize" v-text="social['title']"></span>
              </v-btn>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
