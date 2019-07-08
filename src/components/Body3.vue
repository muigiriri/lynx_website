<template>
  <section class="section py-5">
    <div class="flex-col-center-center">
      <h1 class="section-heading mt-4">More than a tracking Device</h1>
      <div class="width-auto flex-col-center-center">
        <section class="icon-section-width wrap flex-center-center">
          <h5
            class="section-subheading my-5 mb-3 px-1"
          >We're connecting car owners with the best vehicle management system. We do our best to make asset management as seamless and comfortable as possible.</h5>
          <section v-for="icon in icons" :key="icon.title">
            <div class="card-section3 flex-start-center mx-4 my-3">
              <v-icon small>{{icon.symbol}}</v-icon>
              <p class="card-section3-text mx-3">{{icon.title}}</p>
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
          title: "Improve operating efficiencies",
          symbol: "fas fa-star"
        },
        {
          title: "Improve risk assessment",
          symbol: "fas fa-search"
        },
        {
          title: "Vehicle maintenance",
          symbol: "fas fa-wrench"
        },
        {
          title: "Efficient asset recovery",
          symbol: "fas fa-check"
        },
        {
          title: "Enhance security and safety assets",
          symbol: "fas fa-lock"
        },
        {
          title: "Improved decision making",
          symbol: "fas fa-lightbulb"
        }
      ]
    };
  }
};
</script>

<style>
.card-section3 {
  display: flex;
  width: 270px;
  height: auto;
  background-color: rgba(0, 0, 0, 0);
}
.card-section3-text {
  font-size: 14px;
  text-align: left;
}
</style>

