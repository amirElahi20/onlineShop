<template>
  <div>
    <div class="sub-menu" :class="{ scroll: position >= 20 }">
      <ul>
        <li class="computers">
          <fa class="fa-circle" icon="circle"></fa>
          <a href="#"
            >{{ GroupName[2] }}<fa class="fa-angle-left" icon="angle-left"></fa
          ></a>
          <multimedia-sub></multimedia-sub>
        </li>
        <li>
          <fa class="fa-circle" icon="circle"></fa>
          <a href="#"
            >{{ GroupName[3] }}<fa class="fa-angle-left" icon="angle-left"></fa
          ></a>
          <computer-sub></computer-sub>
        </li>
        <li>
          <fa class="fa-circle" icon="circle"></fa>
          <a href="#"
            >{{ GroupName[0] }}<fa class="fa-angle-left" icon="angle-left"></fa
          ></a>
          <laptop-sub></laptop-sub>
        </li>
        <li>
          <fa class="fa-circle" icon="circle"></fa>
          <a href="#"
            >{{ GroupName[4] }}<fa class="fa-angle-left" icon="angle-left"></fa
          ></a>
          <network-sub></network-sub>
        </li>
        <li>
          <fa class="fa-circle" icon="circle"></fa>
          <a href="#"
            >{{ GroupName[1] }}<fa class="fa-angle-left" icon="angle-left"></fa
          ></a>
        </li>
        <company-sub></company-sub>
      </ul>
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
    return {
      multimedia: "",
      Amir: false,
    };
  },
  methods: {
    mouseover() {
      this.Amir = true;
    },
    mouseleave() {
      this.Amir = false;
    },
  },
  components: {
    ComputerSub,
    NetworkSub,
    MultimediaSub,
    LaptopSub,
    CompanySub,
  },
  computed: {
    GroupName() {
      return this.$store.getters.GetOptions;
    },
  },
  created() {
    this.$store.dispatch("GetMenuOptionsFromServer");
    // this.$store.dispatch("GetSubMenuOptionsFromServer");
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../styles/mixins.scss";

.sub-menu {
  display: none;
  border-radius: 10px;
  z-index: 999;
}
.scroll {
  right: 1;
  transition: all 0.3s;
}
.sub-menu ul {
  text-decoration: none;
  list-style: none;
  padding-top: 25px;
  position: relative;
  padding-right: 8px;
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
}

.sub-menu ul li:last-child:hover {
  border-bottom-right-radius: 8px;
}
.sub-menu ul li:hover a {
  color: white;
  transition: all 0.3s;
}
.fa-angle-left {
  float: left;
  margin-left: 15px;
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