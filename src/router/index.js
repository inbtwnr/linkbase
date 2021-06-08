import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'

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
    ],
})