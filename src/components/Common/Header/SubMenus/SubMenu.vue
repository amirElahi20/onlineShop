<template>
  <div>
    <div class="sub-menu" :class="{ scroll: position >= 20 }">
      <ul class="ulmenu">
        <div v-for="name in GroupName" :key="name.id">
          <li v-if="name.group === null" @mouseover="index(name.id)">
            <fa class="fa-circle" icon="circle"></fa>
            <a href="#"
              >{{ name.name }}<fa class="fa-angle-left" icon="angle-left"></fa
            ></a>
          </li>
        </div>
      </ul>
      <!-- <ul class="txt-ul">
          <div class="txt-sub" v-for="name in GroupName" :key="name.id">
            <li class="item txt-sub" v-if="name.group !== null && name.group == resId">
              {{ name.name }}
            </li>
          </div>
        </ul> -->

      <div class="txt" v-if="active">
        <ul class="txt-ul" v-for="name in GroupName" :key="name.id">
          <div v-if="name.group !== null && name.group == resId">
            <li class="item">{{ name.name }}</li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["position"],
  data() {
    return {
      multimedia: "",
      Amir: false,
      resId: "",
      active: false,
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
      return this.$store.getters.GetSub;
    },
  },
  created() {
    this.$store.dispatch("GetSubFromServer");
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../styles/mixins.scss";
.txt {
  width: 980px;
  position: absolute;
  margin-right: 220px;
  min-height: 300px;
  background-color: whitesmoke;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.item {
  // z-index: 999;
  color: black;
  margin-right: 40px;
  width: 200px;
}
.txt-ul {
  list-style: none;
  // margin-right: 30px;
}
.sub-menu {
  display: flex;
  flex-direction: row;
  // border-radius: 10px;
  z-index: 999;
  background-color: rgb(202, 201, 201);
  width: 220px;
  min-height: 200px;
  position: fixed;
  margin-top: 5px;
  color: white;
}

.scroll {
  right: 1;
  transition: all 0.3s;
}
.ulmenu {
  text-decoration: none;
  list-style: none;
  padding-top: 25px;
  position: relative;
  padding-right: 0px;
}
.ulmenu li {
  padding-right: 10px;
  height: 70px;
  width: 220px;
  padding-top: 25px;
  color: white;
}
.ulmenu li:hover {
  background-color: crimson;
  transition: all 0.3s;
}
.ulmenu li a {
  color: white;
}
.ulmenu li:hover a {
  color: white;
  transition: all 0.3s;
}
.fa-angle-left {
  float: left;
  margin-left: 15px;
}
.ulmenu li .fa-circle {
  margin-left: 10px;
  font-size: 7px;
  color: crimson;
}
.ulmenu li:hover .fa-circle {
  color: white;
}
.ulmenu li a {
  color: black;
  text-decoration: none;
  margin-top: 15px;
}
</style>