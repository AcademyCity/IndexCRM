<template>
  <div class="content">
    <mt-navbar v-model="selected">
      <mt-tab-item id="validCoupon">可使用</mt-tab-item>
      <mt-tab-item id="useCoupon">已使用</mt-tab-item>
      <mt-tab-item id="invalidCoupon">已过期</mt-tab-item>
    </mt-navbar>
  
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="validCoupon">
        <div class="couponBox" @click="couponInfo(item)" v-for="(item,index) in items" :key="index" v-if="!item.isUse && !isExpired(item.EndTime)">
          <div class="couponImgBox" :class="{grayImg:!isUsable(item.StartTime)}">
            <img class="couponImg" :class="{grayImg:!isUsable(item.StartTime)}" :src="item.CouponImg" />
          </div>
  
          <div class="couponTag">
            <div class="couponName" :class="{grayText:!isUsable(item.StartTime)}">
              {{item.CouponName}}
            </div>
            <div class="couponTime" :class="{grayText:!isUsable(item.StartTime)}">
              {{item.StartTime.replace('T',' ').substr(0 , 10)}} 至 {{item.EndTime.replace('T',' ').substr(0 , 10)}} 有效
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="useCoupon">
        <div class="couponBox" v-for="(item,index) in items" :key="index" v-if="item.isUse">
          <div class="couponImgBox grayImg">
            <img class="couponImg grayImg" :src="item.CouponImg" />
          </div>
  
          <div class="couponTag">
            <div class="couponName grayText">
              {{item.CouponName}}
            </div>
            <div class="couponTime grayText">
              {{item.StartTime.replace('T',' ').substr(0 , 10)}} 至 {{item.EndTime.replace('T',' ').substr(0 , 10)}} 有效
            </div>
          </div>
          <span class="useTag">已使用</span>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="invalidCoupon">
        <div class="couponBox" v-for="(item,index) in items" :key="index"  v-if="!item.isUse && isExpired(item.EndTime)">
          <div class="couponImgBox grayImg">
            <img class="couponImg grayImg" :src="item.CouponImg" />
          </div>
          <div class="couponTag">
            <div class="couponName grayText">
              {{item.CouponName}}
            </div>
            <div class="couponTime grayText">
              {{item.StartTime.replace('T',' ').substr(0 , 10)}} 至 {{item.EndTime.replace('T',' ').substr(0 , 10)}} 有效
            </div>
          </div>
          <span class="useTag">已过期</span>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      selected: "validCoupon",
      items: null
      //  [
      //   { message: '土豆', time: '2017.05.03', url: a, isUse: false },
      //   { message: '樱桃谷鸭血', time: '2017.05.03', url: b, isUse: false },
      //   { message: '进口原块牛肉(小)', time: '2017.05.03', url: c, isUse: false },
      //   { message: '进口原块牛肉套餐', time: '2017.05.03', url: d, isUse: true },
      //   { message: '铁棍山药', time: '2017.05.03', url: e, isUse: false },
      //   { message: '台式花枝丸', time: '2017.05.03', url: f, isUse: true }
      // ]
    };
  },
  mounted() {
    this.getVipCoupon();
  },
  methods: {
    couponInfo: function(obj) {
      if (this.isUsable(obj.StartTime)) {
        this.$router.push({
          path: "/coupon/couponInfo",
          query: { couponId: obj.CouponId }
        });
      }
    },
    isExpired: function(EndTime) {
      EndTime = EndTime.replace("T", " ").substr(0, 10);
      return (
        new Date(new Date(EndTime).toDateString()) <
        new Date(new Date().toDateString())
      );
    },
    isUsable: function(StartTime) {
      StartTime = StartTime.replace("T", " ").substr(0, 10);
      return (
        new Date(new Date(StartTime).toDateString()) <=
        new Date(new Date().toDateString())
      );
    },
    getVipCoupon: function() {
      this.$http
        .get(
          "Coupon/GetVipCoupon?openId=" + this.$store.state.common.login.openId
        )
        .then(response => {
          if (response.success) {
            this.items = response.message;
          } else {
            MessageBox.alert(response.message).then(action => {
              this.$store.dispatch("common/login/logOut");
              window.location.reload();
            });
          }
        })
        .catch(error => {
          MessageBox.alert("发生错误:" + error).then(action => {
            this.$store.dispatch("common/login/logOut");
            window.location.reload();
          });
        });
    }
  }
};
</script>

<style scoped>
.couponBox {
  margin-bottom: 0.15rem;
  width: 100%;
  height: 2.8rem;
  background: #ffffff;
  border-radius: 6px;
  position: relative;
}

.couponBox:last-child {
  margin-bottom: 1rem;
}

.couponImgBox {
  float: left;
  width: 3.4rem;
  height: 2.8rem;
  padding: 0.4rem 0.7rem;
}

.couponImg {
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
}

.grayImg {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}

.grayText {
  color: #808080 !important;
}

.couponTag {
  float: left;
  text-align: left;
  padding: 0.8rem 0 0.6rem 0;
  line-height: 0.7rem;
}

.couponName {
  font-size: 0.45rem;
  color: #86c166;
  height: 0.7rem;
}

.couponTime {
  font-size: 0.33rem;
  color: #0b1013;
  height: 0.7rem;
}

.useTag {
  padding: 0.1rem 0.7rem;
  color: #cc543a;
  font-size: 0.4rem;
  border: 3px #cc543a solid;
  font-weight: bold;
  position: absolute;
  bottom: 0.9rem;
  right: 0.8rem;
  /* Rotate div */
  transform: rotate(-25deg);
  -ms-transform: rotate(-25deg);
  /* Internet Explorer */
  -moz-transform: rotate(-25deg);
  /* Firefox */
  -webkit-transform: rotate(-25deg);
  /* Safari 和 Chrome */
  -o-transform: rotate(-25deg);
  /* Opera */
}

.expiredTag {
  padding: 0.1rem 0.7rem;
  color: #808080;
  font-size: 0.4rem;
  border: 3px #808080 solid;
  font-weight: bold;
  position: absolute;
  bottom: 0.9rem;
  right: 0.8rem;
  /* Rotate div */
  transform: rotate(-25deg);
  -ms-transform: rotate(-25deg);
  /* Internet Explorer */
  -moz-transform: rotate(-25deg);
  /* Firefox */
  -webkit-transform: rotate(-25deg);
  /* Safari 和 Chrome */
  -o-transform: rotate(-25deg);
  /* Opera */
}
</style>
