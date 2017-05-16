<template>
  <div class="content">
    <mt-navbar v-model="selected">
      <mt-tab-item id="pointNum">我的积分</mt-tab-item>
      <mt-tab-item id="pointRecord">积分记录</mt-tab-item>
    </mt-navbar>
  
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="pointNum">
        <div class="pointNum">
          1017276598
        </div>
        <div class="pointHint">
          暂无可兑换优惠券
        </div>
        <div class="ruleBox">
          <div class='ruleTitle'>积分规则</div>
          <div class='ruleContent'>
            <p>
              1、消费1元赠送1积分
              <br> 2、积分不可兑换现金，不开发票
              <br> 3、当年累计积分，将在次年4月12日清零
            </p>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="pointRecord">
        <!--<mt-cell v-for="(item,index) in items" :key="item.message" :title="'积分:' + item.message" />-->
        <mt-cell v-for="(item,index) in items" :key="item.message" :title="item.detail" :label="item.time">
          <span v-if="item.type" style="color: #86C166;">{{"+"+item.message}}</span>
          <span v-else style="color: #CB1B45;">{{"-"+item.message}}</span>
        </mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>

export default {
  data() {
    return {
      selected: 'pointNum',
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
    }
  },
  watch: {
    // selected: function (val, oldVal) {
    //   // 这里就可以通过 val 的值变更来确定
    //   console.log(val + '--' + oldVal)
    // }
  },
  components: {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped>

.pointNum {
  height: 1.8rem;
  line-height: 2rem;
  font-size: .6rem;
  color: #ffffff;
  text-align: right;
  background: #86C166;
  border-radius: 6px 6px 0 0;
  padding: 0 .5rem;
}

.pointHint {
  height: 1rem;
  line-height: 1rem;
  font-size: .35rem;
  color: #0B1013;
  text-align: right;
  background: #ffffff;
  border-radius: 0 0 6px 6px;
  padding: 0 .5rem;
}

.mint-cell-text {
  font-size: .25rem;
}

.mint-cell:last-child {
    border-radius: 0;
}


</style>
