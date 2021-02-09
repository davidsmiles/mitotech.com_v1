<template>
  <page-c>
    <template slot="hero-text">
      <p class="font-uni-bold">CONTENT CREATION</p>
      <h1 class="title font-mont-bold mb-3">
        High value content for your <br />target audience
      </h1>
    </template>

    <h2 class="title font-uni-bold" slot="s2-title">Content Creation</h2>

    <img src="../../assets/img/Vector 3.png" alt="" slot="s2-image" />

    <p class="font-uni-bold" slot="ft-text">
      MitoTech creates high value content that engages your target audience.Our
      imagination is unrestricted and dynamic, just to give you the best content
      your target audience won't get anywhere else.
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