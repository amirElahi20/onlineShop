<template>
  <div>
    <div class="total">
      <div class="right"></div>
      <div class="left">
        <h2 class="header">محصولات</h2>
        <div class="row">
          <div class="box" v-for="(item, index) in items" :key="index">
            <img
              class="image"
              src="../../../public/img/giorgio-trovato-fczCr7MdE7U-unsplash.jpg"
              alt=""
            />
            <p class="paragraph">موز</p>
            <h5 class="pack">نوع دسته بندی را مشخص کنید</h5>
            <div class="pack-box">
              <img
                @click="activeclass1(index)"
                class="icon"
                :class="{ active: item.activeIcon1 }"
                src="../../../public/img/jar.png"
                alt=""
              />
              <img
                @click="activeclass2(index)"
                class="icon"
                :class="{ active: item.activeIcon2 }"
                src="../../../public/img/can.png"
                alt=""
              />
              <img
                @click="activeclass3(index)"
                class="icon"
                :class="{ active: item.activeIcon3 }"
                src="../../../public/img/envelope.png"
                alt=""
              />
            </div>
            <div class="cost-box">
              <the-packet v-if="item.activeIcon3"></the-packet>
              <big-glassess v-if="item.activeIcon1"></big-glassess>
              <tinny-glassess v-if="item.activeIcon2"></tinny-glassess>
            </div>
            <a class="btn">مشاهده محصول</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BigGlassess from "../ProductPage/CostPages/BigGlassess";
import TinnyGlassess from "../ProductPage/CostPages/TinyGlassess";
import ThePacket from "../ProductPage/CostPages/ThePacket";

export default {
  components: {
    BigGlassess,
    TinnyGlassess,
    ThePacket,
  },
  data() {
    return {
    //   activeIcon1: true,
    //   activeIcon2: false,
    //   activeIcon3: false,
    //   activeCost: true,
      items: [
        { id: 1, activeIcon1: true, activeIcon2: false, activeIcon3: false },
        { id: 2, activeIcon1: true, activeIcon2: false, activeIcon3: false },
        { id: 3, activeIcon1: true, activeIcon2: false, activeIcon3: false },
        { id: 4, activeIcon1: true, activeIcon2: false, activeIcon3: false },
        { id: 5, activeIcon1: true, activeIcon2: false, activeIcon3: false },
        { id: 6, activeIcon1: true, activeIcon2: false, activeIcon3: false },
        { id: 7, activeIcon1: true, activeIcon2: false, activeIcon3: false },
        { id: 8, activeIcon1: true, activeIcon2: false, activeIcon3: false },
        { id: 9, activeIcon1: true, activeIcon2: false, activeIcon3: false },
        { id: 10, activeIcon1: true, activeIcon2: false, activeIcon3: false },
        { id: 11, activeIcon1: true, activeIcon2: false, activeIcon3: false },
      ],
    };
  },
  methods: {
    activeclass1(resId) {
      this.items[resId].activeIcon1 = true;
      this.items[resId].activeIcon2 = false;
      this.items[resId].activeIcon3 = false;
    },
    activeclass2(resId) {
      this.items[resId].activeIcon1 = false;
      this.items[resId].activeIcon2 = true;
      this.items[resId].activeIcon3 = false;
    
    },
    activeclass3(resId) {
     this.items[resId].activeIcon1 = false;
      this.items[resId].activeIcon2 = false;
      this.items[resId].activeIcon3 = true;
    },
  },
};
</script>


<style lang="scss" scoped>
.header {
  text-align: center;
}
.pack-box {
  //   background-color: yellow;
  padding: 10px 0 10px 0;
  width: 170px;
}
.pack {
  margin-bottom: 10px;
}
.active {
  background-color: whitesmoke;
  // height: 40%;
  // padding: 20px;
}
.icon {
  margin-right: 40px;
  cursor: pointer;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 30px;
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;

  &:nth-child(1) {
    margin-right: 0px;
  }
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
  background-color: yellow;
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
  background-color: rgb(236, 221, 225);
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
}
.paragraph {
  display: block;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
}

.cost-box {
  margin-top: -18px;
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