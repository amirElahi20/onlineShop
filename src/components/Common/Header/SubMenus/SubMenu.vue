<template>
  <div>
    <div class="sub-menu" :class="{ scroll: position >= 20 }">
      <ul class="ulmenu" v-for="name in GroupName" :key="name.id">
        <li v-if="name.group === null" @mouseover="index(name.id)">
          <fa class="fa-circle" icon="circle"></fa>
          <a href="#"
            >{{ name.name }}<fa class="fa-angle-left" icon="angle-left"></fa
          ></a>
        </li>
        <!-- <company-sub v-if="resId == name.id" :res-id="resId">
        </company-sub> -->
      </ul>
      <div class="txt" v-if="active">
        <ul v-for="name in GroupName" :key="name.id">
          <li class="item" v-if="name.group !== null && name.group == resId">
            {{ name.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import CompanySub from "./CompanySub";
export default {
  props: ["position"],
  data() {
    return {
      multimedia: "",
      Amir: false,
      resId: "",
      active:false
    };
  },
  methods: {
    mouseover() {
      this.Amir = true;
    },
    mouseleave() {
      this.Amir = false;
    },
    index(resId) {
      console.log(resId);
      this.resId = resId;
      this.active = true;
    },
   
  },
  components: {
    // CompanySub,
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
.txt {
  width: 980px;
  display: flex;
  position: absolute;
  margin-right: 220px;
  height: 300px;
  background-color:white;
}

.sub-menu {
  display: flex;
  flex-direction: column;
  // border-radius: 10px;
  z-index: 999;
  background-color: white;
  width: 220px;
  height: 300px;
  // margin-top:2rem ;
  // margin: 0 auto;
  position: fixed;
  // margin-right: 0px;
  margin-top: 5px;
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
// .r:hover .sub-menu {
//   display: block;
//   position: absolute;
//   margin-top: 5px;
//   margin-right: -8px;
//   transition: all 0.3s;
// }
// .subbox:hover .sub-menu ul {
//   display: block;
//   margin: 0px;
// }
</style>