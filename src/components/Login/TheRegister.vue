<template>
  <div>
    <div class="log">
      <section class="login">
        <div class="row">
          <div class="form">
            <div class="form__login">
              <form action="#" class="list" @submit.prevent="RegisterUser">
                <h2 class="topform">ثبت نام</h2>
                <div class="error" v-if="error">{{ error }}</div>
                <div
                  class="list__group"
                  :class="{
                    invalid: v$.username.$error || checkUser,
                  }"
                >
                  <label for="name" class="list__label">
                    <fa class="fa" icon="user"></fa>نام کاربری</label
                  >
                  <input
                    type="text"
                    class="list__input"
                    placeholder="اسمتو بنویس "
                    id="name"
                    v-model.trim="username"
                    @input="v$.username.$touch"
                  />
                  <div
                    class="alert"
                    v-if="v$.username.$dirty && v$.username.required.$invalid"
                  >
                    نام کاربری نمیتواند خالی باشد
                  </div>
                  <span
                    class="alert"
                    v-if="v$.username.$dirty && v$.username.alphaNum.$invalid"
                  >
                    نام کاربری باید شامل اعداد و حروف انگلیسی باشد</span
                  >
                </div>
                <div
                  class="list__group"
                  :class="{ invalid: v$.password.$error }"
                >
                  <label for="name" class="list__label">
                    <fa class="fa" icon="lock"></fa>رمز عبور</label
                  >
                  <input
                    v-model.trim="password"
                    :type="visibility"
                    class="list__input"
                    placeholder="رمز عبورتو وارد کن"
                    id="password"
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
                  <span
                    class="alert"
                    v-if="
                      v$.password.$dirty && !v$.password.minLength.$response
                    "
                  >
                    رمز عبور نمیتواند کمتر از 6 باشد
                  </span>
                </div>

                <div
                  class="list__group"
                  :class="{
                    invalid:
                      (v$.email.$invalid && v$.email.$dirty) || checkEmail,
                  }"
                >
                  <label for="name" class="list__label">
                    <fa class="fa" icon="envelope"></fa>ایمیل</label
                  >

                  <input
                    v-model="email"
                    type="email"
                    class="list__input"
                    placeholder="ایمیلتو وارد کن"
                    id="email"
                    @input="v$.email.$touch"
                  />
                  <div
                    class="alert"
                    v-if="v$.email.$dirty && v$.email.required.$invalid"
                  >
                    ایمیل نباید خالی باشد
                  </div>
                  <div
                    class="alert"
                    v-if="v$.email.$dirty && !v$.email.email.$response"
                  >
                    ایمیل نامعتبر است
                  </div>
                </div>
                <button class="submit-btn" type="submit">ثبت نام</button>
              </form>
              <h5 class="txt">
                عضو هستید؟؟ پس
                <router-link class="router" to="/login">وارد شوید</router-link>
              </h5>
              <router-link class="back-btn" to="/">بازگشت به صفحه اصلی</router-link>
            </div>
          </div>
        </div>
      </section>
      <!-- <div>{{ v$.username }}</div> -->
    </div>
  </div>
</template>


<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, alphaNum } from "@vuelidate/validators";

// import axios from "axios";
export default {
  data() {
    return {
      v$: useVuelidate(),
      username: "",
      email: "",
      password: "",
      check: false,
      checknum: false,
      error: null,
      checkUser: null,
      checkEmail: null,
      visibility: "password",
    };
  },

  validations() {
    return {
      username: {
        required,

        alphaNum,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    };
  },
  methods: {
    RegisterUser() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.error = null;
        fetch("https://onshop321.herokuapp.com/accounts/v1/auth/register/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password,
          }),
        })
          .then((response) => response.json())
          .then((json) => {
            if (json.user == false) {
              this.error = "نام کاربری تکراری میباشد";
              this.checkUser = "yes";
            } else if (json.email == false) {
              this.error = "ایمیل وارد شده تکراری است";
              this.checkEmail = "yes";
            } else {
              alert("ثبت نام با موفقیت انجام شد");
              this.$router.push("/login");
            }
          });
      }
    },
    showPassword() {
      this.visibility = "text";
    },
    hidePassword() {
      this.visibility = "password";
    },
  },
};
</script>


<style lang="scss" scoped>
.invalid input {
  border: 1px solid red !important;
}
.invalid label {
  color: red;
}
.valid input {
  border: 1px solid green;
}
.valid label {
  color: green;
}
.eye {
  position: absolute;
  margin-top: -34px;
  margin-left: 10px;
  color: rgb(90, 92, 92);
  cursor: pointer;
}
.fa {
  margin-left: 5px;
}

.alert {
  color: red;
  text-align: start;
}
.error {
  color: red;
  text-align: center;
  font-weight: bold;
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
  margin-top: -75px;
}
.router {
  text-decoration: none;
  color: #500a61;
}
.form {
  width: 100%;
  height: 41rem;
  background-image: linear-gradient(
      105deg,
      rgba(white, 0.9) 0%,
      rgba(white, 0.7) 50%,
      transparent 50%
    ),
    url("../../../public/img/wp3997775-purple-grapes-wallpapers.jpg");
  background-size: cover;
  background-position: bottom;
  position: relative;
  border-radius: 30px;
  box-shadow: 1rem 2rem 2rem rgba(rgb(15, 15, 15), 0.8);

  &__login {
    width: 50%;
    padding: 5.3rem;
  }
}
.list {
  &__group:not(:last-child) {
    margin-bottom: 0rem;
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
  $color-primary-dark: #fc5296;
  $color-primary-light: #f67062;
  &__label {
    font-size: 1rem;
    font-weight: 700;
    margin-right: 3rem;
    margin-bottom: 0.7rem;
    display: block;
    direction: rtl;
    transition: all 0.3s;
    margin-top: 1rem;
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
  color: white;
  background-color: #500a61;
  border: 1px solid #500a61;
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
  background-color: #9e2abb;
  color: white;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>