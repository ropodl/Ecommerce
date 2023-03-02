<script setup></script>
<template>
  <v-alert
    type="info"
    color="primary"
    class="pa-3"
    text="No downloads available yet."
  >
    <template v-slot:append>
      <v-btn size="small" class="text-capitalize" variant="tonal" color="white">
        Browse products
      </v-btn>
    </template>
  </v-alert>
</template>
