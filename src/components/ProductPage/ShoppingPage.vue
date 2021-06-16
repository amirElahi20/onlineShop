<template>
  <div class="shop-cart" v-if="IsUserAuthenticated">
    <div class="right">
      <h2 class="info-title">اطلاعات خرید شما</h2>
      <h3 class="products-cost-title">قیمت کالا ها</h3>
      <h1 class="products-cost">50000تومان</h1>
      <h3 class="products-bargain">تخفیف کالاها</h3>
      <h1 class="products-bargain-cost">10000تومان</h1>
      <!-- <svg height="1" width="100%">
        <line
          x1="3%"
          y1="0"
          x2="97%"
          y2="0"
          style="stroke:  rgb(255, 255, 0); stroke-width: 2"
        />
      </svg> -->
      <h3 class="total-products-title">مجموع سبد خرید</h3>
      <h1 class="total-cost">40000تومان</h1>
      <p class="explanition">
        هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌
        محاسبه و به این مبلغ اضافه خواهد شد
      </p>
      <a href="#" class="pay-btn">ادامه فرایند خرید</a>
    </div>
    <div class="left">
      <h2 class="name-basket">
        سبد خرید <span class="english">{{ UserName.username }}</span>
      </h2>
      <div class="product">
        <div class="product-img">
          <img
            class="img"
            src="../../../public/img/mockup-graphics-enNffryKuQI-unsplash.jpg"
            alt=""
          />
        </div>
        <div class="product-information">
          <ul class="product-list">
            <li>موز</li>
            <li>پاکتی200گرم</li>
            <li>3</li>
            <li>350000</li>
          </ul>
        </div>
        <fa class="delete" icon="times"></fa>
      </div>
      <div class="product">
        <div class="product-img">
          <img
            class="img"
            src="../../../public/img/mockup-graphics-enNffryKuQI-unsplash.jpg"
            alt=""
          />
        </div>
        <div class="product-information">
          <ul class="product-list">
            <li>موز</li>
            <li>پاکتی200گرم</li>
            <li>3</li>
            <li>350000</li>
          </ul>
        </div>
        <fa class="delete" icon="times"></fa>
      </div>
      <div class="product">
        <div class="product-img">
          <img
            class="img"
            src="../../../public/img/mockup-graphics-enNffryKuQI-unsplash.jpg"
            alt=""
          />
        </div>
        <div class="product-information">
          <ul class="product-list">
            <li>موز</li>
            <li>پاکتی200گرم</li>
            <li>3</li>
            <li>350000</li>
          </ul>
        </div>
        <fa class="delete" icon="times"></fa>
      </div>
    </div>
  </div>
  <div class="UserAuthenticated" v-else>
    <fa class="icon" icon="shopping-cart"></fa>
    <h4 class="first-title">
      کاربر گرامی برای مشاهده سبد خرید ابتدا وارد سایت شوید
    </h4>
    <h5 class="second-title">
      برای راحتی بیشتر میتوانید از دکمه های زیر استفاده کنید
    </h5>
    <p class="first-parag">
      اگر قبلا در سایت ثبت نام کرده اید میتوانید با کلیک بر روی دکمه ی زیر وارد
      حساب خود شوید
    </p>
    <router-link class="login-btn" to="/login">وارد شوید</router-link>
    <p class="second-parag">
      و اگر حسابی ندارید با زدن بر روی دکمه زیر ثبت نام کنید
    </p>
    <router-link class="register-btn" to="/register">ثبت نام کنید</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    IsUserAuthenticated() {
      return this.$store.getters.getAuth;
    },
    UserName() {
      return this.$store.getters.getUserName;
    },
  },
  methods: {
    GetUserOpenShopCart() {
      this.$store.dispatch("GetUserOpenOrder");
    },
  },
  created() {
    this.GetUserOpenShopCart();
  },
};
</script>


<style lang="scss" scoped>
.shop-cart {
  background-color: whitesmoke;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  direction: rtl;
}
.product-list {
  display: flex;
}
.products-bargain-cost {
  // background-color: orangered;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  // color: black;
}
.pay-btn {
  background-color: yellow;
  text-decoration: none;
  color: black;
  position: absolute;
  bottom: 0;
  padding: 20px 176px;
  margin-right: -229px;
}
.total-products-title {
  border-top: 1px solid yellow;
  margin-top: 40px;
}
.products-cost {
  // background-color: yellow;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  // color: black;
}
.product-list li {
  margin-top: 38px;
  margin-left: 100px;
}
.product-list li:first-child {
  margin-right: 70px;
}
.total-cost {
  // background-color: yellow;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  // color: black;
}
.right {
  background-color: rgba(0, 0, 0, 0.822);
  width: 30%;
  color: white;
  text-align: center;
}
.info-title {
  margin-top: 25px;
  margin-bottom: 20px;
  color: yellow;
  border-bottom: 1px solid yellow;
}
.delete {
  position: absolute;
  // top: 19%;
  margin-top: 25px;
  margin-right: 760px;
  cursor: pointer;
  font-size: 45px;
  color: red;
}
.left {
  // background-color: violet;
  width: 65%;
}
.img {
  width: 80px;
  margin-top: 15px;
  margin-right: 10px;
  border-radius: 100px;
  margin-left: 20px;
}
.small-icon {
  color: black;
  margin-left: 10px;
  margin-top: 5px;
  font-size: 12px;
}
.product {
  display: flex;
  margin-top: 2rem;
  // border: 0.5px solid orange;
  background-color: rgb(226, 220, 220);
  width: 75%;
  direction: rtl;
  // margin: 2rem auto;
  padding: 10px;
  border-radius: 10px;
}
.name-basket {
  margin-top: 2rem;
}
ul {
  list-style: none;
}
.UserAuthenticated {
  background-color: orange;
  width: 40%;
  margin: 7% auto;
  height: 500px;
  text-align: center;
  border-radius: 10px;
}
.icon {
  font-size: 80px;
  margin-top: 20px;
  color: white;
  margin-bottom: 2rem;
}
.first-title {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 0.3rem;
}
.second-title {
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 1.5rem;
}
.login-btn {
  background-color: orangered;
  color: white;
  text-decoration: none;
  padding: 15px;
  border-radius: 10px;
  transition: all 0.4s;

  &:hover {
    background-color: rgb(218, 61, 4);
  }
}
.first-parag {
  margin-bottom: 2rem;
}
.register-btn {
  background-color: orangered;
  color: white;
  text-decoration: none;
  padding: 15px;
  border-radius: 10px;
  transition: all 0.4s;
  &:hover {
    background-color: rgb(218, 61, 4);
  }
}
.second-parag {
  margin-bottom: 2rem;
  margin-top: 3rem;
}
</style>