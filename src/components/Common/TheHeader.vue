
<template>
  <div>
    <header
      class="header"
      :class="{
        layout:
          $route.path == '/register' ||
          $route.path == '/login' ||
          $route.path == '/forget' ||
          $route.name == 'resetpassword' ||
          $route.name == 'Confirm' ||
          $route.name == 'shopping',
      }"
    >
      <top-nav></top-nav>
      <the-menu></the-menu>
      <text-header></text-header>
      <responsive-header></responsive-header>
    </header>
  </div>
</template>


<script>
import TopNav from "./Header/MainMenu/TopNav.vue";
import TheMenu from "./Header/MainMenu/TheMenu";
import TextHeader from "./Header/TextHeader/TextHeader.vue";
import ResponsiveHeader from "../../responsive/ResponsiveHeader.vue";
export default {
  components: {
    TopNav,
    TheMenu,
    TextHeader,
    ResponsiveHeader,
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/mixins.scss";
.header {
  width: 100%;
  height: 75vh;
  background-image: linear-gradient(315deg, #000000 0%, #0000003a 74%),
    url("../../../public/img/Header_img.jpg");
  background-size: cover;
  background-position: center;
  position: relative;

  @include respond(phone) {
    height: 450px;
    background-size: cover;
    background-position: top;
    position: relative;
  }
}
.layout {
  display: none;
}
</style>