// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/index.vue"),
      },
      {
        path: "/wishlist",
        component: () => import("@/views/wishlist/index.vue"),
      },
      {
        path: "/:category",
        component: () => import("@/views/category/index.vue"),
      },
      {
        path: "/product/:id",
        component: () => import("@/views/product/show.vue"),
      },
      {
        path: "/account",
        component: () => import("@/layouts/User.vue"),
        children: [
          {
            path: "/account/dashboard",
            component: () => import("@/views/account/index.vue"),
            alias: "/account",
          },
          {
            path: "/account/orders",
            component: () => import("@/views/account/orders.vue"),
            alias: "/account",
          },
          {
            path: "/account/downloads",
            component: () => import("@/views/account/downloads.vue"),
            alias: "/account",
          },
          {
            path: "/account/address",
            component: () => import("@/views/account/address.vue"),
            alias: "/account",
          },
          {
            path: "/account/details",
            component: () => import("@/views/account/details.vue"),
            alias: "/account",
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
