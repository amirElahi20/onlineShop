<template>
  <div>
    <div class="success">
      <fa class="icon" icon="check"></fa>
      <h3 class="title">ارسال ایمیل<span> موفقیت آمیز </span> بود</h3>
      <p class="subtitle">لطفا ایمیل خود را بررسی گنید</p>
      <button type="submit" @click="onclickButton">باشه!</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupstatus: false,
    };
  },
  methods: {
    onclickButton() {
      this.$emit("popup-ok", this.popupstatus);
    //   this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.success {
  position: absolute;
  z-index: 999;
  background-color: rgb(80, 39, 194);
  padding: 50px;
  text-align: center;
  border-radius: 50px;
  direction: rtl;
  top: 25%;
  left: 35%;
  color: white;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.title {
  font-size: 22px;
}
span {
  color: rgb(14, 236, 14);
}
.subtitle {
  margin-bottom: 2rem;
}

button {
  width: 100px;
  height: 50px;
  margin-right: 70px;
  border-radius: 20px;
  border: 1px solid white;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  list-style: none;

  &:hover {
    background-color: rgb(14, 236, 14);
    color: white;
    border: 1px solid rgb(14, 236, 14);
  }
}
.icon {
  margin-bottom: 1rem;
  margin-top: -20px;
  font-size: 50px;
  margin-right: 90px;
  color: rgb(14, 236, 14);
}
</style>