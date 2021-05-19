<template>
  <div>
    <main class="pos">
      <section class="section-about">
        <div class="u-center-text">
          <h2 class="heading-secondary">باکیفیت ترین محصولات الکترونیکی</h2>
        </div>
        <div class="row">
          <div class="col-1-of-2">
            <h3 class="heading-teritary">تنوع محصول</h3>
            <p class="paragraph">
              جدیدترین محصولات الکترونیکی را با بهترین کیفیت و مناسب ترین قیمت
              در کامپوتر شاپ پیدا خواهید کرد. تنوع محصولات کامپیوتر شاپ بالاست.
            </p>
            <h3 class="heading-teritary">با خیال راحت خرید کنید</h3>
            <p class="paragraph">
              در کمترین زمان و با خیال راحت خرید خود را انجام دهید. محصولات در
              کوتاه ترین زمان ممکن به دستتان خواهد رسید
            </p>
            <a href="#" class="btn-text">بیشتر بدانید &larr; </a>
          </div>
          <div class="col-1-of-2">
            <div class="composition">
              <img
                src="../../../public/img/661793.jpg"
                alt=""
                class="composition__photo composition__photo--p1"
              />
              <img
                src="../../../public/img/picture2.jpg"
                alt=""
                class="composition__photo composition__photo--p2"
              />
              <img
                src="../../../public/img/picture3.jpg"
                alt=""
                class="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    <second-main></second-main>
    <most-sells></most-sells>
  </div>
</template>


<script>
import MostSells from "./FirstContent/MostSells.vue";
import SecondMain from "./FirstContent/SecondMain.vue";
export default {
  components: { SecondMain, MostSells },
};
</script>


<style lang="scss" scoped>
@import "../../styles/mixins.scss";
 
$color-primary-dark: #fc5296;
$color-primary-light: #f67062;
.section-about {
  padding: 2rem 0 6rem;
  margin-bottom: 5rem;
}
.pos{
  padding: 0 10px 0rem 10px;
   @include respond(tab-port) {
    padding-bottom: 20rem;
  }
}
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

  @include respond(tab-port){
    font-size: 1.5rem;
  }

}
.u-center-text {
  text-align: center;
  padding-bottom: 4rem;

  @include respond(tab-port){
    padding-bottom: 
    rem;
  }
}
.row {
  display: flex;
   @include respond(tab-port) {
    flex-wrap: wrap;
  }
}
.col-1-of-2 {
  direction: rtl;
  width: 100%;
  display: block;
}
.heading-teritary {
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 10px;
  color:#fc5296;
  @media (max-width: 1366px) {
    font-size: 20px;
  }
}
.paragraph {
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 3rem;
    @media (max-width: 1366px) {
      font-size: 14px;
    }
  }
}
.btn-text {
  &:link,
  &:visited {
    font-size: 18px;
    color: #fc5296;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #fc5296;
    padding: 3px;
    transition: all 0.2s;

    @include respond(tab-port){
      font-size: 12px;
    }
  }
  &:hover {
    background-color: #fc5296;
    color: white;
    text-shadow: 0.5rem 1rem 2rem rgba(rgb(77, 75, 75), 0.5);
    transform: translateY(-2px);
    border-radius: 8px;
  }
  &:active {
    text-shadow: 0.5rem 1rem 1rem rgba(rgb(77, 75, 75), 0.5);
    transform: translateY(0);
  }
}
.composition {
  position: relative;
  width: 100%;
  margin-top: -100px;

  @include respond(phone){
    
    top: 3rem;
  }
  @media (max-width: 535px){
  }

  &__photo {
    box-shadow: 0.5rem 1rem 1rem rgba(rgb(77, 75, 75), 0.5);
    border-radius: 20px;

    transition: all 0.2s;
    outline-offset: 15px;
    position: absolute;

    @include respond(tab-port){

    }

    &--p1 {
      right: 140px;
      z-index: 5;
      width: 330px;
      height: 320px;

      @media (max-width: 1366px) {
        width: 280px;
        right: 220px;
      }
      @media (max-width: 1281px){
        width: 220px;
      }
      @media (max-width: 1110px){
        right: 120px;
      }
      @include respond(tab-port){
        right: 280px;
        top: -1rem;
      }
       @include respond(phone){
         right: 110px;
         width: 150px;
       }
    }
    &--p2 {
      right: 60px;
      top: 8rem;
      z-index: 10;
      width: 280px;
      height: 300px;
       @media (max-width: 1366px) {
        width: 240px;
        right: 90px;
        height: 250px;
      }
      @media (max-width: 1281px){
        width: 190px;
        height: 210px;
        top: 6rem;
      }
      @media (max-width: 1110px){
        right: 30px;
      }
      @include respond(tab-port){
        right: 160px;
        top: 4rem;
      }
      @include respond(phone){
        width: 150px;
        height: 150px;
        right: 50px;
      }
    }
    &--p3 {
      right: 300px;
      width: 300px;
      top: 9.5rem;
      z-index: 15;
      height: 240px;
       @media (max-width: 1366px) {
        width: 300px;
        right: 280px;
      }
      @media (max-width: 1281px){
        width: 250px;
        right: 250px;
        top: 8rem;
      }
      @media (max-width: 1110px){
        right: 150px;
      }
      @include respond(tab-port){
        right: 330px;
        top: 6rem;
      }
      @include respond(phone){
        width: 140px;
        right: 180px;
      }
    }
    &:hover {
      outline: 5px solid #fc5296;
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: 0.5rem 1rem 1rem rgba(rgb(77, 75, 75), 0.7);
      z-index: 20;
    }
  }
  &:hover &__photo:not(:hover) {
    transform: scale(0.95);
  }
  }

</style>

