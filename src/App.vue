<script setup>
import { ref } from "vue";

const snackbar = ref(true);
</script>
<template>
  <router-view />

  <v-snackbar :model-value="true" timeout="-1" theme="light">
    The website is in active development, so things will change.
    <template v-slot:actions>
      <v-btn class="text-capitalize" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
