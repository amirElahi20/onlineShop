import axios from "axios";

const state = {
    Mobiles: [],
};

const getters = {
    GetMobiles(state) {
        return state.Mobiles;
    },
};

const mutations = {
    SetMobiles(state, Mobiles) {
        state.Mobiles = Mobiles;
    }
};


const actions = {
    GetMobilesFromServer({ commit }) {
        axios.get('https://onshop321.herokuapp.com/product/v1/best_product_two/', {
                responseType: 'json'
            })
            .then(res => {
                commit("SetMobiles", res.data.results);
                // console.log(res.data.results)

            })
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};