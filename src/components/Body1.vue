<template>
  <section class="container">
    <div class="flex-col-center-center">
      <h1 class="section-heading mt-4">What our tracking system can do for you</h1>
      <div class="width-auto flex-col-center-center">
        <div v-for="content in contents" :key="content.title">
          <h5 class="section-subheading mt-5 mb-3">{{content.title}}</h5>
          <section class="section-width wrap flex-center-center">
            <section v-for="items in content.subitems" :key="items.title">
              <div class="card-small border-20 mx-3 my-3">
                <div class="card-icon flex-center-center">
                  <v-icon class="card-icon-small">{{items.icon}}</v-icon>
                </div>
                <div class="card-text flex-col-center-start">
                  <p class="width-inherit">{{items.title}}</p>
                  <div class="width-inherit flex-start-center">
                    <v-icon class="card-icon-smallest">{{content.smallicon}}</v-icon>
                    <p class="caption pl-2">{{content.subtitle}}</p>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          title: "Vehicle Security & Location",
          subtitle: "vehicle security",
          smallicon: "fas fa-lock",
          subitems: [
            {
              icon: "my_location",
              title: "Advanced Tracking"
            },
            {
              icon: "place",
              title: "Geo-location"
            },
            {
              icon: "add_location",
              title: "Accident Detection"
            }
          ]
        },
        {
          title: "Driver & Vehicle Management",
          subtitle: "vehicle Management",
          smallicon: "fas fa-wrench",
          subitems: [
            {
              icon: "departure_board",
              title: "Trip Monitoring"
            },
            {
              icon: "not_listed_location",
              title: "Location Restriction"
            },
            {
              icon: "report",
              title: "Harsh Bracking"
            }
          ]
        },
        {
          title: "Performance Reporting",
          subtitle: "vehicle Management",
          smallicon: "fas fa-tachometer-alt",
          subitems: [
            {
              icon: "fas fa-car-battery",
              title: "Power Reporting"
            },
            {
              icon: "looks",
              title: "Motion Detection"
            },
            {
              icon: "vpn_key",
              title: "Ignition Detection"
            },
            {
              icon: "timer",
              title: "Speed Reporting"
            },
            {
              icon: "settings_power",
              title: "Engine Hours"
            },
            {
              icon: "fas fa-thermometer-half",
              title: "Temperature Sensor"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.btn {
  background-color: red;
  border: 2px solid blue;
  padding: 10px;
  border-radius: 30px;
}
.section-heading {
  font-family: "Roboto";
  font-weight: 300;
  font-size: 30px;
  line-height: 120%;
  text-align: center;
}
.section-subheading {
  font-family: "Roboto";
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
}
.card-small {
  display: flex;
  width: 280px;
  height: 90px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.card-icon {
  width: 25%;
}
.card-icon-small {
  font-size: 24px;
}
.card-icon-smallest {
  font-size: 10px;
}
.card-text {
  width: 75%;
}
.section-width {
  max-width: 950px;
}
</style>

