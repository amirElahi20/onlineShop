<template>
  <div>
    <div class="log">
      <section class="login">
        <div class="row">
          <div class="form">
            <div class="form__login">
              <form class="list" @submit.prevent="sendEmail">
                <h2 class="topform">فراموشی رمز</h2>
                <div class="error" v-if="error">{{ error }}</div>
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

                <button class="submit-btn" type="submit">ارسال</button>
              </form>
              <h5 class="txt">
                میتوانید
                <router-link class="router" to="/register"
                  >ثبت نام کنید</router-link
                >
              </h5>
              <router-link class="back-btn" to="/">بازگشت به صفحه اصلی</router-link>
              <h5 class="txt">
                <router-link class="router forget" to="/login"
                  >بازگشت به صفحه ورود</router-link
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
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import axios from 'axios';
export default {
  data() {
    return {
      email: "",
      visibility: "password",
      error: null,
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      email: {
        required,
        email
      },
    };
  },

  methods: {
    sendEmail(){
      axios.post('https://onshop321.herokuapp.com/accounts/v1/request_reset_email/',{
        email : this.email,
      }).then(response =>{
        console.log(response);
        alert(' لینک بازنشانی رمز به ایمیلتان ارسال شد')
      }).catch(error=>{
        console.log(error)
      })
    }
  },
};
</script>


<style lang="scss" scoped>
.router {
  text-decoration: none;
  color: #500a61;
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
  color: #500a61;
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
    url("../../../public/img/aliona-gumeniuk-Y9WTwredge0-unsplash.jpg");
  //   background-color: #2d3436;
  background-size: cover;
  background-position: right;
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