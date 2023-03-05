<script setup>
import {
  mdiAccountCreditCardOutline,
  mdiForumOutline,
  mdiPhoneReturn,
  mdiRefresh,
  mdiTruckFastOutline,
} from "@mdi/js";
import { ref } from "vue";

const features = [
  {
    icon: mdiTruckFastOutline,
    title: "Free Delivery",
    subtitle: "from NPR.10000",
  },
  {
    icon: mdiForumOutline,
    title: "99% Customer",
    subtitle: "feedback",
  },
  {
    icon: mdiRefresh,
    title: "365 Days",
    subtitle: "for free return",
  },
  {
    icon: mdiAccountCreditCardOutline,
    title: "Payment",
    subtitle: "Secure System",
  },
];
</script>
<template>
  <v-card border flat>
    <v-row justify="space-between">
      <v-col cols="12" md="3" v-for="(feature, i) in features">
        <v-list class="py-6">
          <v-list-item>
            <template v-slot:prepend>
              <v-icon
                color="primary"
                size="50"
                :icon="feature['icon']"
                style="opacity: 1"
              ></v-icon>
            </template>
            <v-list-item-title
              class="font-weight-bold mb-1"
              v-text="feature['title']"
            ></v-list-item-title>
            <v-list-item-subtitle
              v-text="feature['subtitle']"
            ></v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>
