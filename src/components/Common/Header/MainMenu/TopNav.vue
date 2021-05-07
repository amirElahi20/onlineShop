<template>
  <div>
    <top-responsive></top-responsive>
    <div class="topnav">
      <div class="container">
        <div class="right">
          <ul class="menu r">
            <li>
              <router-link to="/login" class="login" exact>ورود</router-link>
            </li>
            <li>
              <a href="#">
                <span class="english">0216400010</span>
                <fa icon="phone"></fa>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="english">info@shop.gmail.com</span>
                <fa icon="envelope"></fa>
              </a>
            </li>
          </ul>
        </div>

        <div class="left">
          <ul class="menu l">
            <li>
              <a href=""
                ><fa class="whatsapp" :icon="['fab', 'whatsapp']"></fa
              ></a>
            </li>
            <li>
              <a href=""
                ><fa class="youtube" :icon="['fab', 'youtube']"></fa
              ></a>
            </li>
            <li>
              <a href=""
                ><fa class="telegram" :icon="['fab', 'telegram']"></fa
              ></a>
            </li>
            <li>
              <a href=""
                ><fa class="instagram" :icon="['fab', 'instagram']"></fa
              ></a>
            </li>
            <li>
              <a href=""
                ><fa class="twitter" :icon="['fab', 'twitter']"></fa
              ></a>
            </li>
            <li>
              <a href=""
                ><fa class="facebook" :icon="['fab', 'facebook']"></fa
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <svg height="1" width="98%">
      <line
        x1="15%"
        y1="0"
        x2="85%"
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
  // font-size: 30px;
}
.whatsapp:hover {
  color: green;
}
.youtube {
  transition: all 0.3s;
}
.youtube:hover {
  color: red;
}
.telegram {
  transition: all 0.3s;
}
.telegram:hover {
  color:#2693c9
}


.instagram{
  border-radius: 40px;
  transition: all 0.3s;
}
.instagram:hover {
  border-radius: 40px;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}
.twitter{
  transition: all 0.3s;
}
.twitter:hover{
  color: #6e8deb;
}
.facebook{
  transition: all 0.3s;
}
.facebook:hover{
  color: #0e4b69;
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
  background: crimson;
  cursor: pointer;
  text-decoration: none;
  padding: 8px 25px;
  border-radius: 15px;
  position: relative;
  border: 1px solid crimson;
}
.login:active {
  color: black;
}
.login:hover {
  color: crimson;
  border: 1px solid crimson;
  background: white;
  transition: all 0.3s;
}
a {
  text-decoration: none;
  cursor: pointer;
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