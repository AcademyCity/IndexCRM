<template>
  <div class="userCoupon">
    <div class="userCouponBox">
      <mt-navbar v-model="selected">
        <mt-tab-item id="validCoupon">可使用</mt-tab-item>
        <mt-tab-item id="useCoupon">已使用</mt-tab-item>
        <mt-tab-item id="invalidCoupon">已过期</mt-tab-item>
      </mt-navbar>
  
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="validCoupon">
          <div class="couponBox" @click="couponInfo" v-for="(item,index) in items" :key="index">
            <div class="couponImgBox" :class="{grayImg:item.isUse}">
              <img class="couponImg" :class="{grayImg:item.isUse}" :src="item.url" />
            </div>
  
            <div class="couponTag">
              <div class="couponName" :class="{grayText:item.isUse}">
                {{item.message}}
              </div>
              <div class="couponTime" :class="{grayText:item.isUse}">
                {{item.time}}-{{item.time}} 有效
              </div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="useCoupon">
          <div class="couponBox" v-for="(item,index) in items" :key="index">
            <div class="couponImgBox">
              <img class="couponImg" :src="item.url" />
            </div>
  
            <div class="couponTag">
              <div class="couponName">
                {{item.message}}
              </div>
              <div class="couponTime">
                {{item.time}}-{{item.time}}
              </div>
            </div>
            <span class="useTag">已使用</span>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="invalidCoupon">
          <div class="couponBox" v-for="(item,index) in items" :key="index">
            <div class="couponImgBox grayImg">
              <img class="couponImg grayImg" :src="item.url" />
            </div>
            <div class="couponTag">
              <div class="couponName grayText">
                {{item.message}}
              </div>
              <div class="couponTime grayText">
                {{item.time}}-{{item.time}}
              </div>
            </div>
            <span class="expiredTag">已过期</span>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import a from '../../assets/images/1.jpg'
import b from '../../assets/images/2.jpg'
import c from '../../assets/images/3.jpg'
import d from '../../assets/images/4.jpg'
import e from '../../assets/images/5.jpg'
import f from '../../assets/images/6.jpg'

export default {
  name: 'userCoupon',
  data() {
    return {
      selected: 'validCoupon',
      items: [
        { message: '土豆', time: '2017.05.03', url: a, isUse: false },
        { message: '樱桃谷鸭血', time: '2017.05.03', url: b, isUse: false },
        { message: '进口原块牛肉(小)', time: '2017.05.03', url: c, isUse: false },
        { message: '进口原块牛肉套餐', time: '2017.05.03', url: d, isUse: true },
        { message: '铁棍山药', time: '2017.05.03', url: e, isUse: false },
        { message: '台式花枝丸', time: '2017.05.03', url: f, isUse: true }
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
    couponInfo: function () {
      this.$router.push({ path: '/coupon/couponInfo' })
    }
  }
}
</script>

<style scoped>
.userCouponBox {
  padding: 0 .5rem;
  padding-top: 55px;
}

.mint-navbar {
  margin-bottom: 13px;
}

.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #86C166;
  color: #86C166;
}

.couponBox {
  margin-bottom: .15rem;
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
  padding: .4rem .7rem;
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
  padding: .8rem 0 .6rem 0;
  line-height: .7rem;
}

.couponName {
  font-size: .45rem;
  color: #86C166;
  height: .7rem;
}

.couponTime {
  font-size: .35rem;
  color: #0B1013;
  height: .7rem;
}

.useTag {
  padding: .1rem .7rem;
  color: #CC543A;
  font-size: .4rem;
  border: 3px #CC543A solid;
  font-weight: bold;
  position: absolute;
  bottom: .9rem;
  right: .8rem;
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
  padding: .1rem .7rem;
  color: #808080;
  font-size: .4rem;
  border: 3px #808080 solid;
  font-weight: bold;
  position: absolute;
  bottom: .9rem;
  right: .8rem;
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
