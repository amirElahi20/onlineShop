<template>
  <div>
    <div class="textheader">
      <h1 class="heading-primary">
        <span class="heading-primary-main">خشکینجا</span>
        <span class="heading-primary-sub"
          >خرید اینترنتی انواع خشکبار</span
        >
      </h1>
      <a href="#" class="btn">نمایش محصولات</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import '../../../../styles/mixins.scss';
.textheader {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(255, 255, 255, 0.37);
  border-radius: 10px;
  padding: 40px;
  margin-top: 50px;
  width:400px ;

   @include respond(phone) {
    padding: 10px;
    padding-bottom: 15px;
  }
}
.heading-primary {
  color: white;
  backface-visibility: hidden;
  margin-bottom: 60px;
}
.heading-primary-main {
  display: block;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0;

  animation-name: moveInRight;
  animation-duration: 2s;

  @include respond(phone) {
    font-size: 30px;
    padding-bottom: 15px;
  }
  
@include respond(tab-port){
  padding-bottom: 10px; 
}
  
@include respond(tab-port){
  font-size: 25px; 
}
}
.heading-primary-sub {
  display: block;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;

    @include respond(phone) {
    font-size: 15px;
    padding-bottom: 10px;
  }

  
@include respond(tab-port){
  font-size: 22px; 
}

  animation-name: moveInLeft;
  animation-duration: 2s;
}
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  80% {
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
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

   @include respond(phone) {
    font-size: 12px;
  }
}
.btn {
  background-color: rgb(231, 94, 31);
  color: white;
  position: relative;
  direction: rtl;
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
  background-color: rgb(231, 94, 31);
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

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>