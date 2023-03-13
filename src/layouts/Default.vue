<script setup>
import { defineAsyncComponent, ref } from "vue";

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

let fromTop = 0;

const onScroll = (e) => {
  fromTop = e.target.scrollingElement.scrollTop;
};
</script>
<template>
  <v-app>
    <Topbar />
    <Navbar />
    <!-- <div v-scroll="onScroll"> -->
    <router-view />
    <!-- </div> -->
    <GoTop />
    <Social />
    <Footer />
  </v-app>
</template>
