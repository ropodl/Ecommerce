<script setup>
import { defineAsyncComponent, ref, reactive } from "vue";
import { mdiListBoxOutline } from "@mdi/js";
// components
const Breadcrumb = defineAsyncComponent(() =>
  import("@/components/layout/Breadcrumb.vue")
);
// data
let path = [
  {
    title: "Home",
    to: "/",
    disabled: false,
  },
  {
    title: "Computers & Laptops",
    to: "/test",
    disabled: true,
  },
  {
    title: "Ultrabooks",
    to: "/test",
    disabled: true,
  },
];

let test = ref(0);
let range = ref([0, 200]);
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Breadcrumb :path="path" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3">
        <v-card variant="text">
          <v-card-title class="text-h5 font-weight-bold">Filters</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="mb-3">Filter by Price</div>
            <v-range-slider
              strict
              v-model="range"
              :min="0"
              :max="200"
              :step="1"
              density="compact"
              color="primary"
              thumb-label
            ></v-range-slider>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="range[0]"
                  label="Min"
                  type="number"
                  min="0"
                  max="200"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="range[1]"
                  label="Max"
                  type="number"
                  min="0"
                  max="200"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <div class="mb-3">Brands</div>
            <v-checkbox
              v-for="i in 9"
              density="compact"
              label="Themeforest"
              hide-details
            ></v-checkbox>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <div class="mb-3">Colors</div>
            <v-checkbox
              v-for="i in 9"
              density="compact"
              label="Themeforest"
              hide-details
            ></v-checkbox>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="9">
        <v-row align="center">
          <v-col cols="12" md="4">
            <div class="text-h6 h-100">Ultrabooks</div>
          </v-col>
          <v-col cols="12" md="8">
            <div class="d-flex">
              <v-spacer></v-spacer>
              <v-btn-toggle
                mandatory
                divided
                color="primary"
                v-model="test"
                density="compact"
                class="mr-3"
                style="height: 48px"
              >
                <v-btn rounded="0">
                  <v-icon size="large" :icon="mdiListBoxOutline"></v-icon>
                </v-btn>
                <v-btn rounded="0">
                  <v-icon size="large" :icon="mdiListBoxOutline"></v-icon>
                </v-btn>
                <v-btn rounded="0">
                  <v-icon size="large" :icon="mdiListBoxOutline"></v-icon>
                </v-btn>
                <v-btn rounded="0">
                  <v-icon size="large" :icon="mdiListBoxOutline"></v-icon>
                </v-btn>
              </v-btn-toggle>
              <v-select
                hide-details
                mandatory
                variant="outlined"
                placeholder="Sort By"
                density="comfortable"
                append-icon=""
                :items="[
                  'Sort by Popularity',
                  'Sort by Average rating',
                  'Sort by Latest',
                  'Sort by Low to High',
                  'Sort by High to Low',
                ]"
                style="width: 200px"
              ></v-select>
            </div>
          </v-col>
        </v-row>
        <v-divider class="my-6"></v-divider>
        <v-row>
          <v-col cols="12" md="3" v-for="i in 20">
            <v-card border flat>
              <div style="height: 200px"></div>
            </v-card>
          </v-col>
        </v-row>
        <v-divider class="mt-6 mb-3"></v-divider>
        <v-row align="center">
          <v-col cols="12" md="4"> Showing 20 out of 1000 items </v-col>
          <v-col cols="12" md="8">
            <div class="d-flex">
              <v-spacer></v-spacer>
              <v-pagination
                density="compact"
                :length="15"
                total-visible="4"
              ></v-pagination>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
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
