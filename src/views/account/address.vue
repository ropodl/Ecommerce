<script setup>
import { mdiPlus } from "@mdi/js";
</script>
<template>
  <v-row>
    <v-col cols="12">
      The following addresses will be used on the checkout page by default.
    </v-col>
    <v-col cols="12" md="6">
      <v-card border flat editable>
        <v-card-title> Billing address </v-card-title>
        <v-card-text>
          You have not set up this type of address yet.
        </v-card-text>
        <v-btn block variant="tonal" rounded="0" class="text-capitalize">
          <v-icon start :icon="mdiPlus"></v-icon>
          Add
        </v-btn>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card border flat editable>
        <v-card-title> Shipping address </v-card-title>
        <v-card-text>
          Add You have not set up this type of address yet.
        </v-card-text>
        <v-btn block variant="tonal" rounded="0" class="text-capitalize">
          <v-icon start :icon="mdiPlus"></v-icon>
          Add
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>
