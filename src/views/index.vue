<script setup>
import { defineAsyncComponent, ref, onMounted } from "vue";
import { useProduct } from "@/stores/product";
const product = useProduct();

const Carousel = defineAsyncComponent(() =>
  import("../components/shared/home/Carousel.vue")
);
const Features = defineAsyncComponent(() =>
  import("../components/shared/home/Features.vue")
);
const Hotnew = defineAsyncComponent(() =>
  import("../components/shared/home/HotNew.vue")
);
const Download = defineAsyncComponent(() =>
  import("../components/shared/home/DownloadApp.vue")
);
const TopCatWeek = defineAsyncComponent(() =>
  import("../components/shared/home/TopCatWeek.vue")
);

onMounted(() => {
  product.pullProduct();
});
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12" class="mb-6">
        <Carousel />
      </v-col>
    </v-row>
    <Features />
  </v-container>
  <Hotnew />
  <Download />
  <TopCatWeek />
</template>
