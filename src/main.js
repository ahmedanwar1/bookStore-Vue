import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store.js";
import BaseCard from "./components/BaseCard.vue";
import Notification from "./components/Notification.vue";

const myApp = createApp(App);

myApp.component("BaseCard", BaseCard);
myApp.component("notification", Notification);

myApp.use(router);
myApp.use(store);

myApp.mount("#app");
