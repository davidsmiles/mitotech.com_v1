<template>
  <div id="app">
    <transition name="menu">
      <div id="menu" v-show="menu" class="view">
        <menu-comp v-on:toggleMenu="toggleMenu()" v-on:menuClick="menuClick($event)"></menu-comp>
      </div>
    </transition>
    <transition name="page">
      <div id="main" v-show="!menu" class="view">
        <header-comp v-on:toggleMenu="toggleMenu()"></header-comp>
        <router-view></router-view>
        <footer-comp></footer-comp>
      </div>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './components/pages/Home';

export default {
  components: {
    'header-comp': Header,
    'footer-comp': Footer,
    'home-comp': Home,
    'menu-comp': Menu,
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menu: false
    }
  },

  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },

    menuClick(element) {
      this.toggleMenu();
      setTimeout(function() {
        window.location.href = "/#" + element;
      }, 520);
    }
  }
}
</script>

<style lang="scss">

body, html {
  padding: 0;
  margin: 0;
}

@import "./sass/variables";
@import "./sass/font";
@import "./sass/text";
@import "./sass/btn";
@import "./sass/app";

</style>
