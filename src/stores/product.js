import { defineStore } from "pinia";

export const useProduct = defineStore("product", {
  state: () => {
    products: [
      {
        title: "Test",
        desc: "this is a test and the test is this",
      },
    ];
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
  },
  actions: {
    addProduct(product) {
      this.products.push(product);
    },
  },
});
