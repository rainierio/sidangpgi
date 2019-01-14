<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1> {{ landingHeader.title }} </h1>
              <h3> {{ landingHeader.desc }} </h3>
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
      landingHeader:  {
        title: null,
        desc: null,
      },

      landingTab1: {
        img:  null,
        title: null,
        desc: null,
        readMore: null,
        index: null
      },

      landingTab2: {
        img:  null,
        title: null,
        desc: null,
        readMore: null,
        index: null
      },

    };
  },
  created() {
      this.$http.get('https://sidangpgi.firebaseio.com/landingHeader.json',).then(function(data){
          return data.json()
      }).then(function(data){
          console.log(data);
      });
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
