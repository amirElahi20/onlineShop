import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createRouter, createWebHistory } from 'vue-router';
import { store } from './Store/Store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import MainContent from './components/Content/MainContent.vue';
import LogIn from './components/Login/LogIn.vue';
import TheRegister from './components/Login/TheRegister.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: MainContent
        },
        {
            path: '/login',
            component: LogIn
        },
        {
            path: '/register',
            component: TheRegister

        }
    ]
})



library.add(fas);

const app = createApp(App);

app.component('fa', FontAwesomeIcon);

app.use(router);
app.use(store);
app.use(VueAxios, axios);

app.mount('#app');