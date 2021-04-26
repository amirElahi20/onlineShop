<template>
<!-- <top-responsive></top-responsive> -->
  <the-header></the-header>
  <main-content></main-content>
  <!-- <log-in></log-in> -->
  <!-- <responsive-header></responsive-header> -->
  
</template>

<script>
import TheHeader from "./components/Common/TheHeader.vue";
import MainContent from "./components/Content/MainContent.vue";
// import LogIn from "./components/Login/LogIn.vue";
// import ResponsiveHeader from './responsive/ResponsiveHeader.vue'
// import TopResponsive from './responsive/TopResponsive.vue';

export default {
  components: {
    TheHeader,
    MainContent,
    // TopResponsive
    // LogIn,
    // ResponsiveHeader,
  },
};
</script>

<style lang="scss">
@import '../src/styles/mixins.scss';
@font-face {
  font-family: "BYekan";
  src: url("../public/fonts/BYekan-webfont.eot") format("eot"),
    url("../public/fonts/BYekan-webfont.woff") format("woff"),
    url("../public/fonts/BYekan-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "BYekan";
  width: 100%;

     @include respond(tab-port){
       padding: 0;
     }
}
.english {
  font-family: sans-serif;
}
.container {
  width: 1200px;
}
input {
  font-family: "BYekan";
  outline: none;
}
button {
  font-family: "BYekan";
}
</style>
