import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        baseURL: 'http://linker-api-deploy.herokuapp.com/api/',
        userToken: '',
        userModel: null
    },
    mutations: {
        SET_TOKEN: (state, payload) => {
            state.userToken = payload;
        },
        SET_USER_MODEL: (state, payload) => {
            state.userModel = payload;
        }
    },
    getters: {
        USER_TOKEN: state => {
            return state.userToken;
        },
        USER_MODEL: state => {
            return state.userModel;
        },
        BASE_URL: state => {
            return state.baseURL;
        }
    }
})