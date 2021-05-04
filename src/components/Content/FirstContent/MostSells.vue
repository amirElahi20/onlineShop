<template>
  <div>
    <section class="section-product">
      <div class="u-center-text">
        <h2 class="heading-secondary">---پرفروش ترین محصولات---</h2>
      </div>
    </section>
    <content-swiper></content-swiper>
    <monitor-swiper></monitor-swiper>
    <mobile-swiper></mobile-swiper>
  </div>
</template>


<script>
import ContentSwiper from '../Swiper/ContentSwiper.vue'
import MonitorSwiper from '../Swiper/MonitorSwiper.vue'
import MobileSwiper from '../Swiper/MobileSwiper.vue'
// import BoxSwiper from '../Swiper/BoxSwiper.vue'
export default {
    components:{
        ContentSwiper,
        MonitorSwiper,
        MobileSwiper,
        // BoxSwiper
    }
}

</script>

<style lang="scss" scoped>
.section-product {
  padding: 5rem 0 0 0;
}
$color-primary-dark: #f30629;
$color-primary-light: #72151e;
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
    text-shadow: 0.5rem 1rem 2rem rgba(rgb(77, 75, 75), 0.5);
  }
}
.u-center-text {
  text-align: center;
  padding-bottom: 4rem;
}
</style>