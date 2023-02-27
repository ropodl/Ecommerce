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
          <!-- <div class="mx-auto w-100 text-center text-h6 mb-3">Find Us at</div> -->
          <ul class="d-flex flex-wrap list-style-none justify-center w-100">
            <li
              :class="i + 1 < socials.length ? 'mr-3' : ''"
              v-for="(social, i) in socials"
            >
              <v-btn
                flat
                color="white"
                variant="text"
                target="_blank"
                :href="social['link']"
              >
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
