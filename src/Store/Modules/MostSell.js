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
        axios.get('https://onshop321.herokuapp.com/product/v1/top_product/', {
                responseType: 'json'
            })
            .then(res => {
                commit("SetMostSellProducts", res.data.results);
                console.log(res);

            })
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};