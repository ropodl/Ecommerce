<script setup>
defineProps({
  path: Object,
});
</script>
<template>
  <v-breadcrumbs
    class="pa-0 text-capitalize"
    density="compact"
    :items="path"
    divider="."
  ></v-breadcrumbs>
</template>
