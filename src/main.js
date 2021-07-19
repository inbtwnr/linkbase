import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

import express from 'express'

import store from './store';

import Vuex from 'vuex';

import VueCookie from 'vue-cookie';

import VueRouter from 'vue-router'
import router from './router/index'

import '@/assets/styles/_fonts.scss'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueCookie);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  Vuex,
  express,
  axios,
  el: '#app',
  store
}).$mount("#app");