<template>
  <div>
    <div v-for="title in AboutUs" :key="title.id" class="aboutus-part">
      <div class="aboutus" v-if="title.id % 2 ==0">
        <div class="right">
          <div class="combine">
            <h1 class="heading-secondary">{{title.title}}</h1>
            <h3 class="sub-secondary">{{title.sub_title}}</h3>
            <p>
             {{title.body}}
            </p>
          </div>
        </div>
        <div class="left">
          <img class="image" :src="title.picture" alt="pic1" />
        </div>
      </div>
      <div class="aboutus2" v-if="title.id % 2 !=0">
        <div class="right">
          <div class="combine second-paragraph">
            <h1 class="heading-secondary">
              {{title.title}}
            </h1>
            <h3 class="sub-secondary">{{title.sub_title}}</h3>
            <p>
         {{title.body}}
            </p>
          </div>
        </div>
        <div class="left">
          <img class="image2" :src="title.picture" alt="pic2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{};
  },
  computed:{

    AboutUs() {
      return this.$store.getters.GetAboutInformation;
    },
  },
  created(){
    this.$store.dispatch("GetAboutUsFromServer");
  }
};
</script>

<style lang="scss" scoped>
.aboutus {
  border-radius: 10px;
  width: 1400px;
  margin: 2rem auto 4rem auto;
  height: auto;
  display: flex;
  direction: rtl;
  border: 1px solid brown;
  box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
}
.aboutus2 {
  // background-color: red;
  border-radius: 10px;
  width: 1400px;
  margin: 2rem auto;
  height: auto;
  display: flex;
  border: 1px solid brown;
  box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
}
.right {
  width: 70%;
  direction: rtl;
  // background-color: green;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.left {
  width: 30%;
  // background-color: yellow;
}
.combine {
  width: 80%;
  margin: 10px 20px 0 10px;
}
.image {
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.image2 {
  width: 100%;
  height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.second-paragraph {
  margin-right: 120px;
}
$color-primary-dark: orange;
$color-primary-light: orangered;
.heading-secondary {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  background-image: linear-gradient(
    to right,
    $color-primary-dark,
    $color-primary-light
  );
  -webkit-background-clip: text;
  display: inline-block;
  color: transparent;
  transition: all 0.3s;
}
.sub-secondary {
  color: brown;
  margin: 0.5rem 0px 2rem 0px;
}
p{
  margin-bottom: 1rem;
}
</style>