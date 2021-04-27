<template>
  <div>
    <div class="company">
      <ul>
        <li class="title">
          <a class="titletext" href=""><h3>پرینتر</h3></a>
        </li>
        <li><a href="">پرینتر لیزری</a></li>
        <li><a href="">دستگاه کپی</a></li>
        <li><a href="">پرینتر بارکد</a></li>
      </ul>
      <ul>
        <li class="text">
          <a class="titletext" href=""><h3>اسکنر</h3></a>
        </li>
        <li><a href="">اسکنر فلت</a></li>
        <li><a href="">اسکنر بایگانی</a></li>
        <li><a href="">اسکنر دستی</a></li>
        <li><a href="">بارکدخوانی</a></li>
      </ul>
      <ul>
        <li class="title">
          <a class="titletext" href=""><h3>مولتی مدیا</h3></a>
        </li>
        <li><a href="">پروژکتور</a></li>
        <li><a href="">پرزنتر</a></li>
      </ul>
      <ul>
        <li class="title">
          <a class="titletext" href=""><h3>سایر</h3></a>
        </li>
        <li><a href=""> فکس</a></li>
        <li><a href="">تلفن</a></li>
        <li><a href="">کشوی پول</a></li>
        <li><a href="">ماشین حساب</a></li>
        <li><a href="">دستگاه حضور و غیاب</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.company {
  background-color:white;
  width: 1200px;
  height: 375px;
  position: absolute;
  top: 0;
  right:0.5rem;
  padding-right: 200px;
  /* margin-top: -354px; */
  /* margin-right: 200px; */
  /* border-radius: 10px; */
   border-radius: 10px;
   border-top-right-radius: 0px;
  display: flex;
  justify-content: space-around;
  opacity: 1;
  z-index: -2;
}
.sub-menu ul li:hover .company {
  z-index: -1;
  opacity: 1;
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