import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import IndexExample from "./views/IndexExample.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

//Sidang Raya import
import tentang from "./views/tentang.vue";
import kegiatan from "./views/kegiatan.vue";
import pendanaan from "./views/pendanaan.vue";
import press from "./views/press.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/index",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/indexExample",
      name: "IndexExample",
      components: { default: IndexExample, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    //Sidang Raya PGI Router
    {
      path: "/tentang",
      name: "tentang",
      components: { default: tentang, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
  {
      path: "/kegiatan",
      name: "kegiatan",
      components: { default: kegiatan, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
    }
  },
  {
    path: "/pendanaan",
    name: "pendanaan",
    components: { default: pendanaan, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" }
    }
  },
  {
    path: "/press",
    name: "press",
    components: { default: press, header: MainNavbar, footer: MainFooter },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" }
    }
  } 

  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
