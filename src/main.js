import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index";
const app = createApp(App);
import liff from "@line/liff";
app.use(liff);
app.use(router);
app.mount("#app");
