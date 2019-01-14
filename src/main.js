import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(MaterialKit);

//Initialize Firebase
const config = {
    apiKey: "AIzaSyASYdDm5MAAvdPrH2zG3jDTrekSK49WvBg",
    authDomain: "sidangpgi.firebaseapp.com",
    databaseURL: "https://sidangpgi.firebaseio.com",
    projectId: "sidangpgi",
    storageBucket: "sidangpgi.appspot.com",
    messagingSenderId: "428332652949"
};
firebase.initializeApp(config);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
