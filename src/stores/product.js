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
    pullProduct() {
      axios
        .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
        .then((response) => {
          this.products = response.data;
          console.log(this.products);
        });
    },
    pullProductId(id) {
      axios
        .get("https://api.escuelajs.co/api/v1/products/" + id)
        .then((response) => {
          this.currentProduct = response.data;
        });
    },
  },
});
