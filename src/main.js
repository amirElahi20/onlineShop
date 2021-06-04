import { createApp } from 'vue'
// import Vue from 'vue';
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createRouter, createWebHistory } from 'vue-router';
import { store } from './Store/Store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import MainContent from './components/Content/MainContent.vue';
import LogIn from './components/Login/LogIn.vue';
import TheRegister from './components/Login/TheRegister.vue';
import ForgetPassword from './components/Login/ForgetPassword.vue';
import AboutUs from './MenuPages/AboutUs.vue';
import ResetPassword from './components/Login/ResetPassword.vue';
import ConfirmEmail from './components/Login/ConfirmEmail.vue';
import ContactUs from './MenuPages/ContactUs.vue';
import TotalProduct from './components/ProductPage/TotalProduct.vue';
import SingleProduct from './components/ProductPage/SingleProduct.vue'
import Shoppingpage from './components/ProductPage/ShoppingPage.vue'

axios.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function(err) {
    return Promise.reject(err);
});



const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'home',
            component: MainContent,


        },
        {
            path: '/login',
            component: LogIn,
            name: 'login',

        },
        {
            path: '/register',
            component: TheRegister
        },
        {
            path: '/forget',
            component: ForgetPassword
        },
        {
            path: '/aboutus',
            component: AboutUs,
        },
        {
            path: '/accounts/v1/check_reset_token/:uidb64/:token',
            component: ResetPassword,
            name: 'resetpassword'
        },
        {
            path: '/accounts/v1/check_confirm_email/:token',
            component: ConfirmEmail,
            name: 'Confirm'
        },
        {
            path: '/contactus',
            component: ContactUs

        },
        {
            path: '/products',
            component: TotalProduct
        },
        {
            path: '/products/:name',
            component: SingleProduct,
            name: 'SingleProduct'
        },
        {
            path: '/shopping',
            component: Shoppingpage,
            name: 'shopping'
        }
    ]
});


library.add(fas, fab);

const app = createApp(App);

app.component('fa', FontAwesomeIcon);

app.use(router);
app.use(store);
app.use(VueAxios, axios);
// app.use(VueCookies)
app.mount('#app');