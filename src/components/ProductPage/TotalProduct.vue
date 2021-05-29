<template>
  <div>
    <div class="total">
      <div class="right">
        <ul>
          <li class="ul" v-for="(name, index) in GroupName" :key="index">
            <div class="title" @click="name.open = !name.open">
              {{ name.name }}<fa v-if="name.sub_group" icon="caret-down"></fa>
            </div>
            <div
              v-for="(name, array) in GroupName[index].sub_group.length"
              :key="array"
            >
              <div v-if="GroupName[index].open">
                {{ GroupName[index].sub_group[array] }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="left">
        <h2 class="header">محصولات</h2>
        <div class="row">
          <div class="box" v-for="product in FilteredProduct" :key="product.id">
            <img
              class="image"
              src="../../../public/img/giorgio-trovato-fczCr7MdE7U-unsplash.jpg"
              alt=""
            />
            <p class="paragraph">{{ product.name }}</p>
            <h5 class="cost">{{ product.show_cost }} تومان</h5>
            <a class="btn">مشاهده محصول</a>
            <p class="available" v-if="!product.available">
              کالای مورد نظر موجود نیست!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import DropDown from "./DropDown.vue";
export default {
  // components: { DropDown },
  data() {
    return {
      resId: "",
      active: false,
      name: "",
      open: true,
    };
  },
  methods: {
    titleClick(resId) {
      console.log(resId);
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
.header {
  text-align: center;
}
.ul {
  background-color: red;
  margin-top: 10px;
}

.available {
  font-size: 12px;
  margin-top: 7px;
  color: red;
  font-weight: bold;
  border-bottom: 1px solid red;
}
.title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
  padding-right: 15px;
  display: block;
  // background-color: black;
}
ul {
  text-decoration: none;
  list-style: none;
}
.sub {
  font-size: 16px;
  padding-right: 25px;
  font-weight: 200;
  display: block;
}
.total {
  // width: 200px;
  height: auto;
  // background-color: blue;
  display: flex;
  direction: rtl;
  padding: 5rem 0 5rem 0;
}
.right {
  width: 20%;
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0rem 0rem 1rem 1rem rgba(rgba(163, 158, 158, 0.514), 0.4);
}
.left {
  width: 80%;
  // background-color: pink;
  padding-right: 15px;
}
.row {
  // background-color: green;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px;
}
.box {
  background-color: white;
  text-align: center;
  padding: 15px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 10px;
  width: 210px;
  border: 1px solid rgb(138, 10, 99);
  transition: all 0.5s;
  &:hover {
    box-shadow: 0.5rem 1rem 1rem rgba(rgb(163, 158, 158), 0.5);
  }
}
.image {
  width: 180px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: orange;
}
.paragraph {
  display: block;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
}

.btn {
  display: block;
  text-align: center;
  background-color: rgb(192, 13, 138);
  padding: 5px;
  border-radius: 10px;
  font-size: 13px;
  margin-top: 10px;
  cursor: pointer;
  color: white;
  border: 1px solid rgb(192, 13, 138);
  transition: all 0.5s;
  // width: 60%;
  &:hover {
    background-color: white;
    border: 1px solid rgb(192, 13, 138);
    color: rgb(192, 13, 138);
  }
}
</style>