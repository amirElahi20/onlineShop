<template>
  <div>
    <div class="multimedia">
      <ul>
        <li class="title">
          <a class="titletext" href=""><h3>پخش و ضبط صدا</h3></a>
        </li>
        <li><a href="">Archos</a></li>
        <li><a href="">SONY</a></li>
        <li><a href="">creative</a></li>
        <li><a href="">Transcend</a></li>
        <li><a href="">samsung</a></li>
        <li><a href="">TrekStore</a></li>
        <li><a href="">TSCO</a></li>
        <li><a href="">philips</a></li>
        <li><a href="">رادیو</a></li>
      </ul>
      <ul>
        <li class="title">
          <a class="titletext" href=""><h3>تلویزیون</h3></a>
        </li>
        <li><a href="">farassoo</a></li>
        <li><a href="">X.vision</a></li>
        <li><a href="">LG</a></li>
        <li><a href="">MasterTech</a></li>
        <li><a href="">TCL</a></li>
        <li><a href="">SONY</a></li>
        <li><a href="">Xiaomi</a></li>
      </ul>
      <ul>
        <li class="title">
          <a class="titletext" href=""><h3>دوربین فیلمبرداری</h3></a>
        </li>
        <li><a href="">Aee</a></li>
        <li><a href="">GoPro</a></li>
        <li><a href="">Monster</a></li>
        <li><a href="">ApeMan</a></li>
      </ul>
      <ul>
        <li class="title">
          <a class="titletext" href=""><h3>دوربین عکاسی</h3></a>
        </li>
        <li><a href="">DSLR</a></li>
        <li><a href="">Bridge</a></li>
        <li><a href="">لنز</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style>
.multimedia {
  background-color: white;
  width: 1200px;
  min-height: 375px;
  position: absolute;
  top: 0;
  right: 0.5rem;

  border-radius: 10px;
  display: none;
  justify-content: space-around;
  z-index: -2;
  padding-right: 200px;

}
.sub-menu ul li:hover .multimedia {
  z-index: -1;
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