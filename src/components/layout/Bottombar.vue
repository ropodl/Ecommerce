<script setup>
import { defineAsyncComponent } from "vue";
import { useTheme } from "vuetify";

const Logo = defineAsyncComponent(() => import("@/components/layout/Logo.vue"));
const isDarkTheme = () => {
  return useTheme().global.current.value.dark;
};
</script>
<template>
  <v-footer class="pa-0 d-block">
    <v-card border flat theme="dark" rounded="0" class="w-100">
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
              <Logo style="width: 200px; height: 50px" />
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
