import { createPinia } from "pinia";
import { createApp } from "vue";
import router from "./router/router";

import App from "./App.vue";

const vueApp = createApp(App);
vueApp.use(router);
vueApp.use(createPinia());
vueApp.mount("#app");
