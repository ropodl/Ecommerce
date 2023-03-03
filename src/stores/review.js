import { defineStore } from "pinia";

export const useReview = defineStore("review", {
  state: () => ({
    reviews: [
      {
        title: "Test",
        desc: "this is a test and the test is this",
      },
      {
        title: "Test",
        desc: "this is a test and the test is this",
      },
      {
        title: "Test",
        desc: "this is a test and the test is this",
      },
      {
        title: "Test",
        desc: "this is a test and the test is this",
      },
    ],
  }),
  getters: {
    allReviews(state) {
      return state.reviews;
    },
  },
  actions: {
    addReview(review) {
      this.reviews.push(review);
    },
  },
});
