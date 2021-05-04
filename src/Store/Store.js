// import Vue from 'vue';
import { createStore } from 'vuex';

import mostsell from './Modules/MostSell';
import Mobile from './Modules/Mobile';
import Monitor from './Modules/Monitor';

// Vue.use(Vuex);

export const store = createStore({
    state() {

    },
    modules: {
        mostsell,
        Mobile,
        Monitor

    }
})