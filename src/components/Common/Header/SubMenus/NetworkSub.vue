<template>
  <div>
    <div class="network">
      <ul class="communication-equipment">
        <li class="title">
          <a class="titletext" href=""><h3>تجهیزات ارتباطی</h3></a>
        </li>
        <li><a href="">مودم ADSL</a></li>
        <li><a href="">کارت شبکه</a></li>
        <li><a href="">روتر -اکسس پوینتر</a></li>
        <li><a href="">دوربین تحت شبکه</a></li>
        <li><a href="">مودم همراه</a></li>
        <li><a href=""> مودم dial-up</a></li>
      </ul>
      <ul class="network-equipment">
        <li class="text">
          <a class="titletext" href=""><h3>تجهیزات شبکه</h3></a>
        </li>
        <li><a href="">هاب یو اس بی</a></li>
        <li><a href="">کابل شبکه</a></li>
        <li><a href="">هارد تحت شبکه</a></li>
        <li><a href="">سوئیچ</a></li>
        <li><a href="">سوئیج مانیتور</a></li>
        <li><a href="">آنت تقویتی</a></li>
        <li><a href="">پرینتر سرور</a></li>
        <li><a href="">مبدل کابل شبکه</a></li>
        
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.network {
  background-color: white;
  width: 1200px;
  min-height: 402px;
  border-bottom-right-radius: 10px;
  position: absolute;
  top: 0;
  right: 0.5rem;
  border-radius: 10px;
  display :none;
  justify-content: space-around;
  z-index: -2;
  padding-right: 200px;
}
.sub-menu ul li:hover .network {
  z-index: -1;
  /* opacity: 1; */
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