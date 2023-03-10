<script setup>
import { defineAsyncComponent, ref, computed, reactive, onMounted } from "vue";
import { useTheme } from "vuetify";
import axios from "axios";
import {
  mdiHeartOutline,
  mdiMinus,
  mdiPlus,
  mdiShareVariantOutline,
  mdiMagnifyPlusOutline,
  mdiStar,
} from "@mdi/js";
import { useRoute } from "vue-router";
import { scrollTo } from "@/composable/scrollTo";
import VueMagnifier from "@websitebeaver/vue-magnifier";
import "@websitebeaver/vue-magnifier/styles.css";
// composables
const route = useRoute();
// components
const Breadcrumb = defineAsyncComponent(() =>
  import("@/components/layout/Breadcrumb.vue")
);
const Reviews = defineAsyncComponent(() =>
  import("@/components/shared/product/reviews.vue")
);
// data
const path = reactive([
  {
    title: "Home",
    to: "/",
    disabled: false,
  },
  {
    title: "Product",
    disabled: false,
  },
  {
    title: computed(() => {
      return route.params.id;
    }),
    disabled: true,
  },
]);
let activeSlide = ref(0);
let quantity = ref(1);
let currentProduct = ref([]);
let wish = ref(false);
let currentTab = ref(null);
// methods
const isDark = computed(() => {
  return useTheme().global.current.value.dark;
});
const descIntersect = (isIntersecting, entries, observer) => {
  isIntersecting ?? (currentTab.value = "description");
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

onMounted(async () => {
  await axios
    .get("https://dummyjson.com/products/" + route.params.id)
    .then((response) => {
      currentProduct.value = response.data;
    });
});
</script>
<template>
  {{ currentProduct }}
  <v-container>
    <v-row>
      <v-col cols="12">
        <Breadcrumb :path="path" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="5">
        <div class="d-flex" style="position: sticky; top: 80px">
          <v-slide-group
            show-arrows
            mandatory
            direction="vertical"
            v-model="activeSlide"
            selected-class="border"
            class="mr-1"
          >
            <v-slide-group-item
              v-for="(item, i) in currentProduct.images"
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
                  :src="item"
                  @click="toggle"
                ></v-img>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
          <div class="position-relative">
            <template v-if="currentProduct?.images">
              <VueMagnifier
                class="rounded"
                :mgCornerBgColor="isDark ? '#121212' : '#ffffff'"
                mg-shape="square"
                :src="currentProduct.images[activeSlide]"
              />
            </template>
            <v-btn
              icon
              flat
              color="transparent"
              style="position: absolute; top: 0; right: 0"
            >
              <v-icon :icon="mdiMagnifyPlusOutline"></v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="7">
        <div
          class="text-h5 font-weight-bold"
          v-text="currentProduct['title']"
        ></div>
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
                <v-list-item-title
                  class="text-h6 font-weight-bold"
                  v-text="currentProduct['brand']"
                >
                </v-list-item-title>
                <v-list-item-title>Explore more</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex align-center h-100">
              <v-spacer></v-spacer>
              <v-btn height="48" variant="text" color="white" class="mr-3">
                {{ currentProduct["rating"]?.toFixed(1) }}
                <v-icon end color="orange" :icon="mdiStar"></v-icon>
              </v-btn>
              <v-btn icon flat color="transparent" class="mr-3">
                <v-icon :icon="mdiShareVariantOutline"></v-icon>
              </v-btn>
              <v-btn icon flat color="transparent">
                <v-icon :icon="mdiHeartOutline"></v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-divider class="mb-4"></v-divider>
        <div class="mb-3">
          <ul>
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
        <div>
          <span class="text-h4 text-primary">
            Nrs. {{ currentProduct.price }}
          </span>
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
          <v-col cols="12" md="6">
            <v-btn
              flat
              block
              rounded="small"
              size="large"
              height="50"
              color="red-darken-2"
              class="text-capitalize"
            >
              Buy Now
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-hover v-slot="{ isHovering, props }">
              <v-btn
                block
                rounded="small"
                height="50"
                v-bind="props"
                class="text-capitalize"
              >
                Add to cart
              </v-btn>
            </v-hover>
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
    :color="isDark ? 'rgba(31,31,31,0.9)' : 'rgba(255,255,255,0.8)'"
    style="
      position: sticky;
      top: 70px;
      z-index: 10;
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
            <v-tab> intersection observer not working </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <v-container>
    <v-row>
      <v-col cols="12" v-intersect="descIntersect">
        <div id="description" class="mb-6" v-html="description"></div>
      </v-col>
      <v-col cols="12" v-intersect="specIntersect">
        <v-card border flat id="specification" class="pa-16 ma-16">
          <v-card-title v-html="specification"></v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <div id="review" v-intersect="reviewIntersect">
    <Reviews />
  </div>
  <div v-intersect="accessoriesIntersect">
    <v-container>
      <v-row class="py-16">
        <v-col cols="12">
          <div class="text-h5">Bundled Accessories</div>
        </v-col>
        <v-col cols="12" md="4" v-for="i in 8">
          <v-card border flat>
            <v-card-text>
              {{ i }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.border-black {
  outline: 1px solid black;
}
.border-white {
  outline: 1px solid white;
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
      specification: `
<h3 class="tm-attributes-title">General</h3><table class="woocommerce-product-attributes shop_attributes">
			<tbody><tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_lable">
			<th class="woocommerce-product-attributes-item__label">Label</th>
			<td class="woocommerce-product-attributes-item__value"><p><a href="https://demo2.chethemes.com/techmarket/lable/a-2/" rel="tag">A+</a></p>
</td>
		</tr>
			<tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_brand">
			<th class="woocommerce-product-attributes-item__label">Brand</th>
			<td class="woocommerce-product-attributes-item__value"><p><a href="https://demo2.chethemes.com/techmarket/brand/galaxy/" rel="tag">Galaxy</a></p>
</td>
		</tr>
	</tbody></table>
<h3 class="tm-attributes-title">Technical Specs</h3>
<table class="shop_attributes">
<tbody>
<tr>
<th>Screen Size</th>
<td>40″</td>
</tr>
<tr>
<th>Aspect Ratio</th>
<td>16:9</td>
</tr>
<tr>
<th>3DTV</th>
<td>No</td>
</tr>
<tr>
<th>Recommended Resolution</th>
<td>1080p</td>
</tr>
<tr>
<th>Panel</th>
<td>LED</td>
</tr>
<tr>
<th>Tuner</th>
<td>ATSC/Clear QAM Tuners</td>
</tr>
<tr>
<th>Refresh Rate</th>
<td>120Hz</td>
</tr>
<tr>
<th>Refresh Rate</th>
<td>120Hz</td>
</tr>
</tbody>
</table>
<h3 class="tm-attributes-title">Connectivity</h3>
<table class="shop_attributes">
<tbody>
<tr>
<th>HDMI</th>
<td>2 In</td>
</tr>
<tr>
<th>Digital Audio</th>
<td>1 Optical Out</td>
</tr>
<tr>
<th>Other Connectors</th>
<td>1 x RF In</td>
<td>1 x Audio Out (Mini Jack)</td>
<td>1 x RS232C</td>
</tr>
<tr>
<th>LAN</th>
<td>1</td>
</tr>
<tr>
<th>Composite A/V</th>
<td>1 In</td>
</tr>
<tr>
<th>USB</th>
<td>2</td>
</tr>
<tr>
<th>Component Video</th>
<td>1 in</td>
</tr>
</tbody>
</table>

`,
    };
  },
};
</script>
