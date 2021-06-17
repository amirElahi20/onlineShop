<template>
  <div>
    <div class="carousel">
      <carousel
        :items-to-show="5"
        :settings="settings"
        :breakpoints="breakpoints"
        class="carousel-all"
      >
        <slide v-for="product in MostSellProducts" :key="product.id">
          <div class="carousel__item">
            <div class="carousel-box">
              <img
                class="slider-img"
                :class="{ blurimg: !product.available }"
                :src="product.picture[0].picture"
                :alt="product.slug"
              />

              <h4 class="similar-name">{{ product.name }}</h4>
              <p class="similar-cost">{{ product.show_cost }}تومان</p>
              <p class="available" v-if="!product.available">
                کالای مورد نظر موجود نیست!
              </p>
              <router-link
                exact
                :to="{ name: 'SingleProduct', params: { name: product.slug } }"
                class="similar-btn"
                >مشاهده محصول</router-link
              >
            </div>
          </div>
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
    <router-link class="btn" to="/products">نمایش محصولات</router-link>
    <svg class="svg" height="1" width="98%">
      <line
        x1="10%"
        y1="0"
        x2="92%"
        y2="0"
        style="stroke: rgb(255, 69, 0); stroke-width: 0.5"
      />
    </svg>
  </div>
</template>

<script>
// import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 400: {
        //   itemsToShow: 2,
        //   snapAlign: "center",
        // },
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
  computed: {
    MostSellProducts() {
      return this.$store.getters.GetMostSellProducts;
    },
  },
  created() {
    this.$store.dispatch("GetMostSellProductsFromServer");
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/mixins.scss";

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
.blurimg {
  filter: blur(4px);
}
.available {
  font-size: 12px;
  // margin-top: 7px;
  direction: rtl;
  color: red;
  font-weight: bold;
  border-bottom: 1px solid red;
  position: absolute;
  margin-top: -200px;
  margin-left: 30px;
  transform: rotate(-30deg);
}
body {
  padding: 20px;
  color: rgb(255, 69, 0);
}
.carousel-all {
  display: flex;
  flex-wrap: wrap;
}
.carousel-box {
  border: 1px solid brown;
  border-radius: 10px;
  height: 340px;
  transition: all 0.4s;
  &:hover {
    box-shadow: 0.5rem 1rem 1rem rgba(rgb(163, 158, 158), 0.5);
  }
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
  height: 200px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom: 1px solid brown;
}
.carousel {
  width: 1200px;
  margin: 0 auto 3rem auto;
  @include respond(phone) {
    width: 320px;
    margin: 0 auto;
  }
}
.carousel-total {
  // background-color: red;
  // left: 0px;
  position: absolute;
}

.btn:link,
.btn.visited {
  text-decoration: none;
  padding: 15px 20px;
  display: inline-block;
  border-radius: 10px;
  transition: all 0.2s;
  position: relative;
  left: 45%;
}
.btn {
  background-color: orangered;
  color: white;
  position: relative;
  direction: rtl;
  // padding: 50px;
  margin-top: -20px;
  margin-bottom: 2rem;
}
.btn:hover {
  transform: translateY(-5px);
}
.btn:active {
  transform: translateY(3px);
}
.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-color: orangered;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}
.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}
.svg {
  margin-bottom: 5rem;
}
</style>