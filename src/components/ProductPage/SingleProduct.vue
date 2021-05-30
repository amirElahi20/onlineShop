<template>
  <div>
    <div class="singleproduct">
      <div class="box">
        <div class="right">
          <header class="header">
            <section class="product">
              <h2 class="product-name">{{ SingleProduct.name }}</h2>
              <h5 class="product-code">کد محصول 505</h5>
            </section>
            <div>
              <h1 class="cost">{{ SingleProduct.product_cost[selected].cost }}</h1>
            </div>
            <span class="cost-cost">تومان</span>
            <h5>نوع بسته بندی را انتخاب کنید</h5>
            <main class="product-img">
              <img
                class="icon-img"
                src="../../../public/img/envelope.png"
                alt=""
                @click="envelopeIcon"
              /><fa v-if="glass" class="icon" icon="check"></fa>
              <img
                class="icon-img"
                src="../../../public/img/can.png"
                alt=""
                @click="glassIcon"
              /><fa v-if="envelope" class="icon2" icon="check"></fa>
            </main>
            <section class="package">
              <label class="label">حجم بسته را انتخاب کنید</label>
              <!-- <div v-if="envelope" class="select">
                <select name="format" id="format">
                  <option selected disabled>حجم بسته پاکتی</option>
                  <option value="">200گرم</option>
                  <option value="">500گرم</option>
                  <option value="">700گرم</option>
                </select>
              </div> -->
              <div v-if="glass" class="select">
                <select v-model="selected" name="format" id="format">
                  <option selected disabled>حجم بسته شیشه ای</option>
                  <option
                    v-for="(cost, index) in SingleProduct.product_cost"
                    :key="index"
                    v-show="SingleProduct.product_cost[index].pack.parent == 1"
                    :value="index"
                  >
                    {{ SingleProduct.product_cost[index].pack.weight }} گرم
                  </option>
                </select>
              </div>
              <div v-if="envelope" class="select">
               <select v-model="selected" name="format" id="format">
                  <option selected disabled>حجم بسته پاکتی</option>
                  <option
                    v-for="(cost, index) in SingleProduct.product_cost"
                    :key="index"
                    v-show="SingleProduct.product_cost[index].pack.parent == 2"
                    :value="index"
                  >
                    {{ SingleProduct.product_cost[index].pack.weight }} گرم
                  </option>
                </select>
              </div>
            </section>
          </header>
        </div>
        <div class="left">
          <img
            class="big-img"
            src="../../../public/img/orange-web.jpg"
            alt=""
          />
          <div class="images">
            <img
              class="small-img"
              src="../../../public/img/orange-web.jpg"
              alt=""
            />
            <img
              class="small-img"
              src="../../../public/img/orange-web.jpg"
              alt=""
            />
            <img
              class="small-img"
              src="../../../public/img/orange-web.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      glass: true,
      envelope: false,
      selected : 1,
    };
  },
  methods: {
    glassIcon() {
      this.glass = !this.glass;
      this.envelope = false;
    },
    envelopeIcon() {
      this.envelope = !this.envelope;
      this.glass = false;
    },
    findIndex(resId) {
      console.log(resId);
    },
  },
  computed: {
    SingleProduct() {
      return this.$store.getters.GetSingleProduct;
    },
  },
  created() {
    this.$store.dispatch("GetSingleProductFromServer", {
      name: this.$route.params.name,
    });
  },
};
</script>

<style lang="scss" scoped>
.box {
  background-color: white;
  border: 1px solid purple;
  border-radius: 10px;
  width: 40%;
  height: 600px;
  margin: 50px auto;
  direction: rtl;
  display: flex;
  box-shadow: 0rem 0rem 1rem 1rem rgba(rgba(163, 158, 158, 0.514), 0.4);
}
.product-name {
  font-size: 30px;
  margin-top: 50px;
}
.product {
  margin-bottom: 1rem;
}
#format{
//   width: 80%;
  // text-indent: 10px;
  height: 40px;
  text-align: right;
  text-indent: 10px;
  border-radius: 10px;
  border: 0.5px solid rgb(138, 10, 99);
  display: block;
  background-image: none;
  background-color: white;
  margin-right: 50px;
//   appearance: none;
  outline: none;
  font-family: "BYekan";
}
.product-code {
  font-size: 12px;
  color: grey;
}
.icon {
  color: green;
  font-size: 30px;
  position: absolute;
  margin-right: 9px;
  margin-top: -20px;
}
.icon2 {
  color: green;
  font-size: 30px;
  position: absolute;
  margin-right: -75px;
  margin-top: -20px;
}
.product-img {
  display: flex;
  justify-content: center;
  //   background-color: red;
  margin: 30px 30px 30px 0;
}
.cost {
  font-size: 70px;
  color: purple;
  //   background-color: red;
  margin-bottom: 50px;
}
.cost-cost {
  font-size: 28px;
  padding-right: 4px;
//   z-index: 999;
  position: absolute;
  color: purple;
  //   background-color: yellow;
  margin-top: -170px;
  transform: rotate(-30deg);
  margin-right: 70px;
}
.header {
  text-align: center;
  margin-right: 40%;
  // direction: rtl;
}
.icon-img {
  cursor: pointer;
}
.right {
  width: 60%;
  height: 500px;
  direction: rtl;
}
.left {
  width: 20%;
  height: 400px;
  background-color: white;
  position: absolute;
  margin-right: 450px;
  margin-top: 100px;
  border-radius: 10px;
  border: 1px solid purple;
  box-shadow: 0rem 0rem 1rem 1rem rgba(rgba(163, 158, 158, 0.514), 0.4);
}
.big-img {
  width: 100%;
  height: 64%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.images {
  display: flex;
  // background-color: green;
  width: 100%;
  height: 136px;
  justify-content: space-evenly;
  align-items: center;
}
.small-img {
  width: 80px;
  height: 90px;
  border-radius: 10px;
  border: 1px solid black;
}
.icon-img {
  width: 50px;
  margin-left: 30px;
}
.package {
  padding-top: 1rem;
}

</style>