import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import mixins from "./mixins";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

createApp(App)
  .use(router)
  .mixin(mixins)
  .use(store)
  .use(VueSweetalert2)
  .mount("#app");

window.Kakao.init("4f907822fcf19986da21e936b0933f6d");
