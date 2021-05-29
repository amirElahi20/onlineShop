<template>
  <div class="cmp">
    <section class="cardbox">
      <span class="span s2" :class="{ deactive: l >= 3 }" @click="goToRight"
        >&#10093;</span
      >
      <span class="span s1" :class="{ deactive: l <= 0 }" @click="goToLeft"
        >&#10092;</span
      >
      <div class="cards cs"  v-for="product in MostSellProducts" :key="product.id">
        <div class="swipimg">
          <img :src="product.picture" alt="" />
          <span class="text">{{product.name }}</span>
          <span class="text--sub">{{product.description_one}}</span>
          <span class="cost">{{product.cost}} تومان</span>
          <button class="product-mbtn">مشاهده محصول</button>
        </div>
      </div>
    </section>
      <a class="btn">نمایش همه</a>
    <svg height="1" width="100%">
      <line
        x1="15%"
        y1="0"
        x2="85%"
        y2="0"
        style="stroke: #f67062; stroke-width: 2"
      />
    </svg>
  </div>
</template>


<script>
// import {mapState} from 'vuex';

export default {
  data() {
    return {
      div: document.getElementsByClassName("cs"),
      l: 0,
      active: true,
    };
  },
  methods: {
    goToRight() {
      this.l++;
      console.log(this.l);
      console.log(this.div);
      for (var i of this.div) {
        if (this.l == 0) {
          i.style.left = "0px";
        }
        if (this.l == 1) {
          i.style.left = "-24.8%";
        }
        if (this.l == 2) {
          i.style.left = "-49.7%";
        }
        if (this.l == 3) {
          i.style.left = "-74.6%";
        }
        if (this.l > 3) {
          this.l = 3;
          this.active = !this.active;
        }
      }
    },
    goToLeft() {
      this.l--;
      console.log(this.l);
      for (var i of this.div) {
        if (this.l == 0) {
          i.style.left = "0px";
        }
        if (this.l == 1) {
          i.style.left = "-24.8%";
        }
        if (this.l == 2) {
          i.style.left = "-49.7%";
        }
        if (this.l == 3) {
          i.style.left = "-74.6%";
        }
        if (this.l < 0) {
          this.l = 0;
          this.active = !this.active;
        }
      }
    },
  },
  computed:{
    MostSellProducts(){
      return this.$store.getters.GetMostSellProducts;
    },
  },
  created(){
    this.$store.dispatch("GetMostSellProductsFromServer");
  }
};
</script>


<style lang="scss" scoped>
.cmp {
  padding: 1rem 2rem;
  //  position: absolute;
  // transform: translate(-50%, -50%);
  text-align: center;
}

.swipimg img {
  width: 100%;
  height: 300px;
  padding: 0 20px;
  margin-bottom: 0px;
  border-radius: 50px;
  transition: all 0.3s;
  top: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.09);
  }
}
main {
  width: 95%;
  height: 400px;
  margin: 20px;
  position: absolute;
}
.cost {
  color: black;
  display: block;
  padding: 5px 0;
  direction: rtl;
}
h1 {
  width: 90%;
  margin: 10px auto;
  background: #1967d2;
  font-weight: bold;
  color: white;
}
.span {
  position: absolute;
  // top: 140rem;
  margin-top: 140px;
  font-size: 60px;
  font-weight: bold;
  color: #fc5296;
  cursor: pointer;
  left: 0.5%;
  z-index: 1;
  background-color: white;
  padding: 1px 6px;
  box-shadow: 0.5rem 1rem 1rem rgba(rgb(163, 158, 158), 0.5);

  &.s2 {
    left: 96.1%;
  }

  &.deactive {
    color: #fc529628;
  }
}
.s1 {
  left: 20px;
}

.cardbox {
  margin: 0px 2rem;
  display: flex;
  height: 570px;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  -ms-overflow-style: none; 
  scrollbar-width: none;

  &::-webkit-scrollbar {
    visibility: hidden;
  }
}
.cards {
  min-width: 22%;
  height: 460px;
  position: relative;
  padding-top: 20px;
  font-weight: bold;
  margin: 10px 20px;
  color: white;
  background: whitesmoke;
  transition: all 0.8s;
  left: 0px;
  border-radius: 50px;
  text-align: center;
  border: 3px solid #fc5296;
  // cursor: pointer;
}
.btn{
   text-decoration: none;
  padding: 20px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
  background-color: #fc5296;
  margin-bottom: 2rem;
  cursor: pointer;
  color: white;
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
  border-radius: 100px;
  background-color: #fc5296;
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

.product-mbtn {
  padding: 10px 50px;
  border-radius: 10px;
  border: 3px solid #fc5296;
  background-color: white;
  margin-top: 15px;
  font-size: 15px;
  transition: all 0.3s;
  z-index: 1;
  cursor: pointer;

  &:hover {
    background-color:#fc5296;
    color: white;
  }
}
.text {
  display: block;
  font-size: 20px;
  padding-bottom: 10px;
  color: black;

  &--sub {
    display: block;
    font-size: 12px;
    color: black;
  }
}
.u-center-text {
  text-align: center;
  padding-bottom: 4rem;
}
$color-primary-dark: #fc5296;
$color-primary-light: #f67062;
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

  &:hover {
    transform: skewY(-3deg) skewX(-15deg);
    text-shadow: 0.5rem 1rem 2rem rgba(rgb(77, 75, 75), 0.5);
  }
}
</style>