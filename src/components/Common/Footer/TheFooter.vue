<template>
  <div>
    <div
      class="footer"
      :class="{
        layout:
          $route.path == '/register' ||
          $route.path == '/login' ||
          $route.path == '/forget' ||
          $route.name == 'resetpassword' ||
          $route.name == 'Confirm' ||
          $route.name == 'shopping',
      }"
    >
      <div class="body-footer">
        <ul>
          <h4>ما را دنبال کنید</h4>
          <li>
            <div class="social-media">
              <a href="#" class="whatsapp">
                <h4>ساکورا شاپ در تلگرام</h4>
                <fa class="icon" :icon="['fab', 'whatsapp']"></fa
              ></a>
            </div>
          </li>
          <li>
            <div class="social-media">
              <a href="#" class="telegram">
                <h4>ساکورا شاپ در تلگرام</h4>
                <fa class="icon" :icon="['fab', 'telegram']"></fa
              ></a>
            </div>
          </li>
          <li>
            <div class="social-media">
              <a href="#" class="instagram">
                <h4>ساکورا شاپ در تلگرام</h4>
                <fa class="icon" :icon="['fab', 'instagram']"></fa
              ></a>
            </div>
          </li>
        </ul>
        <ul>
          <li>دسترسی سریع</li>
          <li>ورود به سایت</li>
          <li>ثبت نام</li>
          <li>درباره ساکورا</li>
          <li>ارتباط با ساکورا</li>
        </ul>
        <ul>
          <li><img src="../../../../public/img/namad.jpg" alt="" /></li>
          <li><img src="../../../../public/img/neshan.jpg" alt="" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style lang="scss" scoped>
@import "../../../styles/mixins.scss";

.footer {
  background-color: whitesmoke;
  padding-bottom: 20px;
  margin-top: 8rem;
  @include respond(phone) {
    width: 100%;
  }
}
.layout {
  display: none;
}
img {
  width: 200px;
  height: 100px;
  // padding-right: 15px;
  margin-right: 15px;
  border-radius: 10px;
  display: block;
  @include respond(phone) {
    width: 100px;
  }
}
.body-footer {
  direction: rtl;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.social-media a {
  display: flex;
  color: white;
  text-decoration: none;
  // background-color: black;
  margin-top: 1rem;
  width: 300px;
  padding: 20px;
  justify-content: center;
  border-radius: 10px;
  transition: all 0.4s;
  -webkit-clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 0 52%, 25% 0%);
clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 0 52%, 25% 0%);
}
.social-media .whatsapp {
  background-color: green;
}
.social-media .telegram {
  background-color: #2693c9;
}
.social-media .instagram {
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
}
ul {
  list-style: none;
}
.icon {
  font-size: 30px;
  margin-right: 50px;
}

</style>


