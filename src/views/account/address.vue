<script setup>
import { defineAsyncComponent, ref } from "vue";
import {
  mdiAccount,
  mdiDownload,
  mdiMapMarker,
  mdiShopping,
  mdiViewDashboard,
} from "@mdi/js";

const Breadcrumb = defineAsyncComponent(() =>
  import("@/components/layout/Breadcrumb.vue")
);

let tab = ref(null);

let path = [
  {
    title: "Home",
    to: "/",
    disabled: false,
  },
  {
    title: "Account",
    to: "/account",
    disabled: false,
  },
  ,
  {
    title: "Address",
    to: "/account/address",
    disabled: true,
  },
];

const tabs = [
  {
    title: "Dashboard",
    href: "/account/",
    icon: mdiViewDashboard,
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
    icon: mdiAccount,
  },
];
</script>
<template>
  <v-card border flat editable>
    <v-card-title>Test</v-card-title>
  </v-card>
</template>
