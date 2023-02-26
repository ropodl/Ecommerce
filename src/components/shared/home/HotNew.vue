<script setup>
  import { ref } from "vue";
  let tab = ref(null);
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <div class="text-h5">Hot New Arrivals</div>
      </v-col>
      <v-col cols="12" md="8">
        <v-tabs v-model="tab" mandatory align-tabs="end" color="light" slider-color="primary">
          <v-tab v-for="i in 3" :key="i" :value="i" theme="light" class="text-capitalize"> Item {{ i }} </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12">
        <v-window v-model="tab">
          <v-window-item v-for="i in 3" :key="i" :value="i">
            <v-card rounded="0">
              <v-card-text v-text="i"></v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>
