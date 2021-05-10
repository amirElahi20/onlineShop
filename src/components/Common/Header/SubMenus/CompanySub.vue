<template>
  <div>
    <div class="company">
      <ul v-for="name in GroupName" :key="name.id">
        <li>{{ name.sub_group[0] }}</li>
      </ul>
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

<style scoped>
.company {
  background-color: white;
  width: 1200px;
  height: 445px;
  position: absolute;
  top: 0;
  right: 0.5rem;
  padding-right: 200px;
  border-radius: 10px;
  border-top-right-radius: 0px;
  display:  none;
  justify-content: space-around;
  opacity: 1;
  z-index: -2;
}
.sub-menu ul li:hover .company {
  z-index: -1;
  opacity: 1;
  /* display: flex; */
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