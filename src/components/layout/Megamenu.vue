<script setup>
import { ref } from "vue";
import { mdiMenu, mdiChevronDown, mdiChevronRight } from "@mdi/js";
import { useTheme } from "vuetify";

const isDarkTheme = () => {
  return useTheme().global.current.value.dark;
};

let current = ref(0);

let menuItems = [
  {
    title: "Value of the day",
    href: "/value-day",
  },
  {
    title: "Top offers",
    href: "/top-offers",
  },
  {
    title: "New Arrivals",
    href: "/new-arrivals",
  },
  {
    title: "Computer & Laptops",
    background:
      "https://demo2.chethemes.com/techmarket/wp-content/uploads/2017/06/1.jpg",
    items: [
      {
        title: "Computers & Accessories",
        subitems: [
          {
            title: "All Computers & Accessories",
          },
          { title: "Laptops, Desktops & Monitors" },
          { title: " Pen Drives, Hard Drives & Memory Cards" },
          { title: "Printers & Ink" },
          { title: "Networking & Internet Devices" },
          { title: "Computer Accessories" },
          { title: " Software" },
        ],
      },
      {
        title: "Office & Stationery",
        subitems: [
          { title: "All Office & Stationery" },
          { title: "Pens & Writing" },
        ],
      },
      {
        extra: {
          title: " All Electronics",
          subtitle: "Discover more products",
        },
      },
    ],
  },
  {
    title: "Camera and Photo",
    items: [
      {
        title: "Cameras & Photography",
        subitems: [
          {
            title: "All Cameras & Photography",
          },
          {
            title: "Digital SLRs",
          },
          {
            title: "Point & Shoot Cameras",
          },
          {
            title: "Lenses",
          },
          {
            title: "Camera Accessories",
          },
          {
            title: "Security & Surveillance",
          },
          {
            title: "Binoculars & Telescopes",
          },
          {
            title: "Camcorders",
          },
        ],
      },
      {
        // All ElectronicsDiscover more products

        title: "Audio & Video",
        subitems: [
          {
            title: "All Audio & Video",
          },
          {
            title: "Headphones & Speakers",
          },
          {
            title: "Home Entertainment Systems",
          },
          {
            title: "MP3 & Media Players",
          },
        ],
      },
    ],
  },
];
// methods
</script>
<template>
  <v-menu
    attach
    absolute
    bottom
    width="100%"
    max-width="1168"
    :close-on-content-click="false"
    class="position-relative"
    location-strategy="static"
    location="bottom start"
    origin="bottom"
    transition="slide-y-reverse-transition"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        block
        flat
        rounded="lg"
        variant="flat"
        color="primary"
        height="50"
        class="text-capitalize rounded-b-0"
        v-bind="props"
      >
        <v-icon start :icon="mdiMenu"></v-icon>
        <span class="px-8">All Categories</span>
        <v-icon end :icon="mdiChevronDown"></v-icon>
      </v-btn>
    </template>
    <v-container class="pa-0">
      <div class="arrow"></div>
      <v-card
        flat
        border
        :theme="isDarkTheme() ? 'dark' : 'light'"
        rounded="0"
        :width="menuItems[current].href ? 'auto' : '1168'"
      >
        <v-container class="pa-0">
          <v-row no-gutters>
            <ul class="list-style-none border border-b-0 border-t-0 border-s-0">
              <li v-for="(item, i) in menuItems" :key="i">
                <v-hover v-slot="{ isHovering, props }">
                  <v-btn
                    flat
                    block
                    width="273"
                    rounded="0"
                    height="40"
                    v-bind="props"
                    :variant="isHovering ? 'tonal' : 'text'"
                    :color="isDarkTheme() ? 'grey-lighten-3' : 'grey-darken-3'"
                    @mouseenter="current = i"
                    class="text-body-2 text-capitalize d-inline-block pr-0"
                    :class="
                      !item['href'] ? 'font-weight-regular' : 'font-weight-bold'
                    "
                  >
                    {{ item["title"] }}
                    <v-spacer></v-spacer>
                    <v-icon
                      v-if="!item['href']"
                      class="mr-2"
                      size="small"
                      :icon="mdiChevronRight"
                    ></v-icon>
                  </v-btn>
                </v-hover>
                <v-divider v-if="i + 1 <= menuItems.length - 1"></v-divider>
              </li>
            </ul>
            <v-col
              class="position-relative category-background"
              v-show="menuItems[current].href ? false : true"
              :style="
                isDarkTheme()
                  ? ''
                  : 'background-image:url(' +
                    menuItems[current].background +
                    ');'
              "
            >
              <v-container style="z-index: 2">
                <v-row>
                  <v-col
                    cols="12"
                    md="4"
                    v-for="(item, i) in menuItems[current].items"
                  >
                    <div v-if="item['subitems']">
                      <div class="text-body-1 font-weight-bold mb-3">
                        {{ item["title"] }}
                      </div>
                      <ul class="list-style-none pl-2">
                        <li
                          class="text-body-2 mb-2"
                          v-for="sub in item['subitems']"
                          v-text="sub['title']"
                        ></li>
                      </ul>
                    </div>
                    <a
                      v-if="item['extra']"
                      href="/"
                      class="text-decoration-none"
                      style="color: unset"
                    >
                      <div class="text-body-1 font-weight-bold mb-1">
                        {{ item["extra"].title }}
                      </div>
                      <div class="text-caption">
                        {{ item["extra"].subtitle }}
                      </div>
                    </a>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </v-menu>
</template>
<style lang="scss" scoped>
.category-background {
  background-size: contain;
  background-position: bottom right;
  background-size: auto;
}
</style>
