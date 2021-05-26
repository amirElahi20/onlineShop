<template>
  <div>
    <div class="company">
      <ul v-for="name in GroupName" :key="name.id">
        <li v-if="name.group !== null && name.group ==resId">
          {{ name.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["resId"],
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

<style scoped lang="scss">
.company {
  // background-color: red;
  width: 1200px;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 200px;
  border-radius: 10px;
  border-top-right-radius: 0px;
  // justify-content: space-around;
  position: absolute;
  margin-right: 8px;
  opacity: 1;
  z-index: -2;

}
</style>