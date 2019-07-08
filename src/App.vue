<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Foot />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";

export default {
  name: "App",
  components: {
    Navbar,
    Foot
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.width-auto {
  width: auto;
}
.width-inherit {
  width: inherit;
}

.flex-center-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-start-center {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.flex-col-center-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flex-col-center-start {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.wrap {
  flex-wrap: wrap;
}
.border-20 {
  border-radius: 20px;
}
</style>

