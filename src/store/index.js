import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        baseURL: 'http://linker-api-deploy.herokuapp.com/api/',
        userFrame: {
            userName: "",
            userCategories: [],
        },
        userToken: localStorage.getItem("token")
    },
    actions: {
        async getUserCategories(ctx) {
            const user = await axios.get(`${this.getters.baseURL}user/`, {
                headers: {
                    Authorization: "Bearer " + this.getters.userToken,
                },
            });
            const userCategories = user.data.data.categories.map(
                (item) => {
                    return item;
                }
            );
            ctx.commit('updateCategories', userCategories)
        },
        async getUserName(ctx) {
            const user = await axios.get(`${this.getters.baseURL}user/`, {
                headers: {
                    Authorization: "Bearer " + this.getters.userToken,
                },
            });
            const userName = user.data.data.username;
            ctx.commit('updateUserName', userName)
        }
    },
    mutations: {
        updateCategories(state, userCategories) {
            state.userFrame.userCategories = userCategories;
        },
        updateUserName(state, userName) {
            state.userFrame.userName = userName;
        }
    },
    getters: {
        baseURL(state) {
            return state.baseURL;
        },
        userToken(state) {
            return state.userToken;
        },
        userCategories(state) {
            return state.userFrame.userCategories;
        },
        userName(state) {
            return state.userFrame.userName;
        }
    },
})