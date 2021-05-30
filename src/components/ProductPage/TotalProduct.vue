<template>
  <div>
    <div class="total">
      <div class="right">
        <h3 class="header">دسته بندی محصولات</h3>
        <svg height="1" width="100%">
          <line
            x1="3%"
            y1="0"
            x2="97%"
            y2="0"
            style="stroke: rgb(138, 10, 99); stroke-width: 0.7"
          />
        </svg>
        <ul>
          <li class="ul" v-for="(name, index) in GroupName" :key="index">
            <div class="title" @click="name.open = !name.open">
              {{ name.name
              }}<fa
                class="title-icon"
                v-if="name.sub_group"
                icon="caret-down"
              ></fa>
            </div>
            <div
              v-for="(name, array) in GroupName[index].sub_group.length"
              :key="array"
            >
              <div class="sub-title" v-if="GroupName[index].open">
                <fa class="sub-icon" icon="circle"></fa
                >{{ GroupName[index].sub_group[array] }}
              </div>
            </div>
            <svg height="1" width="100%">
              <line
                x1="3%"
                y1="0"
                x2="97%"
                y2="0"
                style="stroke: rgb(138, 10, 99); stroke-width: 0.3"
              />
            </svg>
          </li>
        </ul>
      </div>
      <div class="left">
        <h2 class="header">محصولات</h2>
        <div class="row">
          <div class="box" v-for="product in FilteredProduct" :key="product.id">
            <img
              class="image" :class="{blurimg : !product.available}"
              src="../../../public/img/giorgio-trovato-fczCr7MdE7U-unsplash.jpg"
              alt=""
            />
            <p class="paragraph">{{ product.name }}</p>
            <h5 class="cost">{{ product.show_cost }} تومان</h5>
            <router-link exact :to="{name:'SingleProduct' , params:{name:product.slug}}"
             class="btn">مشاهده محصول</router-link>
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
.header {
  text-align: center;
}

.sub-title {
  margin-right: 40px;
  margin-top: 10px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.3);
    color: rgb(187, 10, 107);
  }
}
.sub-title:last-child {
  margin-bottom: 20px;
}
.available {
  font-size: 12px;
  margin-top: 7px;
  color: red;
  font-weight: bold;
  border-bottom: 1px solid red;
  position: absolute;
  margin-top: -220px;
  margin-right: 40px;
   transform: rotate(-30deg);
}
.sub-icon {
  font-size: 7px;
  margin-left: 5px;
  color: purple;
}
.title-icon {
  font-size: 15px;
  margin-right: 5px;
  color: purple;
}
.title {
  font-size: 17px;
  font-weight: 800;
  margin-right: 20px;
  margin-top: 20px;
  display: inline-block;
  cursor: pointer;
  // background-color: rgb(202, 199, 199);
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
  width: 250px;
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
  margin-right: 90px;
}
.box {
  background-color: white;
  text-align: center;
  padding: 15px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 10px;
  width: 240px;
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
.blurimg {
  filter: blur(7px);
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

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.4s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 0.4s;
}

.fade-leave-to {
  opacity: 0;
}
</style>