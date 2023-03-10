<script setup>
import { computed } from "vue";
import { mdiHeartOutline } from "@mdi/js";
import { useTheme } from "vuetify";

defineProps({ product: Object });

const test = () => {
  alert("test");
};

const isDark = computed(() => {
  return useTheme().global.current.value.dark;
});
</script>
<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-responsive :aspect-ratio="16 / 9">
      <v-card
        border
        flat
        color="transparent"
        class="h-100"
        :to="'/product/' + product['id']"
        :active="false"
        v-bind="props"
      >
        <div class="position-relative">
          <v-img
            cover
            :src="product['images'][0]"
            :class="['rounded overflow-hidden', isHovering ? 'zoom' : '']"
          >
            <div class="d-flex align-center">
              <v-spacer></v-spacer>
              <v-btn icon flat color="transparent" @click.prevent="test">
                <v-icon color="red-darken-2" :icon="mdiHeartOutline"></v-icon>
              </v-btn>
            </div>
          </v-img>
          <v-card-text
            class="py-0 w-100 d-flex px-0"
            style="position: absolute; bottom: 0"
          >
            <v-spacer></v-spacer>
            <v-chip
              label
              rounded="0"
              variant="flat"
              color="primary"
              class="font-weight-bold"
              v-text="'Rs.' + product['price']"
              style="
                border: 4px solid rgb(var(--v-theme-background));
                border-bottom: 0;
                border-right: 0;
              "
            ></v-chip>
          </v-card-text>
        </div>
        <v-card-text
          class="font-weight-bold pb-0"
          v-text="product['title']"
        ></v-card-text>
        <v-card-subtitle class="font-weight-bold pb-3">
          <span class="text-primary mr-2">Nrs. 725</span>
          <span class="text-decoration-line-through">test</span>
        </v-card-subtitle>
      </v-card>
    </v-responsive>
  </v-hover>
</template>
<style lang="scss">
// image zoom effect
.v-img {
  transition: all 0.2s;
  .v-img__img {
    transition: all 0.2s;
    transform: scale(1);
  }
  &.zoom {
    .v-img__img {
      transform: scale(1.1);
    }
  }
}
</style>
