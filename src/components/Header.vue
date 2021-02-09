<template>
  <header>
    <div
      class="inner container d-flex justify-content-between pt-4 pb-4"
      v-bind:class="$resize && $mq.above(992) ? 'container-mito-1' : ''"
    >
      <router-link class="logo" to="/">
        <img src="../assets/logo.svg" alt="Mitotech" />
      </router-link>

      <div class="controls d-flex align-items-center">
        <a href="mailto:info@mitotech.com" class="btn btn-primary-1 talk mr-md-5 btn-lg headbtn-1">
          Let's talk
        </a>
        <button class="btn btn-trans btn-lg headbtn-2" v-on:click="$emit('toggleMenu')">
          menu
          <span class="menu-icon"></span>
        </button>
      </div>
    </div>
  </header>
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

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999999;

  > div {
    > span {
      @media #{$mobile} {
        width: 64px;
      }
      img {
        @media #{$mobile} {
          width: 100%;
        }
      }
    }

    > div {
      .headbtn-1 {
        @media #{$mobile} {
          font-size: 15px;
          padding: 7px 15px;
        }
      }

      .headbtn-2 {
        cursor: pointer;

        @media #{$mobile} {
          font-size: 17px;
          color: #fff;
        }
      }
    }
  }
}

.menu-icon {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 10px;
  top: 1px;
  
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    width: 100%;
    height: 2px;
    background: #002f5b;

    @media #{$mobile} {
      background: #fff;
    }
  }

  &:before {
    top: 0px;
  }

  &:after {
    bottom: 0px;
  }
}
</style>