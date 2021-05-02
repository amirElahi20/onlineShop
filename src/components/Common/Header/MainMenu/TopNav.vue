<template>
<div>
  <top-responsive></top-responsive>
  <div class="topnav">
    <div class="container">
      <div class="right">
        <ul class="menu r">
          <li>
            <router-link to="/login" class="login" exact>ورود</router-link>
            <!-- <a class="login" href="../../../Login/LogIn.vue">ورود</a> -->
          </li>
          <li>
            <a href="#">
              <span class="english">0216400010</span>
              <i class="fa fa-phone" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="english">info@shop.gmail.com</span>
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>

      <div class="left">
        <ul class="menu l">
          <li>
            <a href=""><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href=""><i class="fa fa-telegram" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href=""><i class="fa fa-youtube" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <svg height="1" width="98%">
  <line x1="15%" y1="0" x2="85%" y2="0" style="stroke:rgb(220,220,220);stroke-width:2" />
</svg>
   
</div>
</template>

<script>
import TopResponsive from '../../../../responsive/TopResponsive.vue';


export default {
  components: { TopResponsive },
 
};
</script>

<style scoped lang="scss">
@import '../../../../styles/mixins.scss';


.topnav {
  padding-top: 20px;
  height: 100%;
  display: flex;
  // position: relative;

  @include respond(phone) {
    display: none;
  }

}

.left {
  height: 50px;
  // background-color: blue;
  // display: flex;
  // margin-right: 30%;
  // background-color: blue;
}
.right {
  height: 50px;
  // background-color: red;
}

.container {
  display: flex;
  // width :1200px ;
   margin: 0 auto;
  justify-content: space-between;
  direction: rtl;

  @include respond(tab-land){
    width: 900px;
    margin: 0 auto;
  }

   @include respond(tab-port){
    width: 590px;
    margin: 0 auto;
  }
  
}

.menu{
  display: flex;
  list-style: none;
  text-decoration: none;
  // padding-right: 30px;
  // background-color: red;
  // justify-content: flex-end;
}
.l li{
  padding-right: 10px ;
}
.r li{
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


  @include respond(tab-port){
    font-size: 11px;
  }
}
.num{
 font-family: sans-serif;
}
.email{
 font-family: sans-serif;
}
svg{
  // position: relative;

   @include respond(phone) {
    display: none;
  }
}
span{
  padding-left: 3px;
}
</style>