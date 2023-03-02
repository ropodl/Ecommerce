<script setup>
defineProps({
  path: Object,
});
</script>
<template>
  <v-breadcrumbs
    class="pa-0"
    density="compact"
    :items="path"
    divider="."
  ></v-breadcrumbs>
</template>
