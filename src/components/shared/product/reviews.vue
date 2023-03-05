<script setup>
import { useReview } from "@/stores/review";

const review = useReview();

const rating = 3;
</script>
<template>
  <v-card flat border rounded="0" class="border-s-0 border-e-0">
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="4">
          <v-card-title class="text-h5 font-weight-bold">
            Reviews(10)
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <div class="text-h3">3.4</div>
              </v-col>
              <v-col cols="12" md="8">
                <div class="d-flex align-center h-100">
                  <v-rating
                    readonly
                    color="orange"
                    v-model="rating"
                    density="compact"
                  ></v-rating>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-row>
            <v-col cols="12" v-for="i in 5">
              <v-rating
                readonly
                density="compact"
                color="orange"
                :model-value="i"
              ></v-rating>
              <v-progress-linear
                rounded
                height="5"
                model-value="20"
              ></v-progress-linear>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="8">
          <v-card-title>
            {{
              review.length != 0
                ? "Write a review for"
                : "Be the first to review"
            }}
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <div class="text-body-1 mb-3">Your Rating</div>
                <v-rating desnity="compact" color="orange"></v-rating>
              </v-col>
              <v-col cols="12" md="6" class="pb-0">
                <v-text-field placeholder="Full Name"></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="pb-0">
                <v-text-field placeholder="Email Address"></v-text-field>
              </v-col>
              <v-col cols="12" class="pb-0">
                <v-textarea placeholder="Your Review" class="mb-3"></v-textarea>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block flat size="large" class="text-capitalize">
                  Add Review
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="pb-0"
          v-for="(item, i) in review.reviews"
        >
          <v-card border flat class="mb-3">
            <v-list>
              <v-list-item>
                <template v-slot:prepend>
                  <v-img src=""></v-img>
                </template>
                <v-list-item-title v-text="item['name']"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="item['desc']"
                ></v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
