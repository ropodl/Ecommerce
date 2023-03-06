<script setup>
import { ref, defineAsyncComponent } from "vue";
import { VVirtualScroll } from "vuetify/labs/VVirtualScroll";
import { useProduct } from "@/stores/product";
// components
const ProductCard = defineAsyncComponent(() =>
  import("@/components/shared/product/ProductCard.vue")
);
let tab = ref(null);

const product = useProduct();
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <div class="text-h5">Hot New Arrivals</div>
      </v-col>
      <v-col cols="12" md="8">
        <v-tabs
          v-model="tab"
          mandatory
          align-tabs="end"
          color="light"
          slider-color="primary"
        >
          <v-tab
            v-for="i in 3"
            :key="i"
            :value="i"
            theme="light"
            class="text-capitalize"
          >
            Item {{ i }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12">
        <v-window v-model="tab">
          <v-window-item v-for="i in 3" :key="i" :value="i">
            <v-container class="px-0">
              <v-row>
                <v-col
                  cols="12"
                  md="3"
                  v-for="(item, i) in product['allProducts']"
                >
                  <ProductCard :product="item" />
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>
