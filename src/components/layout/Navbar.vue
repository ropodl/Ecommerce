<script setup>
import { ref, defineAsyncComponent } from "vue";
import {
  mdiHeartOutline,
  mdiHeart,
  mdiMagnify,
  mdiLogout,
  mdiPower,
  mdiAccount,
  mdiMapMarker,
  mdiDownload,
  mdiShopping,
  mdiAccountDetails,
} from "@mdi/js";
import { useTheme } from "vuetify";

const Logo = defineAsyncComponent(() => import("@/components/layout/Logo.vue"));
const Megamenu = defineAsyncComponent(() =>
  import("@/components/layout/Megamenu.vue")
);
const Cart = defineAsyncComponent(() =>
  import("@/components/layout/navbar/cartdrop.vue")
);

let test = ref(null);
const loading = ref(false);

const isDarkTheme = () => {
  return useTheme().global.current.value.dark;
};
</script>
<template>
  <v-app-bar
    height="70"
    class="navbar"
    :theme="isDarkTheme() ? 'dark' : 'light'"
    style="z-index: 2008 !important"
  >
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="3">
          <v-btn
            block
            rounded="0"
            variant="text"
            color="transparent"
            to="/"
            height="60"
            max-width="200"
          >
            <Logo style="width: 200px; height: 50px" />
            <!-- <v-img height="50" width="200" src="@/assets/logo.svg"></v-img> -->
          </v-btn>
        </v-col>
        <v-col cols="12" md="9">
          <v-btn class="text-capitalize" variant="tonal" color="red" height="50"
            >Super Deals</v-btn
          >
          <v-btn
            height="50"
            class="text-capitalize"
            :color="isDarkTheme() ? 'grey-lighten-3' : 'grey-darken-3'"
          >
            Mother's Day Sales
          </v-btn>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                height="50"
                class="text-capitalize"
                :color="isDarkTheme() ? 'grey-lighten-3' : 'grey-darken-3'"
                v-bind="props"
                >Pages</v-btn
              >
            </template>
            <v-card border> this is a test </v-card>
          </v-menu>
          <v-btn
            height="50"
            class="text-capitalize"
            :color="isDarkTheme() ? 'grey-lighten-3' : 'grey-darken-3'"
            >Logitech Sale</v-btn
          >
          <v-btn
            height="50"
            class="text-capitalize"
            :color="isDarkTheme() ? 'grey-lighten-3' : 'grey-darken-3'"
            >Headphone Sale</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
  <v-app-bar
    flat
    height="50"
    class="searchbar"
    :theme="isDarkTheme() ? 'dark' : 'light'"
  >
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="3">
          <Megamenu />
        </v-col>
        <v-col>
          <v-autocomplete
            hide-details
            hide-no-data
            :loading="loading"
            variant="filled"
            placeholder="Search for products"
            :prepend-inner-icon="mdiMagnify"
            append-inner-icon=""
            density="comfortable"
            class="rounded-0"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="4">
          <div class="d-flex">
            <v-spacer></v-spacer>
            <div class="d-block">
              <span class="w-100"></span>
              <v-btn
                :active="false"
                variant="text"
                rounded="0"
                height="50"
                :color="isDarkTheme() ? 'grey-lighten-3' : 'grey-darken-3'"
                to="/wishlist"
              >
                <v-icon
                  start
                  size="30"
                  :icon="test ? mdiHeart : mdiHeartOutline"
                ></v-icon>
                <div class="d-flex flex-column text-left">
                  <span
                    class="text-overline text-capitalize w-100"
                    style="line-height: 1.2rem"
                  >
                    Wishlist
                  </span>
                  <span
                    class="w-100 text-capitalize"
                    style="line-height: 1.2rem"
                  >
                    0 item
                  </span>
                </div>
              </v-btn>
              <Cart />
            </div>
            <v-menu
              contained
              width="220"
              scroll-strategy="none"
              class="position-relative"
              transition="slide-y-reverse-transition"
            >
              <template v-slot:activator="{ props }">
                <v-btn icon height="50" color="transparent" v-bind="props">
                  <v-avatar>
                    <v-img
                      cover
                      src="https://images.unsplash.com/photo-1618614944895-fc409a83ad80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=10"
                    ></v-img>
                  </v-avatar>
                </v-btn>
              </template>
              <v-card border flat class="rounded-t-0">
                <v-list density="compact" class="py-0">
                  <v-list-item to="/account" :active="false">
                    <template v-slot:prepend>
                      <v-icon :icon="mdiAccount"></v-icon>
                    </template>
                    <v-list-item-title>My Account</v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/account/orders" :active="false">
                    <template v-slot:prepend>
                      <v-icon :icon="mdiShopping"></v-icon>
                    </template>
                    <v-list-item-title>Orders</v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/account/downloads" :active="false">
                    <template v-slot:prepend>
                      <v-icon :icon="mdiDownload"></v-icon>
                    </template>
                    <v-list-item-title>Downloads</v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/account/address" :active="false">
                    <template v-slot:prepend>
                      <v-icon :icon="mdiMapMarker"></v-icon>
                    </template>
                    <v-list-item-title>Address</v-list-item-title>
                  </v-list-item>
                  <v-list-item to="/account/details" :active="false">
                    <template v-slot:prepend>
                      <v-icon :icon="mdiAccountDetails"></v-icon>
                    </template>
                    <v-list-item-title>Account Details</v-list-item-title>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item to="/" :active="false">
                    <template v-slot:prepend>
                      <v-icon :icon="mdiPower"></v-icon>
                    </template>
                    <v-list-item-title>Log Out</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<style lang="scss" scoped>
header.navbar {
  position: sticky !important;
  top: 0 !important;
}
header.searchbar {
  position: unset !important;
  border-top: 0;
  overflow: visible;
}
</style>
