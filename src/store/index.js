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
            currentId: ""
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
        async getUserOneCategoryList(ctx, category) {
            const currentId = category._id;
            console.log(currentId)
            const user = await axios.get(`${this.getters.baseURL}category/${currentId}`, {
                headers: {
                    Authorization: "Bearer " + this.getters.userToken,
                },
            });

            console.log(user.data.data[0])
            const userOneCategoryList = user.data.data.links;
            console.log(userOneCategoryList + " links")
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
        updateCurrentId(state, currentId) {
            console.log(currentId + " from mutation")
            state.userFrame.currentId = currentId;
            console.log(state.userFrame.currentId + " after setting")
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
        activeCategoryId(state) {
            console.log(state.userFrame.currentId)
            return state.userFrame.currentId;
        }
    },
})