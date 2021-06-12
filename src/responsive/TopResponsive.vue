<template>
  <div>
    <div class="top">
    <ul>
    <li class="english logo">SAKURA</li>
    <li></li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
@import "../styles/mixins.scss";
.top {
  display: none;

  @include respond(phone) {
    display: block;
  }
}
.logo{
  padding: 10px 0 0 10px;
}
</style>