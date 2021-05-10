<template>
  <div>
    <div class="multimedia">
    <div class="company">
      <ul v-for="name in GroupName" :key="name.id">
        <li>{{ name.sub_group[0] }}</li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
    return {};
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


<style>
.multimedia {
  background-color: red;
  width: 1200px;
  min-height: 375px;
  position: absolute;
  top: 0;
  right: 0.5rem;
  border-radius: 10px;
  display: none;
  justify-content: space-around;
  z-index: -2;
  padding-right: 200px;

}
.sub-menu ul li:nth-child(2):hover .multimedia {
  z-index: -1;
  display: flex;
}
ul {
  text-decoration: none;
  list-style: none;
  padding-top: 10px;
}
.titletext {
  color: crimson;
  text-decoration: none;
}
.title {
  padding-bottom: 15px;
}
ul li {
  padding-bottom: 5px;
}
ul li a {
  text-decoration: none;
  color: black;
}
</style>