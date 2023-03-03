<script setup>
import { ref } from "vue";
import { useReview } from "@/stores/review";

const review = useReview();

const rating = 3;
</script>
<template>
  <v-card flat border rounded="0" id="review" class="border-s-0 border-e-0">
    <v-container>
      <v-row class="py-10">
        <v-col cols="12" md="5">
          <v-card-title class="text-h5">Reviews</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <div class="text-h3">0.0</div>
              </v-col>
              <v-col cols="12" md="8">
                <div class="d-flex align-center">
                  <v-rating
                    readonly
                    v-model="rating"
                    density="compact"
                  ></v-rating>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="7">
          <v-card-title>
            {{
              review.length != 0
                ? "Write a review for"
                : "Be the first to review"
            }}
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text v-for="(item, i) in review.reviews">
            {{ item }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
