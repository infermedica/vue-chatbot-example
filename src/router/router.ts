import { createRouter, createWebHistory } from "vue-router";

import Chatbot from "@/views/Chatbot.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: Chatbot }],
});

export default router;
