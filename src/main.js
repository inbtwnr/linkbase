import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

import store from './store';

import Vuex from 'vuex';

import VueCookie from 'vue-cookie';

import VueRouter from 'vue-router'
import router from './router/index'

import '@/assets/styles/_fonts.scss'
import '@/assets/styles/_main.scss'
import "@/assets/styles/_colors.scss";

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueCookie);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  Vuex,
  axios,
  el: '#app',
  store
}).$mount("#app");