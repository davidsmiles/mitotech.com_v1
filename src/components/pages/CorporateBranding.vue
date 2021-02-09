<template>
  <page-c>
    <template slot="hero-text">
      <p class="font-uni-bold">CORPORATE BRANDING</p>
      <h1 class="title font-mont-bold mb-3">
        Promoting your Ideas from <br> design to development
      </h1>
    </template>

    <h2 class="title font-uni-bold" slot="s2-title">Corporate Branding</h2>

    <img src="../../assets/img/Rectangle 64.png" alt="" slot="s2-image" />

    <p class="font-uni-bold" slot="ft-text">
      Our Corporate branding team takes a bird eye view to promoting your brand. We go beyond your specific products or services to promote the brand name of your corporate entity.
    </p>
  </page-c>
</template>

<script>
import Page from "../templates/Page.vue";

export default {
  components: {
    "page-c": Page,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
</style>