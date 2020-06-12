import Vue from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"; //BootstrapVueIcons are optional
import "@/assets/css/styles.scss";

Vue.use(BootstrapVue);

//BootstrapVueIcons are optional
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
