<template>
    <div class="confirm">
        <div class="topalert">
            <h3>کاربر گرامی ، ایمیل شما با موفقیت فعال شد</h3>
        </div>
        <div class="mainalert">با کلیک بر روی دکمه ی زیر به سایت برگردید</div>
        <router-link class="btn" @click="confirm" to="/login"> بازگشت به سایت</router-link>
        <div>{{ token }}</div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return{
          token: this.$route.params.token,
        }
    },
    methods:{
      confirm() {
        axios.post('https://onshop321.herokuapp.com/accounts/v1/check_confirm_email/',{
          token : this.token
        })
        .then(response=>{
            console.log(response)
            // this.$router.push('/login');
        })
    },
    }
}
</script>


<style lang="scss" scoped>
  .topalert{
      background-color: pink;
      padding: 20px;
      font-size: 20px;
      margin-bottom: 2rem;
  }
  .confirm{
      text-align: center;
  }
  .mainalert{
      font-size: 18px;
      margin-bottom: 2rem;
  }
  .btn{
   text-decoration: none;
  padding: 20px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
  background-color: #fc5296;
  margin-bottom: 2rem;
  cursor: pointer;
  color: white;
  font-size: 14px;
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
  background-color: #fc5296;
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


</style>