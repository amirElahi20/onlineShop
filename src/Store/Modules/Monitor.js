import axios from "axios";

const state = {
    Monitors: [],
};

const getters = {
    GetMonitors(state) {
        return state.Monitors;
    },
};

const mutations = {
    SetMonitors(state, Monitors) {
        state.Monitors = Monitors;
    }
};


const actions = {
    GetMonitorsFromServer({ commit }) {
        axios.get('https://onshop321.herokuapp.com/product/v1/best_product_one/', {
                responseType: 'json'
            })
            .then(res => {
                commit("SetMonitors", res.data);
                // console.log(data);

            })
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};