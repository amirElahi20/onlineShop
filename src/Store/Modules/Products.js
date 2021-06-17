import axios from "axios";

const state = {
    Products: [],
    SingleProduct: {},
    SimilarProducts: []

};

const getters = {
    GetProducts(state) {
        return state.Products;
    },
    GetSingleProduct(state) {
        return state.SingleProduct
    },
    GetSimilarProducts(state) {
        return state.SimilarProducts
    }
};

const mutations = {
    SetProducts(state, products) {
        state.Products = products;
    },
    SetSingleProduct(state, singleProduct) {
        state.SingleProduct = singleProduct
    },
    SetSimilarProducts(state, similarproducts) {
        state.SimilarProducts = similarproducts
    }

};


const actions = {
    GetProductsFromServer(context) {
        axios.get('http://asha4f.pythonanywhere.com/product/api/v1/product_list/')
            .then(response => {
                console.log("This is Products total", response.data)
                context.commit("SetProducts", response.data)
            })
    },
    GetSingleProductFromServer(context, Filter) {
        axios.get('https://asha4f.pythonanywhere.com/product/api/v1/product/' + Filter.name)
            .then(response => {
                console.log("this is filter", Filter)
                console.log(response);
                context.commit("SetSingleProduct", response.data)
            })
    },
    GetSimilarProductFromServer(context, name) {
        axios.get('https://asha4f.pythonanywhere.com/product/api/v1/similar_product/' + name.name)
            .then(response => {
                console.log("this is similar product", response.data);
                context.commit("SetSimilarProducts", response.data)
            })
    }
};


export default {
    state,
    getters,
    mutations,
    actions,
};