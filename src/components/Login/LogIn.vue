<template>
  <div>
       <transition name="fade">
      <div class="popup" v-if="popup"></div>
    </transition>
    <success-login @popup-ok="ok" v-if="popup"></success-login>
    <div class="log">
      <section class="login">
        <div class="row">
          <div class="form">
            <div class="form__login">
              <form class="list" @submit.prevent="authenticate">
                <h2 class="topform">ورود</h2>
                <div class="error" v-if="error">{{ error }}</div>
                <div
                  class="list__group"
                  :class="{
                    invalid:
                      v$.username.$dirty && !v$.username.required.$response,
                  }"
                >
                  <label for="name" class="list__label"
                    ><fa class="fa" icon="user"></fa>نام کاربری</label
                  >
                  <input
                    type="text"
                    class="list__input"
                    placeholder="اسمتو بنویس "
                    id="name"
                    v-model="username"
                    autofocus="autofocus"
                    maxlength="100"
                    @input="v$.username.$touch"
                  />
                  <div
                    class="alert"
                    v-if="v$.username.$dirty && v$.username.required.$invalid"
                  >
                    نام کاربری نمیتواند خالی باشد
                  </div>
                </div>
                <div
                  class="list__group"
                  :class="{
                    invalid:
                      v$.password.$dirty && !v$.password.required.$response,
                  }"
                >
                  <label for="name" class="list__label"
                    ><fa class="fa" icon="lock"></fa>رمز عبور</label
                  >
                  <input
                    :type="visibility"
                    class="list__input"
                    placeholder="رمز عبورتو وارد کن"
                    id="password"
                    v-model="password"
                    @input="v$.password.$touch"
                  />
                  <fa
                    @click="hidePassword"
                    v-if="visibility == 'text'"
                    class="eye eye-slash"
                    icon="eye-slash"
                  ></fa
                  ><fa
                    @click="showPassword"
                    v-if="visibility == 'password'"
                    class="eye eye-on"
                    icon="eye"
                  ></fa>
                  <div
                    class="alert"
                    v-if="v$.password.$dirty && v$.password.required.$invalid"
                  >
                    رمز عبور نمیتواند خالی باشد
                  </div>
                </div>

                <button :disabled="popup" class="submit-btn" type="submit">ورود</button>
              </form>
              <h5 class="txt">
                عضو نیستید؟؟
                <router-link class="router" to="/register"
                  >پس ثبت نام کنید</router-link
                >
              </h5>
              <router-link class="back-btn" to="/">بازگشت به صفحه اصلی</router-link>
              <h5 class="txt">
                <router-link class="router forget" to="/forget"
                  >رمز خود را فراموش کرده اید؟</router-link
                >
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import SuccessLogin from './../Dialogs/LoginDialog/SuccessLogin'

export default {
  components:{
    SuccessLogin
  },
  data() {
    return {
      username: "",
      password: "",
      error: null,
      popup : false,
      v$: useVuelidate(),
      visibility: "password",
    };
  },
  validations() {
    return {
      username: {
        required,
      },
      password: {
        required,
      },
    };
  },
  methods: {
    authenticate() {
       this.v$.$validate();
      if (!this.v$.$error){
      const payload = {
        username: this.username,
        password: this.password,
      };
      axios
        .post(this.$store.state.endpoints.obtainJWT, payload, {
          // headers: { Authorization: localStorage.getItem("token") },
        })
        .then((response) => {
          this.$store.commit("updateToken", response.data.access);
          // get and set auth user
          const base = {
            baseURL: this.$store.state.endpoints.baseUrl,
            headers: {
              // Set your Authorization to 'JWT', not Bearer!!!
              Authorization: `Bearer ${this.$store.state.jwt}`,
              "Content-Type": "application/json",
            },
            xhrFields: {
              withCredentials: true,
            },
          };
          // Even though the authentication returned a user object that can be
          // decoded, we fetch it again. This way we aren't super dependant on
          // JWT and can plug in something else.
          const axiosInstance = axios.create(base);
          axiosInstance({
            url: "/username/",
            method: "get",
            params: {},
          }).then((response) => {
            console.log("this is my log",response);
            this.$store.commit("setUserName", response.data);
            this.$store.commit("setAuth", true);
           
          });
          // this.$router.push("/");
           this.popup = true
         
        })
        .catch((error) => {
          console.log(error);
          this.error = "مشخصات وارد شده صحیح نیستند";
        });
      }
    },
    showPassword() {
      this.visibility = "text";
    },
    hidePassword() {
      this.visibility = "password";
    },
    ok(popupstatus){
      this.popup = popupstatus
      console.log(popupstatus)
    },
    showpop(){
      this.popup = true
    }
  },
};
</script>



<style lang="scss" scoped>
.popup {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.836);
  opacity: 1;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.4s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 0.4s;
}

.fade-leave-to {
  opacity: 0;
}
.router {
  text-decoration: none;
  color: orange;
  border-bottom: 0.5px solid orange;
}
.invalid input {
  border: 1px solid red !important;
}
.invalid label {
  color: red;
}
.alert {
  color: red;
  text-align: start;
}
.eye {
  position: absolute;
  // top: 15.7rem;
  margin-top: -34px;
  margin-left: 10px;
  color: rgb(90, 92, 92);
  cursor: pointer;
}

.error {
  color: red;
  text-align: center;
  font-weight: bold;
}
.forget {
  font-size: 15px;
  text-align: center;
  color:orangered;
  border-bottom: 0.5px solid orangered;
}
.log {
  display: flex;
  justify-content: center;
}
.login {
  padding: 3rem 0;
  width: 1000px;
}
.topform {
  margin-bottom: 20px;
  text-align: center;
  margin-top: -50px;
}
.fa {
  margin-left: 5px;
}
p {
  direction: rtl;
}
.form {
  width: 100%;
  height: 38rem;
  background-image: linear-gradient(
      105deg,
      rgba(white, 0.9) 0%,
      rgba(white, 0.7) 50%,
      transparent 50%
    ),
    url("../../../public/img/tatiana-VpZyvTc_9Mg-unsplash.jpg");
  background-size: cover;
  background-position: left;
  position: relative;
  border-radius: 30px;
  box-shadow: 1rem 2rem 2rem rgba(rgb(15, 15, 15), 0.8);

  &__login {
    width: 50%;
    padding: 6rem;
  }
}
.list {
  &__group:not(:last-child) {
    margin-bottom: 1rem;
  }

  &__input {
    font-size: 17px;
    height: 50px;
    padding-right: 10px;
    border-radius: 10px;
    background-color: rgba(rgb(255, 255, 255), 0.9);
    border: none;
    text-align: right;
    border: 1px solid black;
    width: 90%;
    display: block;
    color: inherit;
  }

  &__label {
    font-size: 1rem;
    font-weight: 700;
    margin-right: 3rem;
    margin-top: 0.7rem;
    display: block;
    direction: rtl;
    transition: all 0.3s;
    margin-bottom: 10px;
  }
}
.submit-btn {
  padding: 10px;
  display: flex;
  width: 90%;
  cursor: pointer;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: orange;
  border: 1px solid orange;
  transition: all 0.3s;
  margin-top: 30px;
  &:hover {
    transform: scale(1.1);
  }
}

.txt {
  text-align: center;
  padding-right: 1rem;
  padding-top: 1rem;
  font-size: 15px;
}
.back-btn {
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 90%;
  margin-top: 1rem;
  border-radius: 10px;
  background-color: orangered;
  color: white;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>