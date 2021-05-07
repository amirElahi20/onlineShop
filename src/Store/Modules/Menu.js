import axios from "axios";

const state = {
    Options: [],
};
const getters = {
    GetOptions(state) {
        return state.Options;
    },
};

const mutations = {
    SetMenuOptions(state, Options) {
        state.Options = Options;
    }
};


const actions = {
    GetMenuOptionsFromServer({ commit }) {
        axios.get('https://onshop321.herokuapp.com/product/v1/group_list/', {
                responseType: 'json'
            })
            .then(res => {
                var menu = []
                for (var i = 0; i < res.data.length; i++) {
                    if (!res.data[i].top_group)
                        menu.push(res.data[i].group_name)
                        // console.log(res.data[i]);
                }
                commit("SetMenuOptions", menu);
                console.log(menu)
                    // console.log(res.data);
            })
    },
    // GetSubMenuOptionsFromServer({ commit }) {
    //     axios.get('https://onshop321.herokuapp.com/product/v1/group_list/', {
    //             responseType: 'json'
    //         })
    //         .then(res => {
    //             commit("SetOptions", res.data);
    //             console.log(res.data);

    //         })
    // },

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