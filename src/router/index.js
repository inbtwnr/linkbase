import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Promo from '../pages/Promo.vue'
import Home from '../pages/Home.vue'

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/signup',
            component: Signup
        },
        {
            path: '/',
            component: Promo
        },
        {
            path: '/home',
            component: Home
        },
    ],
})