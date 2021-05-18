import Vue from 'vue'
// import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


const state = {
    authUser: {},
    isAuthenticated: false,
    jwt: localStorage.getItem('token'),
    endpoints: {
        obtainJWT: 'https://onshop321.herokuapp.com/accounts/v1/auth/obtain_token/',
        refreshJWT: 'https://onshop321.herokuapp.com/accounts/v1/auth/refresh_token/',
        baseUrl: 'https://onshop321.herokuapp.com/accounts/v1/auth'
    }
};

const mutations = {
    setAuthUser(state, {
        authUser,
        isAuthenticated
    }) {
        Vue.set(state, 'authUser', authUser)
        Vue.set(state, 'isAuthenticated', isAuthenticated)
    },
    updateToken(state, newToken) {
        localStorage.setItem('token', newToken);
        state.jwt = newToken;
    },
    removeToken(state) {
        localStorage.removeItem('token');
        state.jwt = null;
    }
};
export default {
    state,
    mutations
}