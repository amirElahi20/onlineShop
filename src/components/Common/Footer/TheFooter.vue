<template>
 <div>
    <div class="footer" :class="{'layout' : $route.path == '/register' || $route.path == '/login' || $route.path == '/forget'}">
        <div class="top-footer">
            <h3 class="txt">کامپیوتر شاپ</h3>
            <span>تلفن پشتیبانی : 025895211</span>
            <span>هفت روز هفته پاسخگوی شما هستیم</span>
        </div>
        <div class="main-footer">
            <ul>
                <li><h3 class="txt">با کامپیوتر شاپ</h3></li>
                <li class="sub-txt">اتاق خبر کامپیوتر شاپ</li>
                <li class="sub-txt">فروش در کامپیوتر شاپ</li>
                <li class="sub-txt">فرصت های شغلی</li>
                <li class="sub-txt">تماس با کامپیوتر شاپ</li>
            </ul>
            <ul>
                <li><h3 class="txt">خدمات مشتریان</h3></li>
                <li class="sub-txt">پاسخ به پرسش های متداول</li>
                <li class="sub-txt">رویه های بازگرداندن کالا</li>
                <li class="sub-txt">گزارش باگ</li>
            </ul>
            <ul>
                <li><h3 class="txt">راهنمای خرید از کامپیوتر شاپ</h3></li>
                <li class="sub-txt">نحوه ثبت سفارش</li>
                <li class="sub-txt">رویه ارسال سفارش</li>
                <li class="sub-txt">شیوه های پرداخت</li>
            </ul>
        </div>
        <div class="bottom-footer">
            <div class="right-column">
                <h3 class="txt t1">فروشگاه اینترنتی کامپیوتر شاپ ، بررسی ، انتخاب و خرید آنلاین</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatum sed nam molestias eligendi atque nostrum nisi corporis fugit, natus, quos modi eveniet blanditiis magnam quibusdam quaerat veniam reprehenderit. Nobis.</p>
            </div>
            <div class="left-column">
                <img src="../../../../public/img/namad.jpg" alt="">
                <img src="../../../../public/img/neshan.jpg" alt="">
            </div>
        </div>
    </div>
 </div>
</template>


<script>
export default {};
</script>


<style lang="scss" scoped>

.footer{
   background-image: linear-gradient(to right ,#ff4e00 , #ec9f05);
}
.layout{
    display: none;
}
.top-footer{
    color:white;
    direction: rtl;
    padding-right: 20px;
    padding-top: 1rem;
}
.txt{
    font-size: 18px;
}
span::after {
    content: "";
    width: 2px;
    height: 19px;
    background-color : white;
    position: absolute;
    right: 208px;
}
span{
    padding-left: 20px;
}

span:last-child::after {
    display: none;
}

.main-footer{
    display: flex;
    direction: rtl;
    justify-content: space-around;
    padding-top: 2rem;
    color: white;
}
.sub-txt{
    font-size: 14px;
}
.bottom-footer{
    
    display: flex;
    direction: rtl;
    padding-top: 2rem;
    color: white;
}
.right-column{
    width: 50%;
    padding-right: 20px;
}
.left-column{
    width: 50%;
    display: flex;
    justify-content: center;
}
.t1{
    padding-bottom: 1rem;
}
img{
    width: 200px;
    height: 100px;
    // padding-right: 15px;
    margin-right: 15px;
    border-radius: 10px;
 
}

</style>


