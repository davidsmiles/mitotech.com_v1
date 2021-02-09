<template>
  <footer>
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-4 col-6">
          <router-link to="/">
            <img src="../assets/logo.svg" alt="Mitotech" class="mb-3" />
          </router-link>
          <h3 class="font-uni-bold">ADDRESS</h3>
          <p>29, Ihama road, off airport road. Benin city Edo State. Nigeria.</p>
        </div>
        <div class="col-md-4 col-6">
          <h3 class="font-uni-bold mb-4">SERVICES</h3>
          <ul>
            <li>
              <router-link to="/content-creation">Content creation</router-link>
            </li>
            <li>
              <router-link to="/online-marketing">Online marketing</router-link>
            </li>
            <li>
              <router-link to="/corporate-branding">Corporate branding</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-4 col-6">
          <h3 class="font-uni-bold">FOLLOW US</h3>
          <ul>
            <li>
              <a href="#">
                <svg-facebook></svg-facebook>
              </a>
            </li>
            <li>
              <a href="#">
                <svg-instagram></svg-instagram>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <p>&copy; 2020 Mito Tech Solutions</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "../sass/variables";
@import "../sass/footer";
</style>