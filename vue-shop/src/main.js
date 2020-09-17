import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import jQuery from'jquery';

window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

Vue.component('NavBar',require('./components/NavBar.vue').default);
Vue.component('Hero',require('./components/Hero.vue').default);
Vue.component('products',require('./sections/products.vue').default);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
