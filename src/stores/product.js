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
        .get("https://api.escuelajs.co/api/v1/products?limit=12")
        .then((response) => {
          this.products = response.data;
        });
    },
  },
});
