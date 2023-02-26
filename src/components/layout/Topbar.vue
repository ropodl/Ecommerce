<script setup>
import { ref, reactive } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};
</script>
<template>
  <v-system-bar>
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="4">
          Start shopping at VPal
          <router-link to="/">Log In</router-link> or
          <router-link to="/">Sign Up</router-link>
        </v-col>
        <v-col cols="12" md="4">
          <div class="d-flex justify-center">
            <v-btn flat rounded="0" height="28" @click="toggleTheme">
              Switch to
              {{ theme.global.current.value.dark ? "dark" : "light" }}
              theme
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="d-flex justify-end">
            Wanna sell your products?
            <router-link to="/">Become a seller</router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-system-bar>
</template>
<style scoped>
.v-system-bar {
  max-height: 28px !important;
  text-align: unset;
  position: unset !important;
}
</style>
