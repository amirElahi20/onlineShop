import axios from "axios";

const state = {
    About: [],
};
const getters = {
    GetAboutInformation(state) {
        return state.About;
    },
};

const mutations = {
    SetAboutInformation(state, about) {
        state.About = about
    }
};


const actions = {

    GetAboutUsFromServer(context) {
        axios.get('http://asha4f.pythonanywhere.com/site_model/v1/About_Us/')
            .then(response => {
                console.log(response.data)
                context.commit("SetAboutInformation", response.data)
            })
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};