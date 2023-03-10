<script setup>
import { mdiHeartOutline } from "@mdi/js";
import { useTheme } from "vuetify";

defineProps({ product: Object });

const isDarkTheme = () => {
  return useTheme().global.current.value.dark;
};
</script>
<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card border flat :to="'/product/' + product['id']" v-bind="props">
      <div class="position-relative mb-4">
        <v-img
          contain
          :src="product['image'][0]"
          :class="isHovering ? 'zoom' : ''"
        >
          <div class="d-flex align-center">
            <v-chip color="red"> -13%</v-chip>
            <v-spacer></v-spacer>
            <v-btn icon flat color="transparent" @click.prevent="isDarkTheme">
              <v-icon color="red-darken-2" :icon="mdiHeartOutline"></v-icon>
            </v-btn>
          </div>
        </v-img>
        <v-card-text
          class="py-0 w-100 d-flex"
          style="position: absolute; bottom: -16px"
        >
          <v-chip label variant="flat" color="green" class="font-weight-bold">
            -13%
          </v-chip>
          <v-spacer></v-spacer>
          <v-chip
            label
            rounded
            variant="flat"
            color="primary"
            class="font-weight-bold"
            v-text="'Rs.' + product['price']"
            style="border: 4px solid rgb(var(--v-theme-surface))"
          ></v-chip>
        </v-card-text>
      </div>
      <v-card-text
        class="font-weight-bold"
        v-text="product['title']"
      ></v-card-text>
    </v-card>
  </v-hover>
</template>
<style lang="scss">
// image zoom effect
.v-img {
  transition: all 0.5s;
  .v-img__img {
    transition: all 0.5s;
    transform: scale(1);
  }
  &.zoom {
    .v-img__img {
      transform: scale(1.2);
    }
  }
}
div.v-overlay__scrim.bg-gradiant {
  opacity: 1;
  background: linear-gradient(
    0deg,
    rgba(var(--v-theme-surface), 1) 20%,
    rgba(0, 212, 255, 0) 100%
  ) !important;
}
</style>
