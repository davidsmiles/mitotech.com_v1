<template>
  <div class="container">
    <div class="background">
      <img class="rect-1" src="../assets/svg/Rectangle 16 (2).svg" alt="" />
      <img class="rect-2" src="../assets/svg/Rectangle 21@2x.svg" alt="" />
      <img class="rect-3" src="../assets/svg/Rectangle 21@2x.svg" alt="" />
      <img class="ecl-1" src="../assets/svg/Ellipse 11.svg" alt="" />
      <img class="rect-4" src="../assets/svg/Rectangle 22 (2).svg" alt="" />
      <img class="rect-5" src="../assets/svg/Rectangle 19 (2).svg" alt="" />
      <img class="rect-6" src="../assets/svg/Rectangle 23 (2).svg" alt="" />
    </div>

    <header>
      <div class="inner container d-flex justify-content-between pt-4 pb-4">
        <span class="logo">
          <img src="../assets/logo.svg" alt="Mitotech" />
        </span>

        <div class="controls d-flex align-items-center">
          <button class="btn btn-trans btn-lg" v-on:click="$emit('toggleMenu')">
            menu
            <span class="menu-icon"></span>
          </button>
        </div>
      </div>
    </header>

    <div class="menu-content">
      <div class="social-media">
        <ul class="sm-list">
          <li class="sm-item line"></li>
          <li class="sm-item">
            <a href="#">
              <svg-facebook></svg-facebook>
            </a>
          </li>
          <li class="sm-item">
            <a href="#">
              <svg-instagram></svg-instagram>
            </a>
          </li>
        </ul>
      </div>

      <div class="menu-items">
        <ul class="m-list">
          <li class="m-item"><a href="#" class="font-uni-bold" v-on:click.prevent="$emit('menuClick', 'home')">HOME</a></li>
          <li class="m-item"><a href="#" class="font-uni-bold" v-on:click.prevent="$emit('menuClick', 'services')">SERVICES</a></li>
          <li class="m-item"><a href="#" class="font-uni-bold" v-on:click.prevent="$emit('menuClick', 'about')">ABOUT</a></li>
          <li class="m-item"><a href="#" class="font-uni-bold" v-on:click.prevent="$emit('menuClick', 'contact')">CONTACT</a></li>
        </ul>
      </div>
    </div>
  </div>
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

html {
  height: 100%;
}

body {
  min-height: 100%;
}

header {
  padding-top: 20px;

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
      button:nth-of-type(1) {
        @media #{$mobile} {
          font-size: 15px;
          padding: 7px 15px;
        }
      }

      button:nth-of-type(2) {
        cursor: pointer;

        @media #{$mobile} {
          font-size: 17px;
          //   color: #fff;
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
    width: 33px;
    height: 2px;
    background: #002f5b;

    @media #{$mobile} {
      //   background: #fff;
    }
  }

  &:before {
    top: 1px;
    transform: rotate(45deg);
  }

  &:after {
    top: 2px;
    transform: rotate(-45deg);
  }
}

.menu-content {
  display: flex;
  justify-content: start;
  height: 500px;

  .social-media {
    width: 200px;
    // background:#ccc;
    // border: 1px solid #ccc;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .menu-items {
    width: 400px;
    // background: #ddd;
    // border: 1px solid #ccc;
    height: 100%;
    padding-top: 44px;
  }
}

.sm-list {
  padding: 0;
  margin: 0;
  position: relative;

  //   &:before {
  //     content: "";
  //     position: absolute;
  //     width: 96px;
  //     height: 5px;
  //     background: $theme-color-1;
  //     top: -25px;
  //     left: 0;
  //     z-index: 1;
  //   }

  .sm-item {
    list-style: none;
    text-align: center;
    margin-bottom: 10px;

    &.line {
      width: 1px;
      height: 81px;
      background: #002f5b;
      margin: 0 auto 20px;
    }
  }
}

.m-list {
  padding: 0;
  margin: 0;
  position: relative;

  //   &:before {
  //     content: "";
  //     position: absolute;
  //     width: 96px;
  //     height: 5px;
  //     background: $theme-color-1;
  //     top: -25px;
  //     left: 0;
  //     z-index: 1;
  //   }

  .m-item {
    list-style: none;
    text-align: left;
    margin-bottom: 73px;
    padding-left: 80px;

    @media #{$mobile} {
      padding-left: 20px;
    }

    a {
      font-size: 32px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  //   z-index: 9999999;
  overflow: hidden;
  height: calc(100% + 92px);

  img {
    position: absolute;
  }

  .rect-6 {
    bottom: -121px;
    left: calc(50% - 200px);
  }

  .rect-1 {
    top: -143px;
    left: 187px;
  }

  .rect-4 {
    right: 0;
    bottom: -61px;
  }

  .rect-3 {
    top: 300px;
    left: 189px;
  }

  .rect-2 {
    top: 365px;
    left: 79%;
  }

  .ecl-1 {
    right: 24%;
    top: 221px;
  }

  .rect-5 {
    left: 0;
    top: 400px;
  }
}
</style>