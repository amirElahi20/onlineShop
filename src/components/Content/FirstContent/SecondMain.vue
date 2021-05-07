<template>
  <div>
    <section class="section-features">
      <div class="row">
        <div class="col-1-of-4">
          <div class="feature-box">
          <fa icon="check-circle"></fa>
            <h3 class="heading-tertiary">ضمانت و تضمین اصل بودن</h3>
            <p class="feature-box__text">لذت خرید کالای درجه یک و اصل</p>
          </div>
        </div>
        <div class="col-1-of-4">
          <div class="feature-box">
          <fa icon="shopping-bag"></fa>
            <h3 class="heading-tertiary">خرید راحت</h3>
            <p class="feature-box__text">
              به راحتی و با چندکلیک خرید خود را انجام دهید
            </p>
          </div>
        </div>
        <div class="col-1-of-4">
          <div class="feature-box">
        <fa icon="credit-card"></fa>
            <h3 class="heading-tertiary">پرداخت آنی و سفارش آنلاین</h3>
            <p class="feature-box__text">پرداخت بدون دردسر و امن در خانه</p>
          </div>
        </div>
        <div class="col-1-of-4">
          <div class="feature-box">
            <fa icon="truck"></fa>
            <h3 class="heading-tertiary">تحویل در کوتاه ترین زمان ممکن</h3>
            <p class="feature-box__text">ارسال کالا به تمام نقاط ایران</p>
          </div>
        </div>
        <div class="col-1-of-4">
          <div class="feature-box">
            <fa icon="undo"></fa>
            <h3 class="heading-tertiary">بازگشت وجه</h3>
            <p class="feature-box__text">
              ارجاع کالا و بازگشت وجه درصورت عدم رضایت
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.heading-tertiary {
  font-size: 15px;
}
.row {
  display: flex;
  justify-content: space-around;
  flex-wrap:wrap ;
}
.feature-box {
  background-color: white;
  width: 250px;
  font-size: 20px;
  padding: 2.5rem 0px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0.5rem 1rem 1rem rgba(rgb(163, 158, 158), 0.5);
  transition: all 0.3s;

  &__icon {
    font-size: 50px;
    margin-bottom: 20px;
  }
  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
    cursor: pointer;
  }
  &__text {
    font-size: 12px;
    margin-top: 5px;
  }
}
.section-features {
  padding: 13rem 0;
  background-image: linear-gradient(315deg, #000000 0%, #0000003a 74%),
    url("../../../../public/img/mobile.jpg");
  background-color: #2d3436;
  background-size: cover;
  margin-top: -10rem;

  transform: skewY(-7deg);

  & > * {
    transform: skewY(7deg);
  }
}
.col-1-of-4 {
  width: 15%;
  margin: 0 10px;
}
</style>
