
<template>
  <!-- *******************************************************************************************************
********************  This template includes Media icons Link like Telegram , whatsapp *********************
**********************and instagram . Also you can find the login , register and log out button here *******
************************************************************************************************************ -->
  <div>
    <top-responsive></top-responsive>
    <div class="topnav">
      <div class="container">
        <div class="right">
          <ul class="menu r">
            <li v-if="!IsUserAuthenticated">
              <router-link to="/login" class="login" exact>ورود</router-link>
              <router-link to="/register" class="login" exact
                >ثبت نام</router-link
              >
            </li>

            <li v-else>
              <a @click="client" href="#" class="login"
                ><span class="tit english"
                  >{{ UserName.username
                  }}<fa v-if="!subClient" class="caret" icon="caret-down"></fa
                  ><fa
                    v-if="subClient"
                    class="caret"
                    icon="caret-up"
                  ></fa></span
              ></a>

              <router-link @click="SignOut" to="/" class="login" exact
                >خروج</router-link
              >
              <div class="sub-client" v-if="subClient">
                <ul>
                  <li><router-link to="/clientaccount">مشاهده حساب کاربری</router-link></li>
                  <li><router-link to="/editaccount">ویرایش حساب کاربری</router-link></li>
                  <li><router-link to="/changepassword">تغییر رمز عبور</router-link></li>
                  <li><router-link to="/purches">فاکتورهای من</router-link></li>
                </ul>
              </div>
            </li>
            <li>
              <span class="english">0216400010</span>
              <fa class="fa" icon="phone"></fa>
            </li>
            <li>
              <span class="english">info@shop.gmail.com</span>
              <fa class="fa" icon="envelope"></fa>
            </li>
          </ul>
        </div>

        <div class="left">
          <ul class="menu l">
            <li>
              <a href="#">
                <fa class="whatsapp" :icon="['fab', 'whatsapp']"></fa
              ></a>
            </li>
            <li>
              <a href="">
                <fa class="telegram" :icon="['fab', 'telegram']"></fa>
              </a>
            </li>
            <li>
              <a href="">
                <fa class="instagram" :icon="['fab', 'instagram']"></fa>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <svg height="1" width="98%">
      <line
        x1="10%"
        y1="0"
        x2="92%"
        y2="0"
        style="stroke: rgb(220, 220, 220); stroke-width: 2"
      />
    </svg>
  </div>
</template>

<script>
import TopResponsive from "../../../../responsive/TopResponsive.vue";

export default {
  data() {
    return {
      subClient: false,
    };
  },
  components: { TopResponsive },
  computed: {
    IsUserAuthenticated() {
      return this.$store.getters.getAuth;
    },
    UserName() {
      return this.$store.getters.getUserName;
    },
  },
  methods: {
    checkForLogin() {
      this.$store.dispatch("CheckForLogin");
    },
    SignOut() {
      this.$store.dispatch("removeToken");
    },
    client() {
      this.subClient = !this.subClient;
    },
  },
  created() {
    this.checkForLogin();
  },
};
</script>

<style scoped lang="scss">
@import "../../../../styles/mixins.scss";
.sub-client {
  background-color: white;
  z-index: 999;
  position: absolute;
  margin-top: 10px;
  border-radius: 10px;
  // margin-right:100px;
  padding: 15px;
}
.sub-client ul {
  list-style: none;
  color: black;
}
.sub-client ul li {
  margin-top: 10px;
}
.sub-client ul li a {
  color: black;
  transition: all 0.4s;
  &:hover {
    color: orange;
  }
}
.caret {
  margin-right: 10px;
  margin-left: -15px;
}
.topnav {
  padding-top: 20px;
  height: 100%;
  display: flex;
  // background-color: red;
  // height: 100vh;

  @include respond(phone) {
    display: none;
  }
  @include respond(tab-port) {
    font-size: 10px;
  }
}

.left {
  height: 50px;
}
.right {
  height: 50px;
}

.container {
  display: flex;

  margin: 0 auto;
  justify-content: space-between;
  direction: rtl;

  @include respond(tab-land) {
    width: 900px;
    margin: 0 auto;
  }

  @include respond(tab-port) {
    width: 700px;
    margin: 0 auto;
  }
}
.whatsapp {
  transition: all 0.3s;
  // font-size: 20px;
  border-radius: 5px;
  height: 30px;
  width: 30px;

  @include respond(tab-port) {
    width: 20px;
    height: 20px;
  }
}
.whatsapp:hover {
  background: green;
  padding: 0px;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  color: white;
  // border-radius: 100%;
}

.telegram {
  transition: all 0.3s;
  font-size: 30px;
  @include respond(tab-port) {
    width: 20px;
    height: 20px;
  }
}
.telegram:hover {
  color: #2693c9;
  background-color: white;
  border-radius: 40px;
}
.instagram::before {
  opacity: 0;
}
.instagram {
  border-radius: 10px;
  height: 30px;
  width: 30px;
  font-size: 30px;
  @include respond(tab-port) {
    width: 20px;
    height: 20px;
  }
}
.instagram:hover {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}

.twitter {
  transition: all 0.3s;
}
.twitter:hover {
  color: #6e8deb;
}
.facebook {
  transition: all 0.3s;
}
.facebook:hover {
  color: #0e4b69;
  background-color: white;
  border-radius: 40px;
}

.menu {
  display: flex;
  list-style: none;
  text-decoration: none;
}
.l li {
  padding-right: 10px;
}
.r li {
  padding-left: 30px;
}
.login {
  color: whitesmoke;
  background-color: orange;
  cursor: pointer;
  text-decoration: none;
  padding: 8px 25px;
  border-radius: 15px;
  // position: relative;
  border: 1px solid gold;
  margin-top: -10px;
  margin-left: 10px;
  @include respond(tab-port) {
    font-size: 10px;
  }
}
.login:active {
  color: black;
}
.login:hover {
  color: black;
  border: 1px solid gold;
  background: white;
  transition: all 0.5s;

  &:hover .tit {
    color: black;
    transition: all 0.5s;
  }
}
span {
  color: white;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-weight: 400;
  font-size: 17px;
}
.fa {
  text-decoration: none;
  color: white;
  font-weight: 400;
  font-size: 17px;
  // padding: 0px;

  @include respond(tab-port) {
    font-size: 11px;
  }
}
.num {
  font-family: sans-serif;
}
.email {
  font-family: sans-serif;
}
svg {
  @include respond(phone) {
    display: none;
  }
}
span {
  padding-left: 3px;
}
</style>