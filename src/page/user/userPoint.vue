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
          {{vipPoint}}
        </div>
        <div class="pointHint">
          {{couponName}}
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
        <mt-cell v-for="(item,index) in items" :key="item.PointChange" :title="item.PointExplain" :label="item.AddTime.replace('T',' ').substr(0 , 19)">
          <span v-if="item.PointChange>0" style="color: #86C166;">{{"+"+item.PointChange}}</span>
          <span v-else style="color: #CB1B45;">{{item.PointChange}}</span>
        </mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui"

export default {
  data() {
    return {
      selected: "pointNum",
      vipPoint: 0,
      couponName: " 暂无可兑换优惠券",
      items: null
    };
  },
  components: {},
  mounted() {
    this.getVipPoint();
  },
  methods: {
    getVipPoint: function() {
      this.$http.get("Point/GetVipPoint?openId=" + this.$store.state.common.login.openId )
        .then(response => {
          if (response.success) {
            this.vipPoint = response.message.score,
            this.couponName = "可兑换优惠券【" + response.message.couponName + "】",
            this.items = response.message.pointRecord
          } else {
            MessageBox.alert(response.message).then(action => {
              this.$store.dispatch('common/login/logOut')
              window.location.reload();
            });
          }
        })
        .catch(error => {
            MessageBox.alert('发生错误:' + error).then(action => {
              this.$store.dispatch('common/login/logOut')
              window.location.reload();
            });
        });
    }
  }
};
</script>

<style scoped>
.pointNum {
  height: 1.8rem;
  line-height: 2rem;
  font-size: 0.6rem;
  color: #ffffff;
  text-align: right;
  background: #86c166;
  border-radius: 6px 6px 0 0;
  padding: 0 0.5rem;
}

.pointHint {
  height: 1rem;
  line-height: 1rem;
  font-size: 0.35rem;
  color: #0b1013;
  text-align: right;
  background: #ffffff;
  border-radius: 0 0 6px 6px;
  padding: 0 0.5rem;
}

.mint-cell-text {
  font-size: 0.25rem;
}

.mint-cell:last-child {
  border-radius: 0;
}
</style>
