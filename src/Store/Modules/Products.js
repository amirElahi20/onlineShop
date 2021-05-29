import axios from "axios";

const state = {
    Products: [],

};

const getters = {
    GetProducts(state) {
        return state.Products;
    },
};

const mutations = {
    SetProducts(state, products) {
        state.Products = products;
    },


};


const actions = {
    GetProductsFromServer(context) {
        axios.get('https://onshop321.herokuapp.com/product/v1/product_list/')
            .then(response => {
                // console.log("this is products", response.data)
                context.commit("SetProducts", response.data)
            })
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};