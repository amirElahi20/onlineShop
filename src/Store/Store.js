import { createStore } from 'vuex';
// import Vue from 'vue'
import mostsell from './Modules/MostSell';
import Mobile from './Modules/Mobile';
import Monitor from './Modules/Monitor';
import Menu from './Modules/Menu';
import axios from 'axios'



// Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const store = createStore({
    state: {
        authUser: '',
        isAuthenticated: false,
        jwt: localStorage.getItem('token'),
        endpoints: {
            // TODO: Remove hardcoding of dev endpoints
            obtainJWT: 'https://onshop321.herokuapp.com/accounts/v1/auth/obtain_token/',
            refreshJWT: 'https://onshop321.herokuapp.com/accounts/v1/auth/refresh_token/',
            baseUrl: 'https://onshop321.herokuapp.com/accounts/v1/'
        }
    },
    getters: {
        getUserName(state) {
            return state.authUser;
        },
        getAuth(state) {
            return state.isAuthenticated;
        },
        loggedIN(state) {
            return state.jwt != null
        }
    },

    mutations: {
        setUserName(state, authUser) {
            state.authUser = authUser
        },
        setAuth(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated
        },
        updateToken(state, newToken) {
            // TODO: For security purposes, take localStorage out of the project.
            localStorage.setItem('token', newToken);
            state.jwt = newToken;
        },
        DeleteToken() {
            return localStorage.removeItem('token')
        }

    },

    actions: {
        CheckForLogin(context) {
            axios.get('https://onshop321.herokuapp.com/accounts/v1/username/')
                .then(response => {
                    console.log("check for login",
                        response);
                    if (response.status !== 401) {
                        context.commit('setUserName', response.data);
                        context.commit('setAuth', true);
                    }
                })
        },
        removeToken(context) {
            context.commit('setUserName', '');
            context.commit('setAuth', false);
            context.commit('DeleteToken');
        }

    },
    modules: {
        mostsell,
        Mobile,
        Monitor,
        Menu,
    }
})