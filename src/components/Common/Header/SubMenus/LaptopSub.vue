<template>
    <div>
        <div class="laptop">
          <ul>
            <li class="title"><a class="titletext" href=""><h3>لپ تاپ</h3></a></li>
            <li><a href="">ASUS</a></li>
            <li><a href="">Acer</a></li>
            <li><a href="">Dell</a></li>
            <li><a href="">Lenovo</a></li>
            <li><a href="">HP</a></li>
            <li><a href="">MSI</a></li>
            <li><a href="">Huawei</a></li>
            <li><a href="">Microsoft</a></li>
            <li><a href="">Apple</a></li>
          </ul>
          <ul>
            <li class="title"><a class="titletext" href=""><h3>تبلت</h3></a></li>
            <li><a href="">Samsung</a></li>
            <li><a href="">LG</a></li>
            <li><a href="">Presigo</a></li>
            <li><a href="">Gigabyte</a></li>
            <li><a href="">Acer</a></li>
            <li><a href="">Huawei</a></li>
            <li><a href="">Asus</a></li>
            <li><a href="">iGreen</a></li>
            <li><a href="">Lenovo</a></li>
            <li><a href="">Memonex</a></li>
            <li><a href="">Ainol</a></li>
            <li><a href="">Apple</a></li>
            <li><a href="">Microsoft</a></li>
            <li><a href="">Alcatel</a></li>
          </ul>
          <ul>
            <li class="title"><a class="titletext" href=""><h3>لوازم چانبی لپ تاپ</h3></a></li>
            <li><a href="">کیف لپ تاپ</a></li>
            <li><a href="">پایه خنک کننده</a></li>
            <li><a href="">باطری لپ تاپ</a></li>
          </ul>
          <ul>
            <li class="title"><a class="titletext" href=""><h3>لوازم جانبی موبایل و تبلت</h3></a></li>
            <li><a href="">پاوربانک</a></li>
            <li><a href="">کیف موبایل و تبلت</a></li>
            <li><a href="">شارژر</a></li>
            <li><a href="">محافظ صفحه نمایش</a></li>
            <li><a href="">کارت های حافظه</a></li>
            <li><a href="">نگهدارنده موبایل</a></li>
            <li><a href="">کابل</a></li>
            <li><a href="">دسبند هوشمند</a></li>
            <li><a href="">مونوپاد</a></li>
            <li><a href="">رم ریدر</a></li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.laptop {
  background-color: white;
  width: 1200px;
  height: auto;
  position: absolute;
  /* margin-top: -284px; */
  /* margin-right: 200px; */
  border-radius: 10px;
  top: 0;
  right: 0;
  padding-right: 200px;
  /* border-top-left-radius: 10px; */
  display: flex;
  justify-content: space-around;
  /* opacity: 1; */
  display: none;
  z-index: -2;

}
.sub-menu ul li:hover .laptop {
  z-index: -1;
  opacity: 1;;
  display: flex;
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