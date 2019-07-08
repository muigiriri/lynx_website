<template>
  <section class="bg py-5">
    <div class="flex-col-center-center">
      <h1 class="section-heading mt-4">Track Vehicles from All industries</h1>
      <div class="width-auto flex-col-center-center">
        <section class="icon-section-width wrap flex-center-center">
          <section v-for="icon in icons" :key="icon.title">
            <div class="card-icons flex-col-center-center mx-4 my-3">
              <img :src="icon.link" alt />
              <p class="card-icon-text">{{icon.title}}</p>
            </div>
          </section>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          title: "Taxi",
          link: require("../assets/icons/taxi.svg")
        },
        {
          title: "Trucking",
          link: require("../assets/icons/trucking.svg")
        },
        {
          title: "Construction",
          link: require("../assets/icons/construction.svg")
        },
        {
          title: "Cargo Trasport",
          link: require("../assets/icons/cargo-transport.svg")
        },
        {
          title: "Buses",
          link: require("../assets/icons/buses.svg")
        },
        {
          title: "'Matatu'",
          link: require("../assets/icons/matatu.svg")
        },
        {
          title: "'Nissan' Matatu",
          link: require("../assets/icons/nissan.svg")
        },
        {
          title: "Long Distance",
          link: require("../assets/icons/long-distance.svg")
        }
      ]
    };
  }
};
</script>

<style>
.bg {
  width: 100;
  background-color: #ececec;
}
.section-subheading {
  font-family: "Roboto";
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
}
.card-icons {
  display: flex;
  width: 120px;
  height: auto;
  background-color: rgba(0, 0, 0, 0);
}
.card-icon-text {
  font-size: 14px;
  text-align: center;
}
.icon-section-width {
  max-width: 700px;
}
</style>

