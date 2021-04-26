<template>
  <div>
    <div class="sub-menu" :class="{ scroll: position >= 20 }">
      <!-- <transition name="fadein"> -->
      <ul>
        <li class="computers">
          <i class="fa fa-circle" aria-hidden="true"></i>
          <a href="#"
            >کامپیوتر<i class="fa fa-angle-left" aria-hidden="true"></i
          ></a>
          <computer-sub></computer-sub>
        </li>
        <li>
          <i class="fa fa-circle" aria-hidden="true"></i>
          <a href="#"
            >تجهیزات شبکه<i class="fa fa-angle-left" aria-hidden="true"></i
          ></a>
          <network-sub></network-sub>
        </li>
        <li>
          <i class="fa fa-circle" aria-hidden="true"></i>
          <a href="#"
            >صوتی-تصویری<i class="fa fa-angle-left" aria-hidden="true"></i
          ></a>
          <multimedia-sub></multimedia-sub>
        </li>
        <li>
          <i class="fa fa-circle" aria-hidden="true"></i>
          <a href="#"
            >لپ تاپ و تبلت<i class="fa fa-angle-left" aria-hidden="true"></i
          ></a>
          <laptop-sub></laptop-sub>
        </li>
        <li>
          <i class="fa fa-circle" aria-hidden="true"></i>
          <a href="#"
            >ماشین های اداری<i class="fa fa-angle-left" aria-hidden="true"></i
          ></a>
          <company-sub></company-sub>
        </li>
      </ul>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
import ComputerSub from "./ComputerSub";
import MultimediaSub from "./MultimediaSub.vue";
import NetworkSub from "./NetworkSub";
import LaptopSub from "./LaptopSub";
import CompanySub from "./CompanySub";
export default {
  props: ["position"],
  data() {
    return {};
  },
  components: {
    ComputerSub,
    NetworkSub,
    MultimediaSub,
    LaptopSub,
    CompanySub,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../styles/mixins.scss";

.sub-menu {
  display: none;
  // width: 200px;
  background-color: red;
  position: absolute;
  height: auto;
  border-radius: 10px;
  background-color: white;
  z-index: 999;
  // right:1;
  // text-align: center;
  // margin: 100rem;
  // right:10.44em;
  // margin-right: 200px;
  // position:absolute;
  // padding-top: -100px;
}
.scroll {
  right: 1;
  // top: -15px;
  transition: all 0.3s;
}
.sub-menu ul {
  text-decoration: none;
  list-style: none;
  padding-top: 25px;
  position: relative;
  padding-right: 0px;
}
.sub-menu ul li {
  padding-right: 10px;
  height: 70px;
  width: 220px;
  padding-top: 25px;
}
.sub-menu ul li:hover {
  background-color: crimson;
  transition: all 0.3s;
  // border-radius: 5px;
  // border-bottom-right-radius: 5px;
}
.sub-menu ul li:last-child:hover {
  border-bottom-right-radius: 8px;
}
.sub-menu ul li:hover a {
  color: white;
  transition: all 0.3s;
}
.sub-menu ul li .fa-angle-left {
  float: left;
  padding-left: 15px;
}
.sub-menu ul li .fa-circle {
  margin-left: 10px;
  font-size: 7px;
  color: crimson;
}
.sub-menu ul li:hover .fa-circle {
  color: white;
}
.sub-menu ul li a {
  color: black;
  text-decoration: none;
  margin-top: 15px;
}
.r:hover .sub-menu {
  display: block;
  position: absolute;
  margin-top: 5px;
  margin-right: -8px;
  transition: all 0.3s;
}
.subbox:hover .sub-menu ul {
  display: block;
  margin: 0px;
}
</style>