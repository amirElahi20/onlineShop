<template>
  <div>
    <ul class="sub-items">
      <li
        class="sub-item"
        v-for="(item, index) in list"
        :key="index"
      >
      {{ list.sub_group }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "drop-down",
  props: ["list"],
  data() {
    return {
      open: false,
    };
  },
  methods: {
    openit() {
      this.open = !this.open;
    },
  },
  computed: {
    FilteredProduct() {
      return this.$store.getters.GetProducts;
    },
    GroupName() {
      return this.$store.getters.GetOptions;
    },
  },
  created() {
    this.$store.dispatch("GetProductsFromServer");
    this.$store.dispatch("GetMenuOptionsFromServer");
  },
};
</script>


<style lang="scss" scoped>
.a {
  display: block;
}
</style>