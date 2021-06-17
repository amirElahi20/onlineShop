import axios from "axios";

const state = {
    MostSellProducts: [],
    BestProducts: [],

};

const getters = {
    GetMostSellProducts(state) {
        return state.MostSellProducts;
    },
    GetProuductImageAddress(state) {
        return state.ProductImageAddress;
    },
    GetBestProducts(state) {
        return state.BestProducts;
    }
};

const mutations = {
    SetMostSellProducts(state, MostSellProducts) {
        state.MostSellProducts = MostSellProducts;
    },
    SetBestProducts(state, bestProducts) {
        state.BestProducts = bestProducts;
    }
};


const actions = {
    GetMostSellProductsFromServer({ commit }) {
        axios.get('http://asha4f.pythonanywhere.com/product/api/v1/top_product/', {
                responseType: 'json'
            })
            .then(res => {
                commit("SetMostSellProducts", res.data);
                console.log("mostsellproducts", res.data);

            })
    },
    GetBestProductsFromServer({ commit }) {
        axios.get('http://asha4f.pythonanywhere.com/product/api/v1/best_product/', {
                responseType: 'json'
            })
            .then(res => {
                commit("SetBestProducts", res.data);
                console.log("bestproducts", res.data);

            })
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};