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
            userOneCategoryList: [],
            activeUserId: ""
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
            console.log(userCategories)
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
        },
        async getUserOneCategoryList(ctx) {
            const idCategory = "60ccd654944753c52b2b3554"
            const user = await axios.get(`${this.getters.baseURL}category/${idCategory}`, {
                headers: {
                    Authorization: "Bearer " + this.getters.userToken,
                },
            });
            const userOneCategoryList = user.data.data.links;
            console.log(userOneCategoryList)
            ctx.commit('updateUserOneCategoryList', userOneCategoryList)
        },
        deleteUserToken(ctx) {
            ctx.commit('deleteUserToken')
        }
    },
    mutations: {
        updateCategories(state, userCategories) {
            state.userFrame.userCategories = userCategories;
        },
        updateUserName(state, userName) {
            state.userFrame.userName = userName;
        },
        updateUserOneCategoryList(state, userOneCategoryList) {
            state.userFrame.userOneCategoryList = userOneCategoryList;
        },
        deleteUserToken(state) {
            state.userToken = "";
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
        },
        userOneCategoryList(state) {
            return state.userFrame.userOneCategoryList;
        },
        activeUserId(state) {
            return state.activeUserId;
        }
    },
})