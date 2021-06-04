<template>
  <div>
    <div class="container">
      <table class="table">
        <tr class="table-row">
          <th class="th">عکس</th>
          <th class="th">نام</th>
          <th class="th">قیمت</th>
          <th class="th">تعداد</th>
          <th class="th">حذف</th>
        </tr>

        <svg height="1" width="100%">
          <line
            x1="3%"
            y1="0"
            x2="97%"
            y2="0"
            style="stroke: rgb(0, 0, 0); stroke-width: 1"
          />
        </svg>
        <tr class="table-row data">
          <td>
            <img
              class="image"
              src="../../../public/img/mockup-graphics-enNffryKuQI-unsplash.jpg"
              alt=""
            />
          </td>
          <td class="td">آلو</td>
          <td class="td">تومان20000</td>
          <td class="td">3</td>
          <td class="td">
            <fa icon="minus" class="delete"></fa>
          </td>
        </tr>
        <svg height="1" width="100%">
          <line
            x1="3%"
            y1="0"
            x2="97%"
            y2="0"
            style="stroke: rgb(0, 0, 0); stroke-width: 1"
          />
        </svg>
        <tr class="table-row data">
          <td>
            <img
              class="image"
              src="../../../public/img/mockup-graphics-enNffryKuQI-unsplash.jpg"
              alt=""
            />
          </td>
          <td class="td">آلو</td>
          <td class="td">تومان20000</td>
          <td class="td">3</td>
          <td class="td">
            <fa icon="minus" class="delete"></fa>
          </td>
        </tr>
      </table>
    </div>
    <div class="payment">
      <table class="cost-table">
        <tr class="table-r">
          <th>مبلغ کالاها:</th>
          <td class="table-data">56000</td>
        </tr>
        <tr class="table-r">
          <th>تخفیف:</th>
          <td class="table-data">30000</td>
        </tr>
        <tr class="table-r">
          <th>مبلغ نهایی:</th>
          <td class="table-data">26000</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.container {
  width: 1200px;
  // height: 500px;
  background-color: whitesmoke;
  margin: 2rem auto;
  direction: rtl;
  border-radius: 50px;
  box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
}
.table-row {
  width: 1200px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.image {
  width: 50px;
  border-radius: 10px;
  border: 1px solid brown;
}
.data {
  margin-top: 30px;
}
.delete {
  background-color: red;
  color: white;
  width: 45px;
  height: 25px;
  border-radius: 5px;
  cursor: pointer;
}
.payment {
  box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
background-color: whitesmoke;
  border-radius: 10px;
  width: 500px;
  margin: 0 auto;
  direction: rtl;
}
.table-data {
  padding-right: 50px;
}
.cost-table {
  display: flex;
  justify-content: center;
  padding: 50px;
}
</style>