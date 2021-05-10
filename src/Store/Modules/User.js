import axios from "axios";

const state = {

};

const getters = {

};

const mutations = {

};


const actions = {
    RegisterUser(context, registerData) {
        axios.post('https://onshop321.herokuapp.com/accounts/v1/auth/register/', registerData)
            .then(response => {
                if (response.status == 200) {
                    console.log(response);
                    alert("ثبت نام با موفقیت انجام شد");
                }
            }, data => {
                console.log(data)
            })
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};