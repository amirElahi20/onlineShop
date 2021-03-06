import axios from "axios";

const state = {
    Options: [],
    Sub: []
};
const getters = {
    GetOptions(state) {
        return state.Options;
    },
    GetSub(state) {
        return state.Sub;
    }
};

const mutations = {
    SetMenuOptions(state, Options) {
        state.Options = Options;
    },
    SetSub(state, sub) {
        state.Sub = sub;
    }
};


const actions = {
    GetMenuOptionsFromServer({ commit }) {
        axios.get('https://onshop321.herokuapp.com/product/v1/group_list2/', {
                responseType: 'json'
            })
            .then(res => {
                console.log(res.data)
                commit("SetMenuOptions", res.data);
            })
    },
    GetSubFromServer({ commit }) {
        axios.get('https://onshop321.herokuapp.com/product/v1/group_list/', {
                responseType: 'json'
            })
            .then(res => {
                console.log(res.data)
                commit("SetSub", res.data);
            })
    },

};

export default {
    state,
    getters,
    mutations,
    actions,
};





// .then(res => {
//     for (var i = 0; i < res.data.length; i++) {
//         if (res.data[i].top_group === null) {
//             console.log(res.data[i].group_name)
//             commit("SetMenuOptions", res.data[i].group_name);
//         }
//         // console.log(this.GetMenuOptionsFromServer)
//     }
//     // console.log(res.data[1].top_group);

// })