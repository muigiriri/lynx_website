<template>
  <section class="bg py-5">
    <div class="flex-col-center-center">
      <h1
        class="section-heading mt-4 px-3"
      >Compare trip reports between your app and the tracking device</h1>
      <div class="width-auto flex-col-center-center">
        <section class="icon-section-width wrap flex-center-center">
          <h5
            class="section-subheading my-5 mb-3 px-3"
          >Compare your app data to the tracking device data and compare the vehicle reports for better business management</h5>
          <section v-for="icon in icons" :key="icon.app">
            <div class="card-section4 flex-start-center mx-4 mt-1 mb-4">
              <img :src="icon.app" alt />
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
        { app: require("../assets/icons/uber.png") },
        { app: require("../assets/icons/littlecab.png") },
        { app: require("../assets/icons/bolt.png") },
        { app: require("../assets/icons/sendy.png") }
      ]
    };
  }
};
</script>

<style>
.card-section4 {
  display: flex;
  width: 100px;
  height: auto;
  background-color: rgba(0, 0, 0, 0);
}
</style>

