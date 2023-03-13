<script setup>
import { computed } from "vue";
import { mdiHeartOutline } from "@mdi/js";
import { useTheme } from "vuetify";

defineProps({ product: Object });

const calculateOriginalPrice = (price, percentage) => {
  return Math.floor(price + (percentage / 100) * price);
};

const test = () => {
  alert("test");
};

const isDark = computed(() => {
  return useTheme().global.current.value.dark;
});
</script>
<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      border
      flat
      color="transparent"
      class="h-100"
      :to="'/product/' + product['id']"
      :active="false"
      v-bind="props"
    >
      <v-img
        cover
        height="200"
        :src="product['images'][0]"
        :class="isHovering ? 'zoom' : ''"
      >
        <div class="d-flex align-center">
          <v-spacer></v-spacer>
          <v-btn
            icon
            flat
            size="small"
            class="rounded-te-0"
            :color="isDark ? 'white' : 'black'"
            @click.prevent="test"
          >
            <v-icon :icon="mdiHeartOutline"></v-icon>
          </v-btn>
        </div>
      </v-img>
      <v-divider></v-divider>
      <v-card-text
        class="font-weight-bold pb-0"
        v-text="product['title']"
      ></v-card-text>
      <v-card-subtitle class="font-weight-bold pb-3" style="opacity: 1">
        <span class="text-primary mr-2">Nrs. {{ product["price"] }}</span>
        <span class="text-decoration-line-through">
          Nrs.{{
            calculateOriginalPrice(
              product["price"],
              13
            )
          }}
        </span>
      </v-card-subtitle>
    </v-card>
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
