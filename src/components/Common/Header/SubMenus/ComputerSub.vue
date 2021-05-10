<template>
  <div>
    <div class="computer">
      <ul class="peripherals">
        <li class="title">
          <a class="titletext" href=""><h3>قطعات جانبی</h3></a>
        </li>
        <li><a href="">کارت صدا</a></li>
        <li><a href="">مانیتور</a></li>
        <li><a href="">درایورنوری</a></li>
        <li><a href="">فن و خنک کننده</a></li>
        <li><a href="">درایورنوری اکسترنال</a></li>
        <li><a href="">باندل</a></li>
        <li><a href="">داپلیکیتور</a></li>
        <li><a href="">حافظه اکسترنال</a></li>
      </ul>
      <ul class="original">
        <li class="title">
          <a class="titletext" href=""><h3>قطعات اصلی</h3></a>
        </li>
        <li><a href="">کیس</a></li>
        <li><a href="">پردازنده</a></li>
        <li><a href="">هارددیسک</a></li>
        <li><a href="">پاور</a></li>
        <li><a href="">کارت گرافیک</a></li>
        <li><a href="">حافظه <span class="english">ssd</span></a></li>
        <li><a href="">حافظه <span class="english">RAM</span></a></li>
        <li><a href="">مادربورد</a></li>
      </ul>
      <ul class="accessories">
        <li class="title">
          <a class="titletext" href=""><h3>لوازم جانبی</h3></a>
        </li>
        <li><a href="">کیبورد</a></li>
        <li><a href="">ماوس</a></li>
        <li><a href="">اسپیکر</a></li>
        <li><a href="">هدفون</a></li>
        <li><a href="">وب کم</a></li>
        <li><a href="">فلش USB</a></li>
        <li><a href="">دسته گیمینگ</a></li>
        <li><a href="">صندلی گیمینگ</a></li>
        <li><a href="">کابل</a></li>
        <li><a href="">کیف لپ تاپ</a></li>
        <li><a href="">قاب هارد</a></li>
        <li><a href="">قلم نوری</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.computer {
  background-color:white;
  width: 1200px;
  right: 0.5rem;
  top: 0;
  height: auto;
  position: absolute;
  border-radius: 10px;
  display: none;
  justify-content: space-around;
  z-index: -2;
  display: none;
}
.sub-menu ul li:hover .computer{
  /* display: flex; */
  z-index: -1;
}
.peripherals{
  padding-right: 200px;
}
ul {
  text-decoration: none;
  list-style: none;
  padding-top: 10px;
}
.titletext {
  color: crimson;
  text-decoration: none;
}
.title {
  padding-bottom: 15px;
}
ul li {
  padding-bottom: 5px;
}
ul li a {
  text-decoration: none;
  color: black;
}
</style>