import { createStore } from 'vuex';

import mostsell from './Modules/MostSell';
import Mobile from './Modules/Mobile';
import Monitor from './Modules/Monitor';
import Menu from './Modules/Menu';
import auth from './Modules/auth.js';




export const store = createStore({
    state() {

    },
    modules: {
        mostsell,
        Mobile,
        Monitor,
        Menu,
        auth

    }
})