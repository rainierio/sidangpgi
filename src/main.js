import Vue from "vue";
import firebase from "firebase/app";
import "firebase/firestore";
import App from "./App.vue";
import router from "./router";
import MaterialKit from "./plugins/material-kit";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

//Initialize Firebase
var config = {
  apiKey: "AIzaSyASYdDm5MAAvdPrH2zG3jDTrekSK49WvBg",
  authDomain: "sidangpgi.firebaseapp.com",
  databaseURL: "https://sidangpgi.firebaseio.com",
  projectId: "sidangpgi",
  storageBucket: "sidangpgi.appspot.com",
  messagingSenderId: "428332652949"
};
firebase.initializeApp(config);

Vue.use(MaterialKit);
Vue.use(VueResource);

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
