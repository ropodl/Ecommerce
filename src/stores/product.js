import { defineStore } from "pinia";
import axios from "axios";

export const useProduct = defineStore("product", {
  state: () => ({
    products: [],
    currentProduct: [],
  }),
  getters: {
    allProducts(state) {
      return state.products;
    },
  },
  actions: {
    async pullProduct() {
      await axios
        .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
        .then((response) => {
          this.products = response.data;
        });
    },
    async pullProductId(id) {
      await axios
        .get("https://api.escuelajs.co/api/v1/products/" + id)
        .then((response) => {
          this.currentProduct = response.data;
        });
    },
  },
});
