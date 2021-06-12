import axios from "axios";

import { useToast } from 'vue-toastification';

const toast = useToast();
const state = {


};

const getters = {

};

const mutations = {


};


const actions = {
    AddProductToOrder(context, orderDetail) {
        console.log(orderDetail);
        axios.post('https://onshop321.herokuapp.com/shop/v1/new_Order/', {
            product: orderDetail.Product,
            amount: orderDetail.Amount,
            pack: orderDetail.Pack,
            // product: 1,
            // amount: 40,
            // pack: 3,
        }).then(response => {
            console.log(response.status);
            toast.success("به سبد خرید اضافه شد")
        }).catch(err => {
            console.log(err);
            toast.warning("ابتدا وارد سایت شوید")
        })

    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};