<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Pagination, Navigation, Keyboard, Autoplay } from "swiper";
  import "swiper/css";

  const modules = [Pagination, Navigation, Keyboard, Autoplay];

  let slides = [
    {
      src: "https://icms-image.slatic.net/images/ims-web/cf50a1a5-64b5-4af4-a47f-f1e5a9269a38.jpg_1200x1200.jpg",
    },
    {
      src: "https://icms-image.slatic.net/images/ims-web/3ece4bec-cb71-443e-885b-e964a1b4ea20.jpg",
    },
    {
      src: "https://icms-image.slatic.net/images/ims-web/14e0ecca-ac92-4c30-9813-883ddb043fab.jpg",
    },
    {
      src: "https://icms-image.slatic.net/images/ims-web/2ef5502b-ebe3-4cec-9ba2-023b07b6a1b3.jpg",
    },
    {
      src: "https://icms-image.slatic.net/images/ims-web/cf50a1a5-64b5-4af4-a47f-f1e5a9269a38.jpg_1200x1200.jpg",
    },
    {
      src: "https://icms-image.slatic.net/images/ims-web/063dc92e-d1f1-4600-acc3-12b6414721c4.jpg",
    },
    {
      src: "https://icms-image.slatic.net/images/ims-web/632ae0b8-e89e-4900-bfa7-370710e8d468.jpg",
    },
  ];
</script>

<template>
  <v-card border flat class="overflow-hidden">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :pagination="{ clickable: true }"
      :keyboard="{ enabled: true }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide v-for="(slide, i) in slides">
        <v-img eager :src="slide['src']"></v-img>
      </swiper-slide>
    </swiper>
  </v-card>
</template>
