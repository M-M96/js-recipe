import Vue from "vue";
import App from "./App.vue";
import "./firebase.js"; // これを追加

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
