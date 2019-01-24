<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand landing-header-Font" v-for="header in landingHeader" align="center">
                <h1> <strong>{{ header.title }} </strong> </h1>
                <h3>  {{ header.desc }}  </h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout" v-for="title in landingHeader">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center"> {{ title.longTitle }}</h2>
              <h5 class="description"> {{ title.longDesc }} </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100" v-for="tab1 in landingTab1">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon> {{ tab1.icon }} </md-icon>
                  </div>
                  <h4 class="info-title"> {{ tab1.title }} </h4>
                  <p> {{ tab1.desc }} </p>
                  <a v-bind:href="tab1.readMore"> <md-button class="md-info md-round md-sm">Lebih Lanjut</md-button> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Sekilas tentang pulau Sumba</h2>
          <div class="team">
              <div class="md-layout">
                  <div class="md-layout-item md-medium-size-33 md-small-size-100" v-for="tab2 in landingTab2">
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img :src="teamImg1" alt="Thumbnail Image" class="img-raised rounded-circle img-fluid">
                        </div>
                        <h4 class="card-title"> {{ tab2.title }}
                          <br>
                          <small class="card-description text-muted"> {{ tab2.subtitle }} </small>
                        </h4>

                        <md-card-content>
                          <p class="card-description"> {{ tab2.desc }} </p>
                        </md-card-content>

                      </md-card>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Hubungi Kami</h2>
              <h4 class="text-center description">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.</h4>
              <form class="contact-form">
                  <div class="md-layout">
                      <div class="md-layout-item md-size-50">
                        <md-field>
                          <label>Nama Anda</label>
                          <md-input v-model="name" type="text"></md-input>
                        </md-field>
                      </div>
                      <div class="md-layout-item md-size-50">
                        <md-field>
                          <label>Email Anda</label>
                          <md-input v-model="email" type="email"></md-input>
                        </md-field>
                      </div>
                  </div>
                  <md-field maxlength="5">
                    <label>Pesan Anda</label>
                    <md-textarea v-model="message"></md-textarea>
                  </md-field>
                  <div class="md-layout">
                    <div class="md-layout-item md-size-33 mx-auto text-center">
                      <md-button class="md-success">Kirim Pesan</md-button>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../main'
import { storage }  from '../main'
import TypographyImages from "./components/TypographyImagesSection";
import JavascriptComponents from "./components/JavascriptComponentsSection";

export default {
  components: {
    TypographyImages,
    JavascriptComponents,
  },
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
    },
    image: {
      type: String,
      default: require("@/assets/img/bg.jpg")
    },
      landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      firstname: null,
      
      //Object for landing
      landingHeader: [],
      landingTab1: [],
      landingTab2: []
    };
  },
  created() {

  },
  firestore () {
    return {
      landingHeader: db.collection('landingHeader'),
      landingTab1: db.collection('landingTab1').orderBy('index'),
      landingTab2: db.collection('landingTab2').orderBy('index'),
    }
  },
  methods: {

  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  mounted() {
    
  },
  beforeDestroy() {

  }
  
};
</script>

<style lang="scss" scoped>

.landing-header-Font{
    color: white;
    text-transform: uppercase;
    font-weight: weight-bold;
}

.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
