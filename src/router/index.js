import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
    ],
})