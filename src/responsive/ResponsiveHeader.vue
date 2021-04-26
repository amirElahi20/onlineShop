<template>
  <div>
    <div class="res-header">
      <div class="container">
        <ul>
          <li>
            <a href="#"><i class="fa fa-user" aria-hidden="true"></i>ورود</a>
          </li>
          <li>
            <a href="#"><i class="fa fa-search"></i>جست و جو</a>
          </li>
          <li>
            <a href="#"><i class="fa fa-shopping-cart"></i>سبد خرید</a>
          </li>
          <li>
            <a href="#"
              ><i class="fa fa-bars" aria-hidden="true"></i>دسته بندی</a
            >
          </li>
          <li>
            <a href="#"><i class="fa fa-home"></i>خانه</a>
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
//   width: 600px;
  height: auto;
  margin: 0 auto;
  display: none;

  @include respond(tab-port) {
    display: block;
  }
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
  padding-bottom:5px;
  // margin: 0 auto;
}
li {
  text-align: center;
}
i {
  display: block;
}
a {
  color: white;
  transition: all 0.3s;
  font-size: 15px;
}
a:hover {
  color: darkturquoise;
}
a:active {
  color: darkturquoise;
}
</style>