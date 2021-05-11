<template>
  <div>
    <div class="log">
      <section class="login">
        <div class="row">
          <div class="form">
            <div class="form__login">
              <form class="list" @submit.prevent="submit">
                <h2 class="topform">ورود</h2>
                <div class="list__group">
                  <label for="name" class="list__label">نام کاربری</label>
                  <input
                    type="text"
                    class="list__input"
                    placeholder="اسمتو بنویس "
                    id="name"
                    v-model="username"
                    autofocus="autofocus"
                    maxlength="100"
                    required
                  />
                </div>
                <div class="list__group">
                  <label for="name" class="list__label">رمز عبور</label>
                  <input
                    type="password"
                    class="list__input"
                    placeholder="رمز عبورتو وارد کن"
                    id="password"
                    v-model="password"
                    required
                  />
                </div>
                <button class="submit-btn" type="submit">ورود</button>
              </form>
              <h5 class="txt">
                عضو نیستید؟؟
                <router-link class="router" to="/register"
                  >پس ثبت نام کنید</router-link
                >
              </h5>
              <router-link class="back-btn" to="/">بازگشت</router-link>
              <h5 class="txt">
                <router-link class="router forget" to="/"
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
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    async submit() {
      await fetch(
        "https://onshop321.herokuapp.com/accounts/v1/auth/obtain_token/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(this.$data),

        }
      );
      console.log(this.$data);
    },
  },
};
</script>


<style lang="scss" scoped>
.router {
  text-decoration: none;
  color: #ff4e00;
}
.forget {
  font-size: 15px;
  text-align: center;
  color: #ff4e00;
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
  //   background-color: #2d3436;
  background-size: cover;
  background-position: center;
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
    border-bottom: 3px solid transparent;
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
  background-color: #ff4e00;
  border: 1px solid #ff4e00;
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
  background-color:#ec9f05;
  color: white;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>