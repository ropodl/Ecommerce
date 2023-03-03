<script setup>
import { defineAsyncComponent, ref } from "vue";
import { useTheme } from "vuetify";
import {
  mdiHeartOutline,
  mdiHeart,
  mdiMinus,
  mdiPlus,
  mdiShare,
  mdiShareOutline,
} from "@mdi/js";
import VueMagnifier from "@websitebeaver/vue-magnifier";
import "@websitebeaver/vue-magnifier/styles.css";
import { useRoute } from "vue-router";
import { scrollTo } from "@/composable/scrollTo";
const route = useRoute();
// components
const Breadcrumb = defineAsyncComponent(() =>
  import("@/components/layout/Breadcrumb.vue")
);
const Reviews = defineAsyncComponent(() =>
  import("@/components/shared/product/reviews.vue")
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
let quantity = ref(1);
let currentProduct = [
  {
    title: "Image 1",
    src: "https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=10",
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
let currentTab = ref(null);
let review = [{}];
// methods
const isDarkTheme = () => {
  return useTheme().global.current.value.dark;
};
const descIntersect = (isIntersecting, entries, observer) => {
  isIntersecting ? (currentTab.value = "description") : "";
};
const specIntersect = (isIntersecting, entries, observer) => {
  isIntersecting ? (currentTab.value = "specification") : "";
};
const reviewIntersect = (isIntersecting, entries, observer) => {
  isIntersecting ? (currentTab.value = "reviews") : "";
};
const accessoriesIntersect = (isIntersecting, entries, observer) => {
  isIntersecting ? (currentTab.value = "accessories") : "";
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
        <v-rating
          readonly
          v-model:model-value="quantity"
          color="orange"
          size="small"
          :value="2"
          density="compact"
        ></v-rating>
        <div class="text-h5 font-weight-bold">
          60UH6150 60-Inch 4K Ultra HD Smart LED TV
        </div>
        <v-divider class="mt-4"></v-divider>
        <v-row>
          <v-col cols="12" md="6">
            <v-list class="pa-0" bg-color="transparent">
              <v-list-item to="/" :ripple="false" :active="false" class="py-3">
                <template v-slot:prepend>
                  <v-avatar size="60">
                    <v-img
                      src="https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=10"
                    ></v-img>
                  </v-avatar>
                </template>
                <v-list-item-title class="text-h6 font-weight-bold"
                  >Nike</v-list-item-title
                >
                <v-list-item-title>Explore more product</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex align-center h-100">
              <v-spacer></v-spacer>
              <v-btn flat :icon="mdiShareOutline" class="mr-3"></v-btn>
              <v-btn flat :icon="mdiHeartOutline"></v-btn>
            </div>
          </v-col>
        </v-row>
        <v-divider class="mb-4"></v-divider>
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
            <div class="d-inline-flex">
              bad
              <v-text-field
                type="number"
                min="1"
                max="10"
                step="1"
                class="mx-4"
                v-model="quantity"
                :prepend-icon="mdiPlus"
                @click:prepend="quantity++"
                :append-icon="mdiMinus"
                @click:append="quantity--"
                style="width: 300px"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="5">
            <v-hover v-slot="{ isHovering, props }">
              <v-btn
                block
                height="50"
                v-bind="props"
                :variant="isHovering ? 'flat' : 'outlined'"
                class="text-capitalize"
              >
                Add to cart
              </v-btn>
            </v-hover>
          </v-col>
          <v-col cols="12" md="3">
            <v-btn
              icon
              rounded="circle"
              width="52"
              variant="outlined"
              class="text-capitalize"
              :class="wish ? 'text-red' : ''"
              @click="wish = !wish"
            >
              <v-icon :icon="wish ? mdiHeartOutline : mdiHeart"></v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <v-card
    border
    flat
    rounded="0"
    class="border-e-0 border-s-0"
    :color="isDarkTheme() ? 'rgba(31,31,31,0.9)' : 'rgba(255,255,255,0.8)'"
    style="
      position: sticky;
      top: 70px;
      z-index: 999;
      backdrop-filter: blur(10px);
    "
  >
    <v-container class="pa-0">
      <v-row>
        <v-col cols="12">
          <v-tabs v-model="currentTab" height="80">
            <v-tab value="description" @click="scrollTo('description', 160)"
              >Description</v-tab
            >
            <v-tab value="specification" @click="scrollTo('specification', 160)"
              >Specification</v-tab
            >
            <v-tab value="reviews" @click="scrollTo('review', 160)"
              >Reviews(10)</v-tab
            >
            <v-tab value="accessories" @click="scrollTo('accessories', 160)"
              >Accessories</v-tab
            >
            <v-tab>
              <v-avatar
                :color="description ? 'green-lighten-1' : 'red-darken-2'"
                variant="flat"
                class="me-3 swing-transition"
                size="32"
              ></v-avatar>
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div
          id="description"
          class="mb-6"
          v-html="description"
          v-intersect="descIntersect"
        ></div>
      </v-col>
      <v-col cols="12">
        <v-card
          border
          flat
          id="specification"
          v-intersect="specIntersect"
          class="pa-10 my-16"
        >
          <v-card-title>This is the way</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <div v-intersect="reviewIntersect">
    <Reviews />
  </div>
  <div v-intersect="accessoriesIntersect">
    <v-container>
      <v-row>
        <v-col cols="12"> Accessories </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.border-black {
  outline: 1px solid black;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0 !important;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield !important;
}
</style>
<script>
export default {
  methods: {},
  data() {
    return {
      description: `
<h1 style="text-align: center">
  Exceptional color. Authentic images.
</h1>
<p
  style="
    text-align: center;
    max-width: 1160px;
    margin: auto auto 60px;
  "
>
  Nullam dignissim elit ut urna rutrum, a fermentum mi auctor.
  Mauris efficitur magna orci, et dignissim lacus scelerisque sit
  amet. Proin malesuada tincidunt nisl ac commodo. Vivamus eleifend
  porttitor ex sit amet suscipit. Vestibulum at ullamcorper lacus,
  vel facilisis arcu. Aliquam erat volutpat.
</p>
<div style="text-align: center">
  <!---<iframe
    loading="lazy"
    src="https://www.youtube.com/embed/K5OGs8a3vlM?ecver=1"
    allowfullscreen="allowfullscreen"
    width="854"
    height="480"
    frameborder="0"
  ></iframe>--->
</div>
<div class="outer-wrap">
  <div class="content-info">
    <h1 style="text-align: left">
      Dynamic brightness<br />
      reveals hidden details
    </h1>
    <p style="text-align: left">
      Nullam dignissim elit ut urna rutrum, a fermentum mi auctor.
      Mauris efficitur magna orci, et dignissim lacus<br />
      scelerisque sit amet. Proin malesuada tincidunt nisl ac
      commodo. Vivamus eleifend porttitor ex sit amet suscipit.<br />
      Vestibulum at ullamcorper lacus, vel facilisis arcu. Aliquam
      erat volutpat.
    </p>
  </div>
  <div class="image-info">
    <img
      decoding="async"
      src="https://demo2.chethemes.com/techmarket//wp-content/uploads/2017/06/des1.png"
    />
  </div>
</div>
<div class="outer-wrap">
  <div class="image-info">
    <img
      decoding="async"
      class="alignnone"
      src="https://demo2.chethemes.com/techmarket//wp-content/uploads/2017/06/des2.png"
    />
  </div>
  <div class="content-info">
    <h1 style="text-align: right">
      An incredible view,<br />
      wherever you sit
    </h1>
    <p style="text-align: right">
      Nullam dignissim elit ut urna rutrum, a fermentum mi auctor.
      Mauris efficitur magna orci, et dignissim lacus<br />
      scelerisque sit amet. Proin malesuada tincidunt nisl ac
      commodo. Vivamus eleifend porttitor ex sit amet suscipit.
      Vestibulum at ullamcorper lacus, vel facilisis arcu. Aliquam
      erat volutpat.
    </p>
  </div>
</div>`,
    };
  },
};
</script>
