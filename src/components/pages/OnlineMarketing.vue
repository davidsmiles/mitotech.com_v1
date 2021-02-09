<template>
  <page-c>
    <template slot="hero-text">
      <p class="font-uni-bold">ONLINE MARKETTING</p>
      <h1 class="title font-mont-bold mb-3">
        Advertising your products <br> to the world!
      </h1>
    </template>

    <h2 class="title font-uni-bold" slot="s2-title">Online Marketing</h2>

    <img src="../../assets/img/Rectangle 64 (2).png" alt="" slot="s2-image" />

    <p class="font-uni-bold" slot="ft-text">
      MitoTech provides internet marketing services by advertising your products to the world through various marketing options including paid search, display marketing, social media, email and more.
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