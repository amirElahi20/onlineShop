<template>
  <div>
    <div v-for="mypack in packageProduct" :key="mypack.id">
      <div v-if="mypack.parent == !null">
        <span class="cost"><span> تومان</span></span>
        <h6 class="txt">{{mypack.title}} <span>{{ mypack.weight }}</span> گرم</h6>
      </div>
      <div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    FilteredProduct() {
      return this.$store.getters.GetProducts;
    },
    packageProduct() {
      return this.$store.getters.GetPack;
    },
  },
  created() {
    this.$store.dispatch("GetProductsFromServer");
    this.$store.dispatch("GetPackFromServer");
  },
};
</script>


<style lang="scss" scoped>
.cost {
  display: block;
  background-color: whitesmoke;
  width: 170px;
  padding: 10px;
  // border: 1px solid black;
  color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.txt {
  margin: 5px 0 15px 0;
  font-size: 15px;
}
</style>