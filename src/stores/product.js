import { defineStore } from "pinia";
import axios from "axios";

export const useProduct = defineStore("product", {
  state: () => ({
    products: [],
  }),
  getters: {
    allProducts(state) {
      return state.products;
    },
  },
  actions: {
    async pullProduct() {
      await axios
        .get("https://dummyjson.com/products?limit=12")
        .then((response) => {
          this.products = response.data.products;
        });
    },
  },
});
