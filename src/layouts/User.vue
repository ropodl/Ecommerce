<script setup>
import { defineAsyncComponent, ref } from "vue";
import {
  mdiAccount,
  mdiDownload,
  mdiMapMarker,
  mdiShopping,
  mdiAccountDetails,
} from "@mdi/js";

const Breadcrumb = defineAsyncComponent(() =>
  import("@/components/layout/Breadcrumb.vue")
);

let currentTab = ref(0);

const tabs = [
  {
    title: "Dashboard",
    href: "/account/",
    icon: mdiAccount,
  },
  {
    title: "Orders",
    href: "/account/orders",
    icon: mdiShopping,
  },
  {
    title: "Downloads",
    href: "/account/downloads",
    icon: mdiDownload,
  },
  {
    title: "Address",
    href: "/account/address",
    icon: mdiMapMarker,
  },
  {
    title: "Account Details",
    href: "/account/details",
    icon: mdiAccountDetails,
  },
];

const path = () => [
  {
    title: "Home",
    to: "/",
    disabled: false,
  },
  {
    title: "Account",
    to: "/account",
    disabled: true,
  },
  {
    title: tabs[currentTab.value].title,
    to: tabs[currentTab.value].href,
    disabled: true,
  },
];
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Breadcrumb :path="path()" />
      </v-col>
      <v-col cols="12">
        <v-card flat color="transparent" height="100">
          <v-card-title
            class="w-100 h-100 d-flex justify-center align-center text-h3"
            v-text="tabs[currentTab].title"
          >
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3">
        <v-card flat variant="text" rounded="0">
          <v-tabs v-model="currentTab" direction="vertical">
            <v-tab
              v-for="(tab, i) in tabs"
              :to="tab['href']"
              class="text-capitalize"
            >
              <v-icon start :icon="tab['icon']"></v-icon>{{ tab["title"] }}
            </v-tab>
          </v-tabs>
        </v-card>
      </v-col>
      <v-col cols="12" md="9">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>
