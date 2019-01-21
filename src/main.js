import Vue from "vue";
import VueFirestore from "vue-firestore";
import firebase from "firebase/app";
import "firebase/firestore";
import App from "./App.vue";
import router from "./router";
import MaterialKit from "./plugins/material-kit";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.use(VueResource);
Vue.use(VueFirestore);

//Initialize Firebase
var config = {
  apiKey: "AIzaSyASYdDm5MAAvdPrH2zG3jDTrekSK49WvBg",
  authDomain: "sidangpgi.firebaseapp.com",
  databaseURL: "https://sidangpgi.firebaseio.com",
  projectId: "sidangpgi",
  storageBucket: "sidangpgi.appspot.com",
  messagingSenderId: "428332652949"
};

var firebaseApp = firebase.initializeApp(config);
const settings = {timestampsInSnapshots:true};
const firestore = firebaseApp.firestore();
firestore.settings(settings);

export const db = firestore;

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
