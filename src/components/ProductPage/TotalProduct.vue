<template>
    <div>
        <div class="total">
            <div class="right">

            </div>
            <div class="left">
                <h2 class="header">محصولات</h2>
                <div class="row">
                    <div class="box">
                        <img class="image" src="../../../public/img/airpad.webp" alt="">
                        <p class="paragrapg">پرتقال</p>
                        <span class="cost">50000  <span> تومان</span></span>
                        <a class="btn">مشاهده محصول</a>
                   </div>
                   <div class="box">
                        <img class="image" src="../../../public/img/airpad.webp" alt="">
                        <p class="paragrapg">پرتقال</p>
                        <span class="cost">50000  <span> تومان</span></span>
                        <a class="btn">مشاهده محصول</a>
                   </div>
                   <div class="box">
                        <img class="image" src="../../../public/img/airpad.webp" alt="">
                        <p class="paragrapg">پرتقال</p>
                        <span class="cost">50000  <span> تومان</span></span>
                        <a class="btn">مشاهده محصول</a>
                   </div>
                   <div class="box">
                        <img class="image" src="../../../public/img/airpad.webp" alt="">
                        <p class="paragrapg">پرتقال</p>
                        <span class="cost">50000  <span> تومان</span></span>
                        <a class="btn">مشاهده محصول</a>
                   </div>
                   <div class="box">
                        <img class="image" src="../../../public/img/airpad.webp" alt="">
                        <p class="paragrapg">پرتقال</p>
                        <span class="cost">50000  <span> تومان</span></span>
                        <a class="btn">مشاهده محصول</a>
                   </div>
                   <div class="box">
                        <img class="image" src="../../../public/img/airpad.webp" alt="">
                        <p class="paragrapg">پرتقال</p>
                        <span class="cost">50000  <span> تومان</span></span>
                        <a class="btn">مشاهده محصول</a>
                   </div>
                   <div class="box">
                        <img class="image" src="../../../public/img/airpad.webp" alt="">
                        <p class="paragrapg">پرتقال</p>
                        <span class="cost">50000  <span> تومان</span></span>
                        <a class="btn">مشاهده محصول</a>
                   </div>
                   <div class="box">
                        <img class="image" src="../../../public/img/airpad.webp" alt="">
                        <p class="paragrapg">پرتقال</p>
                        <span class="cost">50000  <span> تومان</span></span>
                        <a class="btn">مشاهده محصول</a>
                   </div>
                   <div class="box">
                        <img class="image" src="../../../public/img/airpad.webp" alt="">
                        <p class="paragrapg">پرتقال</p>
                        <span class="cost">50000  <span> تومان</span></span>
                        <a class="btn">مشاهده محصول</a>
                   </div>
                   <div class="box">
                        <img class="image" src="../../../public/img/airpad.webp" alt="">
                        <p class="paragrapg">پرتقال</p>
                        <span class="cost">50000  <span> تومان</span></span>
                        <a class="btn">مشاهده محصول</a>
                   </div>
                   <div class="box">
                        <img class="image" src="../../../public/img/airpad.webp" alt="">
                        <p class="paragrapg">پرتقال</p>
                        <span class="cost">50000  <span> تومان</span></span>
                        <a class="btn">مشاهده محصول</a>
                   </div>
                   <div class="box">
                        <img class="image" src="../../../public/img/airpad.webp" alt="">
                        <p class="paragrapg">پرتقال</p>
                        <span class="cost">50000  <span> تومان</span></span>
                        <a class="btn">مشاهده محصول</a>
                   </div>
                   <div class="box">
                        <img class="image" src="../../../public/img/airpad.webp" alt="">
                        <p class="paragrapg">پرتقال</p>
                        <span class="cost">50000  <span> تومان</span></span>
                        <a class="btn">مشاهده محصول</a>
                   </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.header{
    text-align: center;
}
    .total{
        // width: 200px;
        height: auto;
        // background-color: blue;
        display: flex;
        direction: rtl;
        padding:5rem 0 5rem 0;
    }
    .right{
        width: 20%;
        background-color: yellow;
    }
    .left{
        width: 80%;
        // background-color: pink;
        padding-right: 15px;
    }
    .row{
        // background-color: green;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 10px;

    }
    .box{
        background-color:whitesmoke;
        text-align: center;
        padding: 15px;
        margin-left: 20px;
        margin-top: 20px;
        border-radius: 10px;
        width: 210px;
        border: 1px solid rgb(138, 10, 99);
        transition: all 0.5s;
        &:hover{

         box-shadow: 0.5rem 1rem 1rem rgba(rgb(163, 158, 158), 0.5);
        }
    }
    .image{
        width: 180px;
        border: 1px solid black;
        border-radius: 10px;
    }
    .paragraph{
        display: block;
        font-weight: bold;
        font-size: 20px;
    }
    .cost{
        display: block;
    }
    .btn{
        display: block;
        text-align: center;
        background-color: rgb(192, 13, 138);
        padding: 5px;
        border-radius: 10px;
        font-size: 13px;
        margin-top: 10px;
        cursor: pointer;
        color: white;
        border: 1px solid rgb(192, 13, 138);
        transition: all 0.5s;
        // width: 60%;
        &:hover{
           background-color: white ;
           border:1px solid rgb(192, 13, 138);
           color: rgb(192, 13, 138);
        }
    }
</style>