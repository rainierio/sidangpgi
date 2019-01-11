<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <img :src="leaf4" alt="leaf4" class="leaf4" v-show="leafShow">
            <img :src="leaf3" alt="leaf3" class="leaf3" v-show="leafShow">
            <img :src="leaf2" alt="leaf2" class="leaf2" v-show="leafShow">
            <img :src="leaf1" alt="leaf1" class="leaf1" v-show="leafShow">
            <div class="brand">
              <h1>Sidang Raya PGI XVII 2019</h1>
              <h3>Sumba Timur - Sumba Tengah - Sumba Barat - Sumba Barat Daya</h3>
            </div>
          </div>

        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">Kegiatan Pra Sidang Raya dan Sidang Raya</h2>
              <h5 class="description">Penyelenggaraan Sidang Raya XVII PGI tahun 2019, akan didahului oleh pertemuan Pra Sidang Raya yaitu Pertemuan Raya Perempuan Gereja, Pertemuan Raya Pemuda Gereja dan Sidang Majelis Pekerja Lengkap (MPL) PGI</h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>chat</md-icon>
                  </div>
                  <h4 class="info-title">Pertemuan Raya Perempuan Gereja</h4>
                  <p>Pertemuan Raya Perempuan Gereja merupakan Pertemuan Oikumenis dan Selebrasi iman dari para  perempuan gereja dari berbagai latar belakang daerah, budaya, dan denominasi gereja.</p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <div class="info">
                    <div class="icon icon-success">
                      <md-icon>verified_user</md-icon>
                    </div>
                    <h4 class="info-title">Pertemuan Raya Pemuda Gereja</h4>
                    <p>Pertemuan Raya Pemuda Gereja merupakan Pertemuan Oikumenis dan Selebrasi iman dari para  pemuda gereja dari berbagai latar belakang daerah, budaya, dan denominasi gereja. </p>
                  </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <div class="info">
                    <div class="icon icon-danger">
                      <md-icon>fingerprint</md-icon>
                    </div>
                    <h4 class="info-title">Sidang Majelis Pekerja Lengkap PGI</h4>
                    <p>Sidang Majelis Pekerja Lengkap PGI merupakan Pertemuan Pimpinan Sinode Gereja Anggota PGI. Sidang Majelis Pekerja Lengkap PGI akan didahului oleh persidangan Majelis Pekerja Harian PGI (MPH PGI).</p>
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
                  <div class="md-layout-item md-medium-size-33 md-small-size-100">
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img :src="teamImg1" alt="Thumbnail Image" class="img-raised rounded-circle img-fluid">
                        </div>
                        <h4 class="card-title">Sumba Timur
                          <br>
                          <small class="card-description text-muted">Waingapu</small>
                        </h4>

                        <md-card-content>
                          <p class="card-description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some <a href="#">links</a> for people to be able to follow them outside the site.</p>
                        </md-card-content>

                      </md-card>
                    </div>
                  </div>
                  <div class="md-layout-item md-medium-size-33 md-small-size-100">
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img :src="teamImg2" alt="Thumbnail Image" class="img-raised rounded-circle img-fluid">
                        </div>
                        <h4 class="card-title">Sumba Tengah
                          <br>
                          <small class="card-description text-muted">Waibakul</small>
                        </h4>

                        <md-card-content>
                          <p class="card-description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some <a href="#">links</a> for people to be able to follow them outside the site.</p>
                        </md-card-content>

                      </md-card>
                    </div>
                  </div>
                  <div class="md-layout-item md-medium-size-33 md-small-size-100">
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img :src="teamImg3" alt="Thumbnail Image" class="img-raised rounded-circle img-fluid">
                        </div>
                        <h4 class="card-title">Sumba Barat
                          <br>
                          <small class="card-description text-muted">Waikabubak</small>
                        </h4>

                        <md-card-content>
                          <p class="card-description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some <a href="#">links</a> for people to be able to follow them outside the site.</p>
                        </md-card-content>                
                      </md-card>
                    </div>
                  </div>
                  <div class="md-layout-item md-medium-size-33 md-small-size-100">
                    <div class="team-player">
                      <md-card class="md-card-plain">
                        <div class="md-layout-item md-size-50 mx-auto">
                          <img :src="teamImg2" alt="Thumbnail Image" class="img-raised rounded-circle img-fluid">
                        </div>
                        <h4 class="card-title">Sumba Barat Daya
                          <br>
                          <small class="card-description text-muted">Tambolaka</small>
                        </h4>

                        <md-card-content>
                          <p class="card-description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some <a href="#">links</a> for people to be able to follow them outside the site.</p>
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
                          <label>Your Name</label>
                          <md-input v-model="name" type="text"></md-input>
                        </md-field>
                      </div>
                      <div class="md-layout-item md-size-50">
                        <md-field>
                          <label>Your Email</label>
                          <md-input v-model="email" type="email"></md-input>
                        </md-field>
                      </div>
                  </div>
                  <md-field maxlength="5">
                    <label>Your Message</label>
                    <md-textarea v-model="message"></md-textarea>
                  </md-field>
                  <div class="md-layout">
                    <div class="md-layout-item md-size-33 mx-auto text-center">
                      <md-button class="md-success">Send Message</md-button>
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
      default: require("@/assets/img/vue-mk-header.jpg")
    },
    leaf4: {
      type: String,
      default: require("@/assets/img/leaf4.png")
    },
    leaf3: {
      type: String,
      default: require("@/assets/img/leaf3.png")
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/leaf2.png")
    },
    leaf1: {
      type: String,
      default: require("@/assets/img/leaf1.png")
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

    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>

<style lang="scss" scoped>
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
