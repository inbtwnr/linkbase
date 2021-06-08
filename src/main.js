import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import VueRouter from 'vue-router'
import router from './router/index'

import '@/assets/styles/_fonts.scss'

// import theme from '@/assets/styles/_fonts.scss'

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  axios
}).$mount("#app");