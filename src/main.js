import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MediaQueries} from 'vue-media-queries';
import VueRouter from 'vue-router';
	
Vue.use(VueRouter);

//Import svg assets
import ContentCreation from './components/assets/ContentCreation';
import CorporateBranding from "./components/assets/CorporateBranding";
import SpeakerPromotion from "./components/assets/SpeakerPromotion";
import Message from "./components/assets/Message";
import Location from "./components/assets/Location";
import Quote from "./components/assets/Quote";
import Facebook from "./components/assets/Facebook";
import Instagram from "./components/assets/Instagram";

Vue.component("svg-content-creation", ContentCreation);
Vue.component("svg-corporate-branding", CorporateBranding);
Vue.component("svg-speaker-promotion", SpeakerPromotion);
Vue.component("svg-message", Message);
Vue.component("svg-location", Location);
Vue.component("svg-quote", Quote);
Vue.component("svg-facebook", Facebook);
Vue.component("svg-instagram", Instagram);

const mediaQueries = new MediaQueries()
Vue.use(mediaQueries);

import Routes from './routes';
	
const router = new VueRouter({

  routes: Routes,
  mode: "history"

});

router.beforeEach((to, from, next) => {
  document.querySelector("#main") ? document.querySelector("#main").scrollTo(0, 0) : null;
  next();
  // ...
})


new Vue({
  el: '#app',
  render: h => h(App),
  mediaQueries: mediaQueries,
  router,
})
