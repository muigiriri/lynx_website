<template>
  <div class="team">
    <Banner />
    <Body1 />
    <Body2 />
    <Body3 />
    <Body4 />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Body1 from "../components/Body1";
import Body2 from "../components/Body2";
import Body3 from "../components/Body3";
import Body4 from "../components/Body4";
export default {
  components: {
    Banner,
    Body1,
    Body2,
    Body3,
    Body4
  },
  data() {
    return {};
  }
};
</script>
