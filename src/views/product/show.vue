<script setup>
import { defineAsyncComponent, ref } from "vue";
import { useTheme } from "vuetify";
import { mdiHeartOutline, mdiHeart } from "@mdi/js";
import VueMagnifier from "@websitebeaver/vue-magnifier";
import "@websitebeaver/vue-magnifier/styles.css";
import { useRoute } from "vue-router";
const route = useRoute();
// components
const Breadcrumb = defineAsyncComponent(() =>
  import("@/components/layout/Breadcrumb.vue")
);
// data
const path = [
  {
    title: "Home",
    to: "/",
    disabled: false,
  },
  {
    title: "Product",
    disabled: true,
  },
  {
    title: route.params.id,
    disabled: true,
  },
];
let activeSlide = ref(0);
let currentProduct = [
  {
    title: "Image 1",
    src: "https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "Image 2",
    src: "https://images.unsplash.com/photo-1588815375466-e7d21013ddd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "Image 3",
    src: "https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "Image 4",
    src: "https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=80",
  },
];

let wish = ref(false);
// methods
const isDarkTheme = () => {
  return useTheme().global.current.value.dark;
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Breadcrumb :path="path" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="5">
        <div class="d-flex">
          <v-slide-group
            show-arrows
            mandatory
            direction="vertical"
            v-model="activeSlide"
            selected-class="border"
            class="mr-1"
          >
            <v-slide-group-item
              v-for="(item, i) in currentProduct"
              :key="i"
              v-slot="{ isSelected, toggle, selectedClass }"
            >
              <v-card
                flat
                border
                :class="[
                  'ma-1',
                  selectedClass,
                  isSelected ? 'border-black' : '',
                ]"
              >
                <v-img
                  cover
                  width="100"
                  height="70"
                  :src="item['src']"
                  @click="toggle"
                ></v-img>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
          <VueMagnifier
            class="rounded"
            :mgCornerBgColor="isDarkTheme() ? '#121212' : '#ffffff'"
            mg-shape="square"
            :src="currentProduct[activeSlide].src"
          />
        </div>
      </v-col>
      <v-col cols="12" md="7">
        <div class="text-h5 font-weight-bold">
          60UH6150 60-Inch 4K Ultra HD Smart LED TV
        </div>
        <v-divider class="my-4"></v-divider>
        <div class="mb-3">
          <ul class="list-style-none">
            <li>Multimedia Speakers</li>
            <li>120 watts peak</li>
            <li>Front-facing subwoofer</li>
            <li>Refresh Rate: 120Hz (Effective)</li>
            <li>Backlight: LED</li>
            Smart Functionality: Yes, webOS 3.0
            <li>
              Dimensions (W x H x D): TV without stand: 43.5″ x 25.4″ x 3.0″, TV
              with stand: 43.5″ x 27.6″ x 8.5″
            </li>
            <li>
              Inputs: 3 HMDI, 2 USB, 1 RF, 1 Component, 1 Composite, 1 Optical,
              1 RS232C, 1 Ethernet
            </li>
          </ul>
        </div>
        <v-row>
          <v-col cols="12" md="6">
            <v-hover v-slot="{ isHovering, props }">
              <v-btn
                block
                v-bind="props"
                size="x-large"
                :variant="isHovering ? 'flat' : 'outlined'"
                class="text-capitalize"
              >
                Add to cart
              </v-btn>
            </v-hover>
          </v-col>
          <v-col cols="12" md="3">
            <v-hover v-slot="{ isHovering, props }">
              <v-btn
                fab
                rounded="circle"
                v-bind="props"
                height="52"
                variant="outlined"
                class="text-capitalize"
                :class="wish ? 'text-red' : ''"
                @click="wish = !wish"
              >
                <v-icon :icon="wish ? mdiHeartOutline : mdiHeart"></v-icon>
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.border-black {
  outline: 1px solid black;
}
</style>
