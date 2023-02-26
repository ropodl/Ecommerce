<script setup>
import { useTheme } from "vuetify";
const isDarkTheme = () => {
  return useTheme().global.current.value.dark;
};
</script>
<template>
  <v-footer class="pa-0 d-block">
    <v-card
      border
      flat
      :theme="isDarkTheme ? 'dark' : 'light'"
      rounded="0"
      class="w-100"
    >
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-btn
              block
              rounded="0"
              variant="text"
              color="transparent"
              to="/"
              height="60"
              max-width="200"
            >
              <v-img height="50" width="200" src="@/assets/logo.svg"></v-img>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card
      flat
      :theme="isDarkTheme ? 'dark' : 'light'"
      rounded="0"
      class="w-100"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <div class="d-flex justify-center text-overline text-capitalize">
              Copyright © {{ new Date().getFullYear() }} Techmarket Theme. All
              rights reserved.
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-footer>
</template>
