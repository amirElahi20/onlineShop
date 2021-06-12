<template>
  <div>
    <div class="res-header">
      <div class="container">
        <ul>
          <li>
            <a href="#"><fa class="icon icon1" icon="user"></fa>ورود</a>
          </li>
          <li>
            <a href="#"><fa class="icon icon2" icon="search"></fa>جست و جو</a>
          </li>
          <li>
            <a href="#"><fa class="icon icon3" icon="shopping-cart"></fa>سبد خرید</a>
          </li>
          <li>
            <a href="#"><fa class="icon icon4" icon="bars"></fa>دسته بندی</a>
          </li>
          <li>
            <a href="#"><fa class="icon icon5" icon="home"></fa>خانه</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
.res-header {
  height: auto;
  margin: 0 auto;
  display: none;

  @include respond(tab-port) {
    display: block;
  }
}
.icon {
  display: block;
  margin-top: 10px;
}
.icon1 {
  margin-left: 6px;
}
.icon2 {
  margin-left: 20px;
}
.icon3 {
  margin-left: 20px;
}
.icon4 {
  margin-left: 25px;
}
.icon5 {
  margin-left: 5px;
}

.container {
  width: 100%;
  // margin: 0 auto;
  background-color: rgb(36, 34, 34);
  bottom: 0;
  position: fixed;
  // position: absolute;
  z-index: 999;
  height: auto;
}
ul {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 5px;
  list-style: none;
}

a {
  color: white;
  transition: all 0.3s;
  font-size: 15px;
  // display: block;
  text-decoration: none;
}
a:hover {
  color: darkturquoise;
}
a:active {
  color: darkturquoise;
}
</style>