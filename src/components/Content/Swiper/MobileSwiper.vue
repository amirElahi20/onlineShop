<template>
  <div class="mob">
    <div class="u-center-text">
      <h2 class="heading-secondary">---موبایل---</h2>
    </div>
    <section class="cardbox">
      <span class="span s2" :class="{ deactive: l >= 3 }" @click="goToRight"
        >&#10093;</span
      >
      <span class="span s1" :class="{ deactive: l <= 0 }" @click="goToLeft"
        >&#10092;</span
      >
       <div class="cards ms"  v-for="mobile in Mobiles" :key="mobile.id">
        <div class="swipimg">
          <img :src="mobile.picture" alt="" />
          <span class="text">{{mobile.name }}</span>
          <span class="text--sub">{{mobile.description_one}}</span>
          <span class="cost">{{mobile.cost}} تومان</span>
          <button class="product-btn">مشاهده محصول</button>
        </div>
      </div>
    </section>
    <div class="btn-btn1">
      <a class="btn">نمایش همه</a>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      div: document.getElementsByClassName("ms"),
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
    Mobiles(){
      return this.$store.getters.GetMobiles;
    },
  },
  created(){
    this.$store.dispatch("GetMobilesFromServer");
    // console.log("GetMostSellProductsFromServer");
  }
};
</script>


<style lang="scss" scoped>
.mob {
  padding: 1rem 2rem;
}

.swipimg img {
  width: 100%;
  height: 300px;
  padding: 0 20px;
  margin-bottom: 0px;
  border-radius: 50px;
  transition: all 0.3s;
  top: 0;

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
  color: #ff4e00;
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
    color: #ff4d003f;
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
  overflow-x: hidden;
  overflow-y: hidden;

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
  border: 3px solid #ff4e00;
  cursor: pointer;
}

.btn:link,
.btn.visited {
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
  animation-name: moveInBottom;
  animation-duration: 1s;
  animation-delay: 0.75s;
  animation-fill-mode: backwards;
  align-items: center;
}

.btn {
  background-color: #ff4e00;
  color: white;
  position: relative;
  direction: rtl;
  padding: 20px 50px;
  border-radius: 100px;
  cursor: pointer;
  text-align: center;

  &-btn1 {
    padding: 0rem 0 3rem 0;
    text-align: center;
  }
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
  background-color: #ff4e00;
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
.product-btn {
  padding: 10px 50px;
  border-radius: 10px;
  border: 3px solid #ff4e00;
  background-color: white;
  margin-top: 15px;
  font-size: 15px;
  transition: all 0.3s;
  z-index: 1;
  cursor: pointer;

  &:hover {
    background-color: #ff4e00;
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
$color-primary-dark: #ff4e00;
$color-primary-light: #ec9f05;
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
</style>