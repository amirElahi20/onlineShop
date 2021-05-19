<template>
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
              <router-link to="/login" class="login" exact> <span class="tit english">{{UserName.username}}</span> عزیز خوش آمدید</router-link>
              <router-link @click="SignOut" to="/" class="login" exact
                >خروج</router-link
              >
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
  components: { TopResponsive },
  computed:{
    IsUserAuthenticated(){
      return this.$store.getters.getAuth;
    },
    UserName(){
      return this.$store.getters.getUserName;
    }
  },
  methods:{
    checkForLogin(){
      this.$store.dispatch("CheckForLogin")
    },
    SignOut(){
      this.$store.dispatch("removeToken");
    }
  },
  created(){
    this.checkForLogin();
  }
};
</script>

<style scoped lang="scss">
@import "../../../../styles/mixins.scss";

.topnav {
  padding-top: 20px;
  height: 100%;
  display: flex;

  @include respond(phone) {
    display: none;
  }
}

.left {
  height: 50px;
  // background-color: yellow;
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
    width: 590px;
    margin: 0 auto;
  }
}
.whatsapp {
  transition: all 0.3s;
  font-size: 30px;
  // background:green;
  border-radius: 5px;
  height: 30px;
  width: 30px;
  // font-size: 30px;
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
}
.telegram:hover {
  color: #2693c9;
  background-color: white;
  border-radius: 40px;
}

.instagram {
  border-radius: 10px;
  height: 30px;
  width: 30px;

  font-size: 30px;
}
.instagram:hover {

  // border-radius: 40px;
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
  color: white;
  background: rgb(231, 31, 171);
  cursor: pointer;
  text-decoration: none;
  padding: 8px 25px;
  border-radius: 15px;
  // position: relative;
  border: 1px solid white;
  margin-top: -10px;
  margin-left: 10px;
  // position: absolute;
  // top: 20px;
}
.login:active {
  color: black;
}
.login:hover {
  color: rgb(231, 31, 171);
  border: 1px solid rgb(231, 31, 171);
  background: white;
  transition: all 0.5s;

  
  &:hover .tit{
    color: rgb(231, 31, 171);
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