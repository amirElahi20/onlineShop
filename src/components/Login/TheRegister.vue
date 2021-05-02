<template>
  <div>
    <div class="log">
      <section class="login">
        <div class="row">
          <div class="form">
            <div class="form__login">
              <form action="#" class="list">
                <h2 class="topform">ثبت نام</h2>
                <div class="list__group">
                  <input
                    type="text"
                    class="list__input"
                    placeholder="اسمتو بنویس "
                    id="name"
                    required
                  />
                  <label for="name" class="list__label">نام کاربری</label>
                </div>
                <div class="list__group">
                  <input
                    type="password"
                    class="list__input"
                    placeholder="رمز عبورتو وارد کن"
                    id="password"
                    required
                  />
                  <label for="name" class="list__label">رمز عبور</label>
                </div>
                <div class="list__group">
                  <input
                    type="email"
                    class="list__input"
                    placeholder="ایمیلتو وارد کن"
                    id="email"
                    required
                  />
                  <label for="name" class="list__label">ایمیل</label>
                </div>
                <button class="submit-btn" type="submit">ثبت نام</button>
              </form>
             <h5 class="txt"> عضو هستید؟؟ پس <router-link to="/login">وارد شوید</router-link></h5>
            <router-link class="back-btn" to="/">بازگشت</router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style lang="scss" scoped>
.log{
  display: flex;
  justify-content: center;
}
.login {
  padding: 3rem 0;
  // display: flex;
  width: 1000px;
  // position: absolute;
  // left: 250px;
  // justify-content: center;
  // background-color: rgba(0, 0, 0, 0.5);
}
.topform {
  margin-bottom: 20px;
  text-align: center;
  margin-top: -50px;
}
.form {
  width: 100%;
  height: 38rem;
  background-image: linear-gradient(
      105deg,
      rgba(white, 0.9) 0%,
      rgba(white, 0.7) 50%,
      transparent 50%
    ),
    url("../../../public/img/h3.png");
  //   background-color: #2d3436;
  background-size: cover;
  background-position: top;
  position: relative;
  border-radius: 30px;
  box-shadow: 1rem 2rem 2rem rgba(rgb(15, 15, 15), 0.8);

  &__login {
    width: 50%;
    padding: 6rem;
  }
}
.list {
  &__group:not(:last-child) {
    margin-bottom: 1rem;
  }

  &__input {
    font-size: 17px;
    height: 50px;
    padding-right: 10px;
    border-radius: 10px;
    background-color: rgba(rgb(255, 255, 255), 0.9);
    border: none;
    text-align: right;
    border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    color: inherit;

    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(rgb(15, 15, 15), 0.2);
      border-bottom: 3px solid rgb(15, 190, 15);
    }

    &:focus:invalid {
      border-bottom: 3px solid red;
    }

    &::-webkit-input-placeholder {
      color: #999;
    }
  }

  &__label {
    font-size: 1rem;
    font-weight: 700;
    //   margin-left: 22rem;
    margin-right: 3rem;
    margin-top: 0.7rem;
    display: block;
    direction: rtl;
    transition: all 0.3s;
  }

  &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
}
.submit-btn{
  padding: 10px;
  display: flex;
  width: 90%;
  cursor: pointer;
  border-radius: 10px;
  // height: 40px;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgb(18, 18, 126);
   transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
}
.txt{
  text-align: center;
  padding-right: 1rem;
  padding-top: 1rem;
  font-size: 15px;
}
.back-btn{
  padding:10px;
  display: flex;
  justify-content: center;
  width:90%;
  margin-top: 1rem;
  border-radius: 10px;
  background-color: purple;
  color: white;
  cursor: pointer;
  text-decoration: none;
   transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>