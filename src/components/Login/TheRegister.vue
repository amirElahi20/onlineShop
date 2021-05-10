<template>
  <div>
    <div class="log">
      <section class="login">
        <div class="row">
          <div class="form">
            <div class="form__login">
              <form action="#" class="list" @submit.prevent="RegisterUser()">
                <h2 class="topform">ثبت نام</h2>
                <div
                  class="list__group"
                  :class="{ invalid: v$.username.$dirty && !v$.username.required.$response || !v$.username.minLength.$response || checknum}"
                >
                  <label for="name" class="list__label">نام کاربری</label>
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
                  <div class="alert" v-if="checknum">نام کاربری تکراری میباشد</div>
                  <span
                    class="alert"
                    v-if="
                      v$.username.$dirty && !v$.username.minLength.$response
                    "
                  >
                    نام کاربری نمیتواند کمتر از 2 کاراکتر باشد
                  </span>
                </div>
                <div
                  class="list__group"
                  :class="{ invalid: v$.password.$error }"
                >
                  <label for="name" class="list__label">رمز عبور</label>
                  <input
                    v-model.trim="password"
                    type="password"
                    class="list__input"
                    placeholder="رمز عبورتو وارد کن"
                    id="password"
                    @input="v$.password.$touch"
                  />
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

                <div class="list__group" :class="{ invalid: v$.email.$dirty && !v$.email.required.$response || v$.email.email.$invalid || check }">
                  <label for="name" class="list__label">ایمیل</label>
                  <!-- <div>{{ check }}</div> -->
                  <!-- <div>{{ v$.email }}</div> -->
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
                  <div class="alert" v-if="check">ایمیل تکراری میباشد</div>
                </div>
                <button class="submit-btn" type="submit">ثبت نام</button>
              </form>
              <h5 class="txt">
                عضو هستید؟؟ پس <router-link to="/login">وارد شوید</router-link>
              </h5>
              <router-link class="back-btn" to="/">بازگشت</router-link>
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
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import axios from "axios";
export default {
  data() {
    return {
      v$: useVuelidate(),
      username: "",
      email: "",
      password: "",
      repassword: "",
      check: false,
      checknum : false,
    };
  },

  validations() {
    return {
      username: {
        required,
        minLength: minLength(2),
        unique: function (val) {
          if (val === " true") return true;
          return axios
            .post(
              "https://onshop321.herokuapp.com/accounts/v1/auth/check_user/",
              {
                responseType: "json",
                params: { user: val },
              }
            )
            .then(
              (response) => {
                this.checknum = false
                return !response.data.reserved;
              },
              (error) => {
                console.log(error);
                this.checknum = true;
                // console.log("check", this.check);
              }
            );
        },
      },
      email: {
        required,
        email,
        uniaue: function (val) {
          if (val === " true") return true;
          return axios
            .post(
              "https://onshop321.herokuapp.com/accounts/v1/auth/check_email/",
              {
                responseType: "json",
                params: { email: val },
              }
            )
             .then(
              (response) => {
                this.check = false;
                console.log(response);
                return !response.data.reserved;
              },
              (error) => {
                console.log(error);
                this.check = true;
                // console.log("check", this.check);
              }
            );
        },
      },
      password: {
        required,
        minLength: minLength(6),
      },
      repassword: {
        sameAs: sameAs("password"),
      },
    };
  },
  methods: {
    RegisterUser() {
      const register = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("form successfully submitted");
        this.$store.dispatch("RegisterUser", register);
        this.$router.push("/login");
      } else {
        alert("form failed");
      }
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

.alert {
  color: red;
  text-align: start;
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
.form {
  width: 100%;
  height: 40rem;
  background-image: linear-gradient(
      105deg,
      rgba(white, 0.9) 0%,
      rgba(white, 0.7) 50%,
      transparent 50%
    ),
    url("../../../public/img/h3.png");
  background-size: cover;
  background-position: top;
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
    border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    color: inherit;
  }

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
  margin-top: 2rem;
  width: 90%;
  cursor: pointer;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgb(18, 18, 126);
  transition: all 0.3s;
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
  background-color: purple;
  color: white;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>