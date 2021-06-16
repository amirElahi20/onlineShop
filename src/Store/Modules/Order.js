import axios from "axios";

import { useToast } from 'vue-toastification';

const toast = useToast();
const state = {
    UserShopCart: {},
    TotslPrice: 0,
    IsExistShopCart: false

};

const getters = {
    GetUserShopCart(state) {
        return state.UserShopCart;
    },
    GetTotalPrice(state) {
        return state.TotslPrice;
    },
    IsExistShopCart(state) {
        return state.IsExistShopCart;
    },
};

const mutations = {
    SetUserShopCart(state, shopCart) {
        state.UserShopCart = shopCart;
        state.TotslPrice = 0;
        // for (let i = 0; i < shopCart.orderDetail.length; i++) {
        //     state.TotslPrice +=
        // }
    }

};


const actions = {
    AddProductToOrder(context, orderDetail) {
        console.log(orderDetail);
        axios.post('https://onshop321.herokuapp.com/shop/v1/new_Order/', {
            product: orderDetail.Product,
            amount: orderDetail.Amount,
            pack: orderDetail.Pack,
        }).then(response => {
            console.log(response.status);
            toast.success("به سبد خرید اضافه شد")
        }).catch(err => {
            console.log(err);
            toast.warning("ابتدا وارد سایت شوید")
        })

    },
    GetUserOpenOrder() {
        axios.get('https://onshop321.herokuapp.com/shop/v1/Show_Order/')
            .then(response => {
                console.log("this is response", response);
                return response.json();
            }).then(data => {
                console.log("this is data", data);
            })
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};