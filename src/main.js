// Components
import App from "./App.vue";

// Pinia
import { createPinia } from "pinia";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);

app.use(createPinia());

app.mount("#app");
