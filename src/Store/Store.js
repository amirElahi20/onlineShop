import { createStore } from 'vuex';

import mostsell from './Modules/MostSell';
import Mobile from './Modules/Mobile';
import Monitor from './Modules/Monitor';
import Menu from './Modules/Menu';
import user from './Modules/User'




export const store = createStore({
    state() {

    },
    modules: {
        mostsell,
        Mobile,
        Monitor,
        Menu,
        user,

    }
})