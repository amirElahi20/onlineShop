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
              <h1 class="cost">
                {{ SingleProduct.product_cost[select].cost }}
              </h1>
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
            <label class="label">حجم بسته را انتخاب کنید</label>
            <section class="package">
              <div v-if="glass" class="select">
                <select v-model="select" name="format" class="format">
                  <option selected disabled>حجم شیشه ای</option>
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
                <select v-model="select" name="format" class="format">
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
            <footer class="count-box">
              <h5>تعداد</h5>
              <fa class="count-icon plus" @click="plus" icon="plus"></fa>
              <input
                class="input-count"
                :value="count"
                type="text"
                placeholder="تعداد"
              />
              <fa class="count-icon minus" @click="minus" icon="minus"></fa>
            </footer>
            <a href="#" class="btn">افزودن به سبد خرید</a>
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
    <div class="carousel">
      <carousel
        :items-to-show="5"
        :settings="settings"
        :breakpoints="breakpoints"
        class="carousel-all"
      >
        <slide v-for="slide in 10" :key="slide">
          <div class="carousel__item">
            <div class="carousel-box">
              <img
                class="slider-img"
                src="../../../public/img/mockup-graphics-enNffryKuQI-unsplash.jpg"
                alt=""
              />
              <h4 class="similar-name">پرتقال</h4>
              <p class="similar-cost">50000تومان</p>
              <a class="similar-btn" href="">مشاهده محصول</a>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      glass: true,
      envelope: false,
      select: 1,
      count: 1,
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    glassIcon() {
      this.glass = true;
      this.envelope = false;
      this.select = 0;
    },
    envelopeIcon() {
      this.envelope = true;
      this.glass = false;
      this.select = 2;
    },
    findIndex(resId) {
      console.log(resId);
    },
    plus() {
      this.count += 1;
    },
    minus() {
      this.count -= 1;
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
.similar-name{
  color: black;
  padding-bottom: 5px;
}
.similar-cost{
  color: black;
  margin-bottom: 15px;
  font-size: 15px;
}
.similar-btn{
  padding: 10px 25px;
  margin-top: 15px;
  background-color: purple;
  border: 1px solid purple;
  color: white;
  font-size: 10px;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.4s;

  &:hover{
    background-color: white;
    border: 1px solid purple;
    color: purple;
  }
}
body {
  padding: 20px;
}
.carousel-all {
  display: flex;
  flex-wrap: wrap;
}
.carousel-box{
  border: 1px solid purple;
  border-radius: 10px;
  height: 350px;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  // background-color: #642afb;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.slider-img {
  width: 200px;
  padding: 5px;
  // border-radius: 10px;
  border-bottom: 1px solid purple;
}
.carousel {
  width: 1200px;
  margin: 0 auto 10rem auto;

}
.carousel-total {
  background-color: red;
  left: 0px;
  position: absolute;
}
.btn {
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  background-color: purple;
  color: white;
  transition: all 0.4s;
  border: 1px solid purple;
  
  &:hover{
   background-color: rgb(216, 6, 216);
  }
}

.count-box {
  width: 150px;
  padding: 10px;
  border-radius: 10px;
  // border: 1px solid purple;
  margin-right: 33px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.input-count {
  width: 50%;
}
.count-icon {
  padding: 2px;
  cursor: pointer;
  border-radius: 7px;
  color: white;
}
.plus {
  background-color: green;
  border: 1px solid green;
  margin-left: 5px;
}
.minus {
  background-color: red;
  border: 1px solid red;
  margin-right: 5px;
}
.box {
  background-color: white;
  border: 1px solid purple;
  border-radius: 10px;
  width: 40%;
  height: 650px;
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
.format {
  width: 150px;
  height: 40px;
  text-align: right;
  text-indent: 45px;
  border-radius: 10px;
  border: 0.5px solid rgb(138, 10, 99);
  display: block;
  background-image: none;
  background-color: white;
  margin-right: 35px;
  cursor: pointer;
  appearance: none;
  text-align: center;
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
  margin-top: 1rem;
}
</style>