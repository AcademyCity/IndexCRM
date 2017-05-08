<template>
  <div class="suggestOne">
    <div class="suggestOneBox">
      <div class="suggestInfo">
        <div class="suggestInfoTitle">用餐信息</div>
        <div class="suggestInfoContent">
          <mt-cell v-for="(item,index) in items" :key="item.message" :title="item.detail" :label="item.time">
            <span v-if="item.type" style="color: #86C166;">{{"+"+item.message}}</span>
            <span v-else style="color: #CB1B45;">{{"-"+item.message}}</span>
          </mt-cell>
        </div>
  
      </div>
      <mt-button type="custom" @click="next">下一步</mt-button>
    </div>
  </div>
</template>
<script>


export default {
  name: 'login',
  components: {
    items: [
      { message: '133', time: '2017.05.03 17:25', type: 0, detail: "兑换优惠券" },
      { message: '90', time: '2017.05.03 17:25', type: 1, detail: "消费赠送" },
      { message: '56', time: '2017.05.03 17:25', type: 0, detail: "兑换优惠券" },
      { message: '59', time: '2017.05.03 17:25', type: 1, detail: "消费赠送" },
      { message: '156', time: '2017.05.03 17:25', type: 0, detail: "兑换优惠券" },
      { message: '88', time: '2017.05.03 17:25', type: 0, detail: "兑换优惠券" },
      { message: '99', time: '2017.05.03 17:25', type: 1, detail: "消费赠送" },
      { message: '321', time: '2017.05.03 17:25', type: 1, detail: "消费赠送" },
    ]
  },
  mounted() {
  },
  methods: {
    next: function () {
      this.$router.push({ path: '/suggest/suggestTwo' })
    }
  }
}
</script>

<style scoped>
.suggestOneBox {
  padding: 0 .5rem;
  padding-top: 55px
}

.suggestInfo {
  border-radius: 6px;
  background: #fff;
}

.suggestInfoTitle {
  color: #fff;
  background: #86C166;
  padding: 0 .6rem;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: .45rem;
  border-radius: 6px 6px 0 0;
}

.suggestInfoContent {
  color: #0B1013;
  padding: 0 .6rem;
  height: 1rem;
  line-height: 1rem;
  font-size: .35rem;
}
</style>
