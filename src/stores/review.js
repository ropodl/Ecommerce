import { defineStore } from "pinia";

export const useReview = defineStore("review", {
  state: () => ({
    reviews: [
      {
        name: "Test",
        desc: "this is a test and the test is this this is a test and the test is this this is a test and the test is this this is a test and the test is this this is a test and the test is this this is a test and the test is this this is a test and the test is this this is a test and the test is this this is a test and the test is this this is a test and the test is this",
      },
      {
        name: "Test",
        desc: "this is a test and the test is this",
      },
      {
        name: "Test",
        desc: "this is a test and the test is this",
      },
      {
        name: "Test",
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
