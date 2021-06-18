<template>
  <div>
    <div class="contact">
      <h1 class="call">
        <fa class="icon" icon="phone"></fa>تماس با ساکورا شاپ
      </h1>
      <svg height="1" width="100%">
        <line
          x1="80%"
          y1="0"
          x2="97%"
          y2="0"
          style="stroke: rgb(255, 255, 255); stroke-width: 10"
        />
      </svg>
      <section class="question">
        <ul class="topul">
          <li>
            <p>
              لطفا پیش از ارسال ایمیل یا تماس تلفنی ، ابتدا پرسش های متداول را
              مشاهده کنید
            </p>
          </li>
          <li><a href="" class="btn">پرسش های متداول</a></li>
        </ul>
      </section>
      <svg height="1" width="100%">
        <line
          x1="3%"
          y1="0"
          x2="97%"
          y2="0"
          style="stroke: rgb(255, 255, 255); stroke-width: 1"
        />
      </svg>
      <section class="form">
        <li
          :class="{
            invalid: v$.title.$error,
          }"
        >
          <label> موضوع</label>
          <div class="select">
            <select
              :class="{
                invalidformat: v$.title.$error,
              }"
              v-model="title"
              @input="v$.title.$touch"
              name="format"
              id="format"
            >
              <option value="" selected disabled>--انتخاب موضوع--</option>
              <option value="1">پیشنهادات</option>
              <option value="2">انتقادات</option>
              <option value="3">مدیریت</option>
              <option value="4">حسابداری</option>
              <option value="5">سایر موضوعات</option>
            </select>
          </div>
          <p v-if="v$.title.$dirty && v$.title.required.$invalid" class="alert">
            موضوع را انتخاب کنید
          </p>
        </li>

        <li
          :class="{
            invalid: v$.name.$error,
          }"
        >
          <label>نام و نام خانوادگی</label>
          <input
            @input="v$.name.$touch"
            v-model.trim="name"
            class="input"
            type="text"
          />
          <p v-if="v$.name.$dirty && v$.name.required.$invalid" class="alert">
            این فیلد نباید خالی باشد
          </p>
          <p class="alert" v-if="v$.name.persian_alpha.$invalid">
            نمیتوان عدد وارد کرد
          </p>
        </li>
        <li
          :class="{
            invalid: v$.email.$error,
          }"
        >
          <label> ایمیل</label>
          <input @input="v$.email.$touch" v-model="email" type="email" />
          <p class="alert" v-if="v$.email.$dirty && !v$.email.email.$response">
            ایمیل وارد شده معتبر نیست
          </p>
          <p class="alert" v-if="v$.email.$dirty && v$.email.required.$invalid">
            این فیلد نباید خالی بماند
          </p>
        </li>
        <li
          :class="{
            invalid: v$.phone.$error,
          }"
        >
          <label>تلفن تماس</label>
          <input @input="v$.phone.$touch" v-model="phone" type="text" />
          <p v-if="v$.phone.$dirty && v$.phone.required.$invalid" class="alert">
            این فیلد نباید خالی بماند
          </p>
          <p
            v-if="v$.phone.$dirty && !v$.phone.numeric.$response"
            class="alert"
          >
            فقط شماره تماس وارد کنید
          </p>
          <p
            v-if="v$.phone.$dirty && !v$.phone.minLength.$response"
            class="alert"
          >
            شماره تماس نباید کمتر از 11 رقم باشد
          </p>
          <p
            v-if="v$.phone.$dirty && !v$.phone.maxLength.$response"
            class="alert"
          >
            شماره تماس نمیتواند بیشتر از 11 رقم باشد
          </p>
        </li>
        <li
          :class="{
            invalidtext: v$.body.$error,
          }"
        >
          <label>متن پیام</label>
          <textarea
            @input="v$.body.$touch"
            v-model="body"
            class="message"
            rows="10"
            cols="50"
            autofocus
          ></textarea>
          <p
            v-if="v$.body.$dirty && !v$.body.minLength.$response"
            class="alert"
          >
            نویسه باید بیشتر از 30 حرف باشد
          </p>
          <p v-if="v$.body.$dirty && v$.body.required.$invalid" class="alert">
            این فیلد نباید خالی باشد
          </p>
        </li>
        <button @click="SendRequestToServer">ارسال پیام</button>
      </section>

      <svg height="1" width="100%">
        <line
          x1="3%"
          y1="0"
          x2="97%"
          y2="0"
          style="stroke: rgb(255, 255, 255); stroke-width: 1"
        />
      </svg>

      <section class="bottom">
        <div class="last">
          <ul class="contactul">
            <li class="li">
              <fa class="icon icon1" icon="phone"></fa>شماره تماس ما
              <span>0214557896</span>
            </li>
            <li class="li">
              <fa class="icon icon1" icon="envelope"></fa>ایمیل ما
              <span class="english">info@gmail.com</span>
            </li>
            <li class="li">
              <fa class="icon icon1" icon="clock"></fa>پاسخگویی 24 ساعته و 7 روز
              هفته
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { useToast } from "vue-toastification";
import {
  required,
  numeric,
  email,
  not,
  minLength,
  maxLength,
} from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useVuelidate(),
      toast: useToast(),
      title: "",
      name: "",
      email: "",
      phone: "",
      body: "",
    };
  },
  validations() {
    return {
      title: {
        required,
      },
      name: {
        persian_alpha: not(numeric),
        required,
      },
      email: {
        email,
        required,
      },
      phone: {
        numeric,
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      body: {
        required,
        minLength: minLength(30),
      },
    };
  },
  methods: {
    SendRequestToServer() {
      this.v$.$validate();
      if (!this.v$.$error) {
        const request = {
          title: this.title,
          name: this.name,
          phone: this.phone,
          email: this.email,
          body: this.body,
        };
        axios
          .post(
            "https://asha4f.pythonanywhere.com/site_model/v1/contact_us/",
            request
          )

          .then((response) => {
            console.log(response);
            this.toast.success("پیام شما با موفقیت ارسال شد");
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.invalidtext textarea {
  border: 1px solid red;
}
.invalidtext label {
  color: red;
}
.invalid input {
  border: 1px solid red !important;
}
.invalid label {
  color: red;
}
.invalidformat {
  border: 1px solid red !important;
}
.contact {
  width: 65%;
  background-color: whitesmoke;
  border-radius: 10px;
  border: 1px solid black;
  margin: 2rem auto;
  margin-bottom: 5rem;
  border-radius: 50px;
}
.alert {
  color: red;
  font-size: 12px;
  font-weight: bold;
}
#format {
  width: 88%;
  // text-indent: 10px;
  height: 40px;
  text-align: right;
  text-indent: 10px;
  border-radius: 10px;
  // border: 0.5px solid orangered;
  display: block;
  background-image: none;
  background-color: white;
  appearance: none;
  outline: none;
  font-family: "BYekan";
}
.contactul {
  direction: rtl;
}
.last {
  // text-align: center;
  margin-right: 40%;
  padding: 3rem 0 3rem 0;
}
.li {
  margin-top: 10px;
}
li {
  text-decoration: none;
  list-style: none;
}
.question {
  margin-top: 2rem;
}
.call {
  direction: rtl;
  padding: 30px 30px 0 0;
  font-size: 18px;
  //   font-weight: 400;
}
.icon {
  margin-left: 5px;
}
.topul {
  display: flex;
  justify-content: space-between;
  direction: rtl;
  margin-bottom: 1rem;
  padding: 0 30px;
}

.btn {
  background-color: orangered;
  color: white;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s;
  text-decoration: none;
  border: 1px solid orangered;

  &:hover {
    border: 1px solid orangered;
    color: orangered;
    background-color: white;
  }
}
.map {
  width: 458px;
  border-radius: 10px;
}
.form {
  display: grid;
  direction: rtl;
  // grid-template-columns: repeat(2, 500px);
  grid-template-rows: repeat(2, 100px);
   grid-template-columns: repeat(auto-fill, minmax(350px, 4fr));
  margin-right: 30px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.icon1 {
  font-size: 20px;
  margin-left: 10px;
}
input {
  // padding: 8px 155px;
  // position: absolute;
  width: 88%;
  text-indent: 10px;
  height: 40%;
  text-align: right;
  border-radius: 10px;
  border: 0.5px solid rgb(138, 10, 99);
  display: block;
}

.massege {
  width: 800px;
}
textarea {
  display: block;
  resize: none;
  text-indent: 10px;
  width: 88%;
  border-radius: 10px;
  border: 0.5px solid rgb(138, 10, 99);
  text-indent: 10px;
  border: 1px solid rgb(138, 10, 99);
  outline: none;
  background-color: transparent;
  font-family: "BYekan";
  background-color: white;
}
button {
  width: 30%;
  height: 20%;
  margin-right: 56%;
  margin-top: 35%;
  border-radius: 5px;
  border: 1px solid gold;
  color: black;
  background-color: gold;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: white;
    border: 1px solid green;
    background-color: green;
  }
}
.info {
  display: flex;
  direction: rtl;
  margin-top: 2rem;
  padding: 30px;
  justify-content: space-between;
}
.right {
  width: 40%;
}
.left {
  width: 50%;
}
.box {
  margin-bottom: 3rem;
}
.box:last-child {
  margin-bottom: 0;
}
</style>