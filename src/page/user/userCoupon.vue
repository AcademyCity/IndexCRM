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
          <div class="couponBox" v-for="(item,index) in items" :key="index">
            <img class="couponImg" :src="item.url" />
            <div class="couponTag" @click="couponDetail">
              <div class="couponName">
                {{item.message}}
              </div>
              <div class="couponTime">
                {{item.time}} - {{item.time}}
              </div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="useCoupon">
          <div class="couponBox" v-for="(item,index) in items" :key="index">
            <img class="couponImg" :src="item.url" />
            <div class="couponTag">
              <div class="couponName">
                {{item.message}}
              </div>
              <div class="couponTime">
                {{item.time}} - {{item.time}}
              </div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="invalidCoupon">
          <div class="couponBox" v-for="(item,index) in items" :key="index">
            <img class="couponImg" :src="item.url" />
            <div class="couponTag">
              <div class="couponName">
                {{item.message}}
              </div>
              <div class="couponTime">
                {{item.time}} - {{item.time}}
              </div>
            </div>
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
        { message: '土豆', time: '2017.05.03', url: a },
        { message: '樱桃谷鸭血', time: '2017.05.03', url: b },
        { message: '进口原块牛肉(小)', time: '2017.05.03', url: c },
        { message: '进口原块牛肉套餐', time: '2017.05.03', url: d },
        { message: '铁棍山药', time: '2017.05.03', url: e },
        { message: '台式花枝丸', time: '2017.05.03', url: f }
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
    couponDetail: function () {
      this.$router.push({ path: '/coupon/couponDetail' })
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
  margin-bottom: 10px;
}

.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #86C166;
  color: #86C166;
}

.couponBox {
  margin-bottom: 5px;
  width: 100%;
  height: 3rem;
  background: #ffffff;
  border-radius: 6px;
  padding: .4rem .5rem;
}

.couponBox:last-child {
  margin-bottom: 30px;
}

.couponImg {
  float: left;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 1.1rem;
}

.couponTag {
  float: left;
  text-align: left;
  margin-left: .8rem;
}

.couponName {
  font-size: .45rem;
  color: #86C166;
  margin-top: .5rem;
}

.couponTime {
  font-size: .4rem;
  color: #0B1013;
  margin-top: .25rem;
}
</style>
