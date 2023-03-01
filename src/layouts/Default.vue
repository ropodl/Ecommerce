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
const GoTop = defineAsyncComponent(() =>
  import("@/components/layout/GoToTop.vue")
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
    <GoTop />
    <Social />
    <Footer />
  </v-app>
</template>
