<template>
  <div>
    <div class="top">
      <ul>
        <li class="logo">
          <a href=""><i class="fa fa-ravelry" aria-hidden="true"></i></a>
        </li>

        <li class="call">
          <a href="">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span class="english">021640010</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
@import "../styles/mixins.scss";
.top {
  display: none;

  @include respond(phone) {
    display: block;
  }
}
ul {
  display: flex;
  justify-content: space-between;
}
.logo a {
  // background-color: red;
  // position: absolute;
  // left: 100px;
  font-size: 40px;
  color: rgb(207, 95, 42);
  padding-left: 20px;
//   position: absolute;
//   top: 20px;
//   left: 40px;
}
.call span {
  padding: 5px;
  //   position: absolute;
}
img{
    width: 140px;
    background-color: transparent;
}
.call a {
  color: rgb(207, 95, 42);
  padding-right: 20px;
  font-size: 12px;
}
.call{
    padding-top: 10px;
}
</style>