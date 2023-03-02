<script setup>
import { useTheme } from "vuetify";
import { mdiShoppingOutline, mdiClose } from "@mdi/js";

const isDarkTheme = () => {
  return useTheme().global.current.value.dark;
};

let cart = [
  {
    id: "100",
    name: "This is a test is a test is a test is a test a test a tes a test at es",
    price: "200",
    src: "https://icms-image.slatic.net/images/ims-web/cf50a1a5-64b5-4af4-a47f-f1e5a9269a38.jpg_1200x1200.jpg",
  },
  {
    id: "101",
    name: "This is a test is a test is a test is a test a test a tes a test at es",
    price: "200",
    src: "https://icms-image.slatic.net/images/ims-web/cf50a1a5-64b5-4af4-a47f-f1e5a9269a38.jpg_1200x1200.jpg",
  },
  {
    id: "102",
    name: "This is a test is a test is a test is a test a test a tes a test at es",
    price: "200",
    src: "https://icms-image.slatic.net/images/ims-web/cf50a1a5-64b5-4af4-a47f-f1e5a9269a38.jpg_1200x1200.jpg",
  },
  {
    id: "103",
    name: "This is a test is a test is a test is a test a test a tes a test at es",
    price: "200",
    src: "https://icms-image.slatic.net/images/ims-web/cf50a1a5-64b5-4af4-a47f-f1e5a9269a38.jpg_1200x1200.jpg",
  },
  {
    id: "104",
    name: "This is a test is a test is a test is a test a test a tes a test at es",
    price: "200",
    src: "https://icms-image.slatic.net/images/ims-web/cf50a1a5-64b5-4af4-a47f-f1e5a9269a38.jpg_1200x1200.jpg",
  },
  {
    id: "105",
    name: "This is a test is a test is a test is a test a test a tes a test at es",
    price: "200",
    src: "https://icms-image.slatic.net/images/ims-web/cf50a1a5-64b5-4af4-a47f-f1e5a9269a38.jpg_1200x1200.jpg",
  },
];

const removeItem = (id) => {
  console.log(id);
};
</script>
<template>
  <v-menu
    contained
    location="bottom start"
    class="position-relative d-flex justify-start"
    :close-on-content-click="false"
    location-strategy="static"
    scroll-strategy="none"
    transition="slide-y-reverse-transition"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        rounded="0"
        variant="text"
        height="50"
        class="text-capitalize ml-auto"
        :color="isDarkTheme() ? 'grey-lighten-3' : 'grey-darken-3'"
        @click="test = !test"
        v-bind="props"
      >
        <v-badge
          inline
          :color="isDarkTheme() ? 'grey-lighten-3' : 'grey-darken-3'"
          :content="0"
        >
          <v-icon start size="30" :icon="mdiShoppingOutline"></v-icon>
        </v-badge>
        <div class="d-flex flex-column text-left">
          <span
            class="text-overline text-capitalize w-100"
            style="line-height: 1.2rem"
            >Your Bag</span
          >
          <span class="w-100" style="line-height: 1.2rem">NPR0.00</span>
        </div>
      </v-btn>
    </template>
    <v-card border flat class="overflow-auto rounded-t-0 ml-auto" width="400">
      <v-list lines="three" density="compact" class="pa-0" height="300">
        <v-list-item border class="border-t-0" to="/" v-for="(item, i) in cart">
          <template v-slot:prepend>
            <v-avatar rounded size="70">
              <v-img cover :src="item['src']"></v-img>
            </v-avatar>
          </template>
          <v-list-item-subtitle
            class="mb-3"
            v-text="item['name']"
          ></v-list-item-subtitle>
          <v-list-item-title>1 * Rs. {{ item["price"] }}</v-list-item-title>
          <template v-slot:append>
            <v-btn
              size="x-small"
              variant="tonal"
              :icon="mdiClose"
              @click.prevent="removeItem(item['id'])"
            >
            </v-btn>
          </template>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-card-text class="text-center text-h6">
        <span class="font-weight-bold">Subtotal: </span>NRP.10000/-
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <v-btn block class="mb-3">View Cart</v-btn>
        <v-btn block>Checkout</v-btn>
      </v-card-text>
    </v-card>
  </v-menu>
</template>
