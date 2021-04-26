<template>
  <div>
    <transition name="fade">
      <div class="popup" v-show="!activePopup"></div>
    </transition>
    <!-- <responsive-header> -->
    <div
      :class="{
        scroll: scrollPosition >= 20,
        container: scrollPosition < 20,
      }"
    >
      <div class="container">
        <div class="right">
          <ul class="menu r">
            <li
              class="subbox"
              @mouseover="mouseover"
              @mouseleave="mouseleave"
              :class="{ active: !activePopup }"
            >
              <a href="#" class="sub">دسته بندی</a>
              <transition name="fade">
                <sub-menu
                  :position="scrollPosition"
                  v-show="!activePopup"
                ></sub-menu>
              </transition>
            </li>
            <li><a href="">راهنما</a></li>
            <li><a href="">گارانتی</a></li>
            <li><a href="">دست دوم</a></li>
            <li><a href="">ارتباط با ما</a></li>
          </ul>
        </div>
        <div class="left">
          <ul class="menu l">
            <search-box></search-box>
            <li class="shopping">
              <a href="#">
                <span class="badge">1</span>
                <i class="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- </responsive-header> -->
  </div>
</template>


<script>
import SearchBox from "../SearchBox/SearchBox.vue";
import SubMenu from "../SubMenus/SubMenu.vue";
// import ResponsiveHeader from '../../../../responsive/ResponsiveHeader.vue';
// import ResponsiveHeader from '../../../../responsive/ResponsiveHeader.vue';
export default {
  data() {
    return {
      activePopup: true,
      scrollPosition: 0,
      isSticky: false,
      // stickyClass : 'is_sticky'
    };
  },
  created() {
    window.addEventListener("scroll", this.updateScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.updateScroll);
  },
  components: {
    SubMenu,
    SearchBox,
    // ResponsiveHeader,
  },
  methods: {
    mouseover() {
      this.activePopup = false;
      console.log(this.activePopup);
    },
    mouseleave() {
      this.activePopup = true;
      console.log(this.activePopup);
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition >= 100) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
      console.log(this.scrollPosition);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../../styles/mixins.scss";

.menu {
  display: flex;
  list-style: none;
  text-decoration: none;
  direction: rtl;
  height: auto;
}
.r li {
  margin-left: 20px;
}
.container {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  direction: rtl;
  z-index: 999;
  transition: all 0.4s;
  width: 1200px;

  @include respond(tab-land) {
    width: 900px;
    margin: 0 auto;
  }

  @media (max-width: 1260px) {
    display: none;
  }
}
.scroll {
  background-color: grey;
  border-radius: 0px;
  margin-top: -100px;
  justify-content: space-around;
  display: flex;
  direction: rtl;
  transition: all 0.4s;
  padding: 12px;
  height: 70px;
  width: 100%;
  position: fixed;
  z-index: 999;

  @media (max-width: 1260px) {
    display: none;
  }
}

.rightmenu li .sub {
  color: black;
}
.sub {
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  /* border-radius: 10px; */
  margin-top: -5px;
  margin-left: 20px;
  padding: 12px 7px;
  transition: all 1s;
  color: black;
  /* cursor: pointer; */
  /* z-index: 999; */
}

a {
  color: white;
  font-size: 18px;
}

.rightmenu {
  display: flex;
  text-decoration: none;
  list-style: none;
  background-color: red;
}
.rightmenu li {
  padding-right: 30px;
}
.rightmenu li a {
  color: white;
  text-decoration: none;
}
.leftmenu {
  display: flex;
  text-decoration: none;
  list-style: none;
  background-color: blue;
}
.leftmenu li {
  margin: 15px 10px 15px 0px;
}
.leftmenu li a {
  color: white;
  text-decoration: none;
  display: flex;
  text-align: center;
}
.leftmenu li a i {
  font-size: 20px;
}
.badge {
  margin-left: 10px;
  background-color: crimson;
  padding: 0px 6px;
  border-radius: 50%;
}
.popup {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.836);
  opacity: 1;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.4s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: all 0.4s;
}

.fade-leave-to {
  opacity: 0;
}
</style>