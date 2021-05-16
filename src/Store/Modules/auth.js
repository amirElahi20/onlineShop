import axios from "axios";
// import Vue from 'vue';
const state = () => ({
    loginApiStatus: "",
    userProfile: {
        id: "",
        username: "",
        password: "",
    },
    logOut: false,

});

const getters = {
    getloginApiStatus(state) {
        return state.loginApiStatus;
    },
    getsetuserProfile(state) {
        return state.userProfile;
    }
};

const mutations = {
    setloginApiStatus(state, payload) {
        state.loginApiStatus = payload;
    },
    setuserProfile(state, payload) {
        state.userProfile = {
            id: payload.id,
            username: payload.username,
            password: payload.password,
        }
    },
    setLogout(state, payload) {
        state.logOut = payload
    }

};


const actions = {
    async userLogin({ commit }, payload) {
        const response = await axios.post("https://onshop321.herokuapp.com/accounts/v1/auth/obtain_token/", payload, {
            withCredentials: true
        }).catch((err) => {
            console.log(err)
        });
        if (response && response.data) {
            commit('setloginApiStatus', 'success');
            console.log(response);
        } else {
            commit('setloginApiStatus', 'failed');
        }
    },
    async userProfile({ commit }) {
        const response = await axios.get("https://onshop321.herokuapp.com/accounts/v1/auth/user/", {
            withCredentials: true
        }).catch((err) => {
            console.log(err)
        });
        if (response && response.data) {
            commit('setuserProfile', response.data)
        }
    },
    async userLogOut({ commit }) {
        const response = await axios.get("https://onshop321.herokuapp.com/accounts/v1/auth/logout/", {
            withCredentials: true
        }).catch((err) => {
            console.log(err)
        });
        if (response && response.data) {
            commit('setLogout', true)
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};