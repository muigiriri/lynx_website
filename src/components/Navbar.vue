<template>
  <nav class="mx-4">
    <v-toolbar flat app>
      <a href class="logo">
        <img src="../assets/lynx.svg" alt="lynx logo" />
      </a>
      <v-spacer></v-spacer>
      <div class="navbar-brand"></div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a @click="fb()" target="_blank">
            <v-icon class="mx-2">fab fa-facebook</v-icon>
          </a>
          <a @click="instagram()" target="_blank">
            <v-icon class="mx-2">fab fa-instagram</v-icon>
          </a>
          <a @click="tweet()" target="_blank">
            <v-icon class="mx-2">fab fa-twitter</v-icon>
          </a>
          <!-- <a class="navbar-item">Pricing</a> -->
          <!-- <a class="navbar-item">Personal Vehicles</a> -->
          <!-- <div class="navbar-item has-dropdown is-hoverable"> -->
          <!-- <a class="navbar-item">Commercial Vehicles</a> -->

          <!-- <div class="navbar-dropdown">
              <a class="navbar-item">Learn More</a>
              <a class="navbar-item">Pricing</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">FAQ's</a>
            </div>
          </div>-->
        </div>
      </div>
      <v-toolbar-side-icon class="grey--text mx-2" @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="white">
      <v-layout row>
        <v-flex>
          <v-card flat>
            <div class="menu-img">
              <v-layout column fill-height>
                <v-spacer></v-spacer>

                <div class="pl-5 pt-5">
                  <v-avatar tile size="100">
                    <img src="../assets/lynx_icon.svg" alt="lynx logo" />
                  </v-avatar>
                  <p class="white--text pt-1 pl-2 body-5">Lynx Telematics</p>
                </div>
              </v-layout>
            </div>
            <v-list>
              <v-card flat v-for="item in items" :key="item.title" router :to="item.route">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon small color="blue">{{item.icon}}</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title class="body-2 font-weight-bold">{{item.title}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile
                  v-for="subitem in item.subitems"
                  :key="subitem.title"
                  router
                  :to="subitem.route"
                >
                  <v-list-tile-action>
                    <v-icon color="white" class="link">{{subitem.icon}}</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title class="caption">{{subitem.title}}</v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-icon small>{{subitem.action}}</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-card>
            </v-list>
            <!-- Social media -->
            <v-list>
              <v-card flat>
                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title
                      class="body-2 font-weight-bold"
                    >Connect with Us on Social Media</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile avatar @click="fb()">
                  <v-list-tile-content>
                    <v-list-tile-title class="caption">Facebook</v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-icon small>fab fa-facebook</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-list-tile avatar @click="instagram()">
                  <v-list-tile-content>
                    <v-list-tile-title class="caption">Instagram</v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-icon small>fab fa-instagram</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-list-tile avatar @click="tweet()">
                  <v-list-tile-content>
                    <v-list-tile-title class="caption">Twitter</v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-icon small>fab fa-twitter</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-card>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "fas fa-address-card",
          title: "About Lynx",
          subitems: false,
          route: "/"
        },
        {
          icon: "directions_car",
          title: "Personal Vehicles",
          route: "/",
          subitems: [
            {
              icon: "fas fa-link",
              title: "Learn More",
              action: "chevron_right",
              route: "/"
            },
            {
              icon: "fas fa-link",
              title: "Pricing",
              action: "chevron_right",
              route: "/"
            }
          ]
        },
        {
          icon: "directions_bus",
          title: "Commercial Vehicles",
          route: "/",
          subitems: [
            {
              icon: "fas fa-link",
              title: "Learn More",
              action: "chevron_right",
              route: "/"
            },
            {
              icon: "fas fa-link",
              title: "Pricing",
              action: "chevron_right",
              route: "/"
            }
          ]
        }
      ]
    };
  },
  methods: {
    fb: function() {
      window.open("www.facebook.com", "_blank");
    },
    instagram: function() {
      window.open("https://www.instagram.com/lynxtelematics/", "_blank");
    },
    tweet: function() {
      window.open("https://twitter.com/lynx_telematics", "_blank");
    }
  }
};
</script>

<style>
.menu-img {
  background-color: #003a68;
  /* background-size: cover; */
}
.logo {
  /* background-color: red; */
  height: 50px;
}
.logo img {
  width: 100px;
  height: 50px;
}
.link {
  font-size: 10px;
}
</style>


