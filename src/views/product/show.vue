<script setup>
import { defineAsyncComponent } from "vue";
import VueMagnifier from "@websitebeaver/vue-magnifier";
import "@websitebeaver/vue-magnifier/styles.css";
import { useRoute } from "vue-router";
const route = useRoute();

const Breadcrumb = defineAsyncComponent(() =>
  import("@/components/layout/Breadcrumb.vue")
);
const ImageZoom = defineAsyncComponent(() =>
  import("@/components/shared/product/ImageZoom.vue")
);

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
        <VueMagnifier
          mgCornerBgColor="black"
          mg-shape="square"
          src="https://demo2.chethemes.com/techmarket/wp-content/uploads/2017/02/Oculus-224x197.jpg"
        />
        <!-- <v-img
          class="border"
          src="https://demo2.chethemes.com/techmarket/wp-content/uploads/2017/02/Oculus-224x197.jpg"
        ></v-img> -->
      </v-col>
      <v-col cols="12" md="7">
        <div class="text-h5 font-weight-bold">
          60UH6150 60-Inch 4K Ultra HD Smart LED TV
        </div>
        <v-divider class="my-4"></v-divider>
        <ul class="pl-2">
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
            Inputs: 3 HMDI, 2 USB, 1 RF, 1 Component, 1 Composite, 1 Optical, 1
            RS232C, 1 Ethernet
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>
