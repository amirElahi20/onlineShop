<template>
  <div>
    <div class="contact">
      <h1 class="call">
        <fa class="icon" icon="phone"></fa>تماس با ساکورا شاپ
      </h1>
      <svg height="1" width="100%">
        <line
          x1="80%"
          y1="0"
          x2="97%"
          y2="0"
          style="stroke: rgb(255, 255, 255); stroke-width: 10"
        />
      </svg>
      <section class="question">
        <ul class="topul">
          <li>
            <p>
              لطفا پیش از ارسال ایمیل یا تماس تلفنی ، ابتدا پرسش های متداول را
              مشاهده کنید
            </p>
          </li>
          <li><a href="" class="btn">پرسش های متداول</a></li>
        </ul>
      </section>
      <svg height="1" width="100%">
        <line
          x1="3%"
          y1="0"
          x2="97%"
          y2="0"
          style="stroke: rgb(255, 255, 255); stroke-width: 1"
        />
      </svg>
      <section class="form">
        <li>
          <label> موضوع</label>
          <div class="select">
            <select name="format" id="format">
              <option selected disabled>--انتخاب موضوع--</option>
              <option style="font-family: BYekan" value="">پیشنهادات</option>
              <option value="">انتقادات</option>
              <option value="">مدیریت</option>
              <option value="">حسابداری</option>
              <option value="">سایر موضوعات</option>
            </select>
          </div>
        </li>

        <li>
          <label> نام خانوادگی</label>
          <input class="input" type="text" />
        </li>
        <li>
          <label> ایمیل</label>
          <input type="text" />
        </li>
        <li>
          <label>تلفن تماس</label>
          <input type="text" />
        </li>
        <li>
          <label>متن پیام</label>
          <textarea class="message" rows="10" cols="50" autofocus></textarea>
        </li>
        <button>ارسال پیام</button>
      </section>

      <svg height="1" width="100%">
        <line
          x1="3%"
          y1="0"
          x2="97%"
          y2="0"
          style="stroke: rgb(255, 255, 255); stroke-width: 1"
        />
      </svg>

      <section class="information">
        <h2 class="call">
          <fa class="icon" icon="info-circle"></fa>اطلاعات ساکورا شاپ
        </h2>
        <svg height="1" width="100%">
          <line
            x1="80%"
            y1="0"
            x2="97%"
            y2="0"
            style="stroke: rgb(255, 255, 255); stroke-width: 10"
          />
        </svg>
        <div class="info">
          <div class="right">
            <div class="box">
              <h3>دفتر مرکزی</h3>
              <p>
                ه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هوع با هدف بهبود
                ابزارهای کاربردی می باشد، کتابهای
              </p>
            </div>
            <div class="box">
              <h3>مراکز امور مشتریان</h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت د نیاز
                شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
          <div class="left">
            <img class="map" src="../../public/img/shiraz.jpeg" alt="" />
          </div>
        </div>
      </section>
      <svg height="1" width="100%">
        <line
          x1="3%"
          y1="0"
          x2="97%"
          y2="0"
          style="stroke: rgb(255, 255, 255); stroke-width: 0.5"
        />
      </svg>
      <section class="bottom">
        <div class="last">
          <ul class="contactul">
            <li class="li">
              <fa class="icon icon1" icon="phone"></fa>شماره تماس ما
              <span>0214557896</span>
            </li>
            <li class="li">
              <fa class="icon icon1" icon="envelope"></fa>ایمیل ما
              <span class="english">info@gmail.com</span>
            </li>
            <li class="li">
              <fa class="icon icon1" icon="clock"></fa>پاسخگویی 24 ساعته و 7 روز
              هفته
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  width: 1000px;
  background-color: orange;
  margin: 2rem auto;
  margin-bottom: 5rem;
  border-radius: 50px;
}
#format {
  width: 88%;
  // text-indent: 10px;
  height: 40px;
  text-align: right;
  text-indent: 10px;
  border-radius: 10px;
  border: 0.5px solid orangered;
  display: block;
  background-image: none;
  background-color: white;
  appearance: none;
  outline: none;
  font-family: "BYekan";
}
.contactul {
  direction: rtl;
}
.last {
  // text-align: center;
  margin-right: 40%;
  padding: 3rem 0 3rem 0;
}
.li {
  margin-top: 10px;
}
li {
  text-decoration: none;
  list-style: none;
}
.question {
  margin-top: 2rem;
}
.call {
  direction: rtl;
  padding: 30px 30px 0 0;
  font-size: 18px;
  //   font-weight: 400;
}
.icon {
  margin-left: 5px;
}
.topul {
  display: flex;
  justify-content: space-between;
  direction: rtl;
  margin-bottom: 1rem;
  padding: 0 30px;
}

.btn {
  background-color: orangered;
  color: white;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s;
  text-decoration: none;
  border: 1px solid orangered;

  &:hover {
    border: 1px solid orangered;
    color: orangered;
    background-color: white;
  }
}
.map {
  width: 458px;
  border-radius: 10px;
}
.form {
  display: grid;
  direction: rtl;
  grid-template-columns: repeat(2, 500px);
  grid-template-rows: repeat(2, 100px);
  margin-right: 30px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.icon1 {
  font-size: 20px;
  margin-left: 10px;
}
input {
  // padding: 8px 155px;
  // position: absolute;
  width: 88%;
  text-indent: 10px;
  height: 40%;
  text-align: right;
  border-radius: 10px;
  border: 0.5px solid rgb(138, 10, 99);
  display: block;
}

.massege {
  width: 800px;
}
textarea {
  display: block;
  resize: none;
  text-indent: 10px;
  width: 88%;
  border-radius: 10px;
  border: 0.5px solid rgb(138, 10, 99);
  text-indent: 10px;
  border: 1px solid rgb(138, 10, 99);
  outline: none;
  background-color: transparent;
  font-family: "BYekan";
  background-color: white;
}
button {
  width: 30%;
  height: 20%;
  margin-right: 56%;
  margin-top: 35%;
  border-radius: 5px;
  border: 1px solid gold;
  color: black;
  background-color: gold;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: white;
    border: 1px solid green;
    background-color: green;
  }
}
.info {
  display: flex;
  direction: rtl;
  margin-top: 2rem;
  padding: 30px;
  justify-content: space-between;
}
.right {
  width: 40%;
}
.left {
  width: 50%;
}
.box {
  margin-bottom: 3rem;
}
.box:last-child {
  margin-bottom: 0;
}
</style>