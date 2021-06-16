<template>
  <div>
    <div class="top-single">
      <div class="note">
        <div class="lines"></div>
        <h4>خواص</h4>
        <ul class="list">
          <li>تسکین دهنده</li>
          <li>جلوگیری از سرطان</li>
          <li>کاهش کلسترول خون</li>
          <li>ضد عفونت های میکروبی</li>
          <li>مقوی وضدگاز معده</li>
          <li>نرم کننده سینه و گلو</li>
          <li>کاهش درد</li>
          <li>ضد اسپاسم</li>
          <li>آرامش بخش</li>
          <li>پاکسازی خون</li>
          <li>و ...</li>
        </ul>
      </div>
      <div class="product-box">
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
                        v-show="
                          SingleProduct.product_cost[index].pack.parent == 1
                        "
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
                        v-show="
                          SingleProduct.product_cost[index].pack.parent == 3
                        "
                        :value="index"
                      >
                        {{ SingleProduct.product_cost[index].pack.weight }} گرم
                      </option>
                    </select>
                  </div>
                </section>
                <footer class="count-box">
                  <h5>تعداد</h5>
                  <button class="count-icon plus" @click="plus">+</button>

                  <div class="input-count">{{ count }}</div>
                  <button
                    :disabled="count === 1"
                    class="count-icon minus"
                    @click="minus"
                  >
                    -
                  </button>
                </footer>

                <a
                  class="btn"
                  @click="
                    AddProductToOrder(
                      SingleProduct.product_cost[select].id,
                      SingleProduct.id
                    )
                  "
                  >افزودن به سبد خرید</a
                >
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
    </div>

    <div class="u-center-text">
      <h2 class="heading-secondary">محصولات مشابه</h2>
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
              <h5 class="similar-name">پرتقال</h5>
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
              <h5 class="similar-name">پرتقال</h5>
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
    AddProductToOrder(packId, productId) {
      console.log(packId, productId);
      const orderDetail = {
        Product: productId,
        Pack: packId,
        Amount: this.count,
      };
      this.$store.dispatch("AddProductToOrder", orderDetail);
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
$color-primary-dark: orange;
$color-primary-light: orangered;
.heading-secondary {
  font-size: 2rem;
  font-weight: 700;
  background-image: linear-gradient(
    to right,
    $color-primary-dark,
    $color-primary-light
  );
  -webkit-background-clip: text;
  display: inline-block;
  color: transparent;
  transition: all 0.3s;
}
.u-center-text {
  text-align: center;
  padding-bottom: 1rem;
  margin-top: 3rem;
}
.similar-name {
  color: black;
  padding-bottom: 5px;
}
.similar-cost {
  color: black;
  margin-bottom: 15px;
  font-size: 15px;
}
.similar-btn {
  padding: 10px 25px;
  margin-top: 15px;
  background-color: brown;
  border: 1px solid brown;
  color: white;
  font-size: 10px;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.4s;

  &:hover {
    background-color: white;
    border: 1px solid brown;
    color: brown;
  }
}
body {
  padding: 20px;
}
.carousel-all {
  display: flex;
  flex-wrap: wrap;
}
.carousel-box {
  border: 1px solid brown;
  border-radius: 10px;
  height: 350px;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
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
  border-bottom: 1px solid brown;
}
.carousel {
  width: 1200px;
  margin: 0 auto 3rem auto;
}
.carousel-total {
  left: 0px;
  position: absolute;
}
.btn {
  text-decoration: none;
  padding: 10px;
  margin-right: 8px;
  border-radius: 10px;
  background-color: brown;
  color: white;
  transition: all 0.4s;
  border: 1px solid brown;
  cursor: pointer;

  &:hover {
    background-color: orangered;
    border: 1px solid orangered;
  }
}

.count-box {
  width: 150px;
  padding: 10px;
  border-radius: 10px;
  margin-right: 33px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.input-count {
  width: 50%;
  border: 1px solid black;
  display: inline-block;
  border-radius: 10px;
}
.count-icon {
  padding:0px;
  cursor: pointer;
  border-radius: 7px;
  color: white;
  padding:2px 5px 4px 5px ;
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
  border: 1px solid brown;
  border-radius: 10px;
  // width: 40%;
  height: 650px;
  // margin: 50px auto;
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
  // text-align: right;
  text-indent: 10px;
  border-radius: 10px;
  border: 0.5px solid brown;
  display: block;
  background-image: none;
  background-color: white;
  margin-right: 35px;
  cursor: pointer;
  appearance: none;
  // text-align: center;
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
  margin-right: 0px;
  margin-top: -20px;
}
.icon2 {
  color: green;
  font-size: 30px;
  position: absolute;
  right: 50%;
  margin-top: -20px;
}
.product-img {
  display: flex;
  justify-content: center;
  margin: 30px 30px 30px 0;
}
.cost {
  font-size: 70px;
  color: orangered;
  margin-bottom: 50px;
}
.cost-cost {
  font-size: 28px;
  padding-right: 4px;
  //   z-index: 999;
  position: absolute;
  color: orangered;
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
  width: 50%;
  height: 500px;
  direction: rtl;
}
.left {
  width: 20%;
  height: 400px;
  background-color: white;
  position: absolute;
  // margin-right: 240px;
  // margin-top: 100px;
  left: 220px;
  top: 45rem;
  border-radius: 10px;
  border: 1px solid brown;
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
.top-single {
  display: flex;
  justify-content: center;
  direction: rtl;
  flex-wrap: wrap;
  padding: 30px;
  margin-left: 130px;
}
.note {
  width: 30%;
  padding: 0;
  margin-right: 50px;
  direction: rtl;
  z-index: -10;
}
.product-box {
  // background-color: red;
  width: 50%;
}
h4 {
  color: #cd0000;
  font-size: 42px;
  letter-spacing: -2px;
  text-align: right;
}
.list {
  color: #555;
  font-size: 22px;
  padding: 0 !important;
  width: 500px;
  font-family: courier, monospace;
  border: 1px solid #dedede;
}
.list li {
  list-style: none;
  border-bottom: 1px dotted #ccc;
  text-indent: 25px;
  height: auto;
  padding: 10px;
  text-transform: capitalize;
}
.list li:hover {
  background-color: #f0f0f0;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -ms-transition: all 0.2s;
  -o-transition: all 0.2s;
}
.lines {
  border-left: 1px solid #ffaa9f;
  border-right: 1px solid #ffaa9f;
  width: 2px;
  height: 495px;
  float: right;
  margin-top: 68px;
  margin-right: 40px;
  // right: 10px;
  // position: absolute;
  // top: 610px;
}
</style>