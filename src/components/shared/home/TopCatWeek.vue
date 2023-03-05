<script setup>
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { useTheme } from "vuetify";

const isDarkTheme = () => {
  return useTheme().global.current.value.dark;
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <div class="d-flex align-center h-100">
          <div>
            <div class="text-overline mb-3">Featured</div>
            <div class="text-h4 font-weight-black mb-6">
              Top categories<br />this week
            </div>
            <div class="d-flex">
              <v-btn
                :color="isDarkTheme() ? 'grey-lighten-3' : 'grey-darken-3'"
                class="mr-3"
                variant="outlined"
                :icon="mdiChevronLeft"
              ></v-btn>
              <v-btn
                :color="isDarkTheme() ? 'grey-lighten-3' : 'grey-darken-3'"
                variant="outlined"
                :icon="mdiChevronRight"
              ></v-btn>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="9">
        <v-row no-gutters>
          <v-col cols="12" md="3" v-for="i in 4">
            <v-card
              flat
              :to="'/product/' + i"
              :color="isDarkTheme() ? 'transparent' : ''"
            >
              <v-img
                height="300"
                src="https://demo2.chethemes.com/techmarket/wp-content/uploads/2017/06/8-220x197.png"
              ></v-img>
              <v-card-text class="text-center">All in one PC</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
