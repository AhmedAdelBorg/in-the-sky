import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// import "font-awesome/scss/font-awesome.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
library.add(fas);
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
