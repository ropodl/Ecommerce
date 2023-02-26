<script setup>
import { defineAsyncComponent } from "vue";

const Topbar = defineAsyncComponent(() =>
  import("@/components/layout/Topbar.vue")
);
const Navbar = defineAsyncComponent(() =>
  import("@/components/layout/Navbar.vue")
);
const Social = defineAsyncComponent(() =>
  import("@/components/layout/Socialbar.vue")
);
const Footer = defineAsyncComponent(() =>
  import("@/components/layout/Bottombar.vue")
);
</script>
<template>
  <v-app>
    <Topbar />
    <Navbar />
    <router-view />
    <Social />
    <Footer />
  </v-app>
</template>
