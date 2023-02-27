<script setup>
import { VDataTable } from "vuetify/labs/VDataTable";
import { mdiDelete, mdiPencil } from "@mdi/js";

let items = [
  {
    title: "Home",
    disabled: false,
    to: "/",
  },
  {
    title: "Wishlist",
    disabled: true,
    to: "/wishlist",
  },
];

let itemsPerPage = 5;
let headers = [
  {
    // title: "Product",
    align: "start",
    sortable: false,
    key: "image",
  },
  { title: "Product Name", align: "end", key: "name" },
  { title: "Unit Price", align: "end", key: "price" },
  { title: "Stock Status", align: "end", key: "status" },
  { title: "Actions", align: "end", key: "action" },
];
let wishlist = [
  {
    image:
      "https://demo2.chethemes.com/techmarket/wp-content/uploads/2017/02/Oculus-224x197.jpg",
    name: "Cardboard 120° degree Viewing Immersive",
    price: { discount_price: "$879.99", original_price: "$1,430.99" },
    status: true,
  },
  {
    image:
      "https://demo2.chethemes.com/techmarket/wp-content/uploads/2017/02/Oculus-224x197.jpg",
    name: "Cardboard 120° degree Viewing Immersive",
    price: { discount_price: "$879.99", original_price: "$1,430.99" },
    status: true,
  },
  {
    image:
      "https://demo2.chethemes.com/techmarket/wp-content/uploads/2017/02/Oculus-224x197.jpg",
    name: "Cardboard 120° degree Viewing Immersive",
    price: { discount_price: "$879.99", original_price: "$1,430.99" },
    status: true,
  },
  {
    image:
      "https://demo2.chethemes.com/techmarket/wp-content/uploads/2017/02/Oculus-224x197.jpg",
    name: "Cardboard 120° degree Viewing Immersive",
    price: { discount_price: "$879.99", original_price: "$1,430.99" },
    status: false,
  },
  {
    image:
      "https://demo2.chethemes.com/techmarket/wp-content/uploads/2017/02/Oculus-224x197.jpg",
    name: "Cardboard 120° degree Viewing Immersive",
    price: { discount_price: "$879.99", original_price: "$1,430.99" },
    status: false,
  },
];
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-breadcrumbs
          class="pa-0"
          density="compact"
          :items="items"
          divider="-"
        ></v-breadcrumbs>
      </v-col>
      <v-col cols="12">
        <v-card flat color="transparent" height="150">
          <v-card-title
            class="w-100 h-100 d-flex justify-center align-center text-h3"
          >
            Wishlist
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card flat color="transparent">
          <v-data-table
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="wishlist"
            item-value="name"
          >
            <template v-slot:item.image="{ item }">
              <v-avatar rounded="0" size="100">
                <v-img :src="item.raw.image"></v-img>
              </v-avatar>
            </template>
            <template v-slot:item.price="{ item }">
              <div>
                <span class="discounted">
                  {{ item.raw.price.discount_price }}
                </span>
                <span class="original">
                  {{ item.raw.price.original_price }}
                </span>
              </div>
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip :color="item.raw.status ? 'green' : 'red'">
                {{ item.raw.status ? "In Stock" : "Out of Stock" }}
              </v-chip>
            </template>
            <template v-slot:item.action="{ item }">
              <v-btn variant="text" :icon="mdiPencil"></v-btn>
              <v-btn variant="text" :icon="mdiDelete"></v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
