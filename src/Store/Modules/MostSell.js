import axios from "axios";

const state = {
    MostSellProducts: [],
    ProductImageAddress: "https://onshop321.herokuapp.com/product/products//"

};

const getters = {
    GetMostSellProducts(state) {
        return state.MostSellProducts;
    },
    GetProuductImageAddress(state) {
        return state.ProductImageAddress;
    }
};

const mutations = {
    SetMostSellProducts(state, MostSellProducts) {
        state.MostSellProducts = MostSellProducts;
    }
};


const actions = {
    GetMostSellProductsFromServer({ commit }) {
        axios.get('https://onshop321.herokuapp.com/product/products//', {
                responseType: 'json'
            })
            .then(res => {
                commit("SetMostSellProducts", res.data);
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