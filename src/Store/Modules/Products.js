import axios from "axios";

const state = {
    Products: [],
    SingleProduct: {},

};

const getters = {
    GetProducts(state) {
        return state.Products;
    },
    GetSingleProduct(state) {
        return state.SingleProduct
    }
};

const mutations = {
    SetProducts(state, products) {
        state.Products = products;
    },
    SetSingleProduct(state, singleProduct) {
        state.SingleProduct = singleProduct

    }

};


const actions = {
    GetProductsFromServer(context) {
        axios.get('https://onshop321.herokuapp.com/product/v1/product_list/')
            .then(response => {
                context.commit("SetProducts", response.data)
            })
    },
    GetSingleProductFromServer(context, Filter) {
        axios.get('https://onshop321.herokuapp.com/product/v1/product/' + Filter.name)
            .then(response => {
                console.log(response);
                context.commit("SetSingleProduct", response.data)
            })
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};