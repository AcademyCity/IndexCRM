<template>
    <div class="content">
        <div class="couponBox">
            <div class="couponImgBox">
                <img class="couponImg" :src="item.CouponImg" />
            </div>
            <div class="couponTag">
                <div class="couponName">
                    {{item.CouponName}}
                </div>
                <div v-if="item.ValidityMode=='1'" class="couponTime">
                    {{item.StartTime.replace('T',' ').substr(0 , 10)}} 至 {{item.EndTime.replace('T',' ').substr(0 , 10)}} 有效
                </div>
                <div v-if="item.ValidityMode=='2'" class="couponTime">
                    领取后第 {{item.EffectDate}} 天开始，{{item.ValidDate}} 天内有效
                </div>
            </div>
        </div>
        <div class="ruleBox">
            <div class='ruleTitle'>活动内容</div>
            <div class='ruleContent'>
                <p v-html="item.CouponExplain">
                </p>

                <!-- <p>
                    1、本券仅限堂食
                    <br> 2、本券可兑换土豆一份
                    <br> 3、优惠不能同享，优惠部分不开具发票
                    <br> 4、图片仅供参考，产品以实物为准
                    <br> 5、仅限石二锅大陆地区门店使用
                </p> -->
            </div>
        </div>
        <div class="pointIcon">
            <div class="couponPointIcon iconfont">&#xe703;</div>
            <div class="couponPointTag">兑换需积分</div>
            <div class="couponPointNum">{{item.CouponPoint}}</div>
        </div>
        <mt-button type="primary" @click="exChangeCoupon(item.CouponConfigId)">立即兑换</mt-button>
    </div>
</template>
<script>

import { MessageBox } from "mint-ui"

export default {
    data() {
        return {
            item: {StartTime:"",EndTime:""}
        }
    },
    mounted() {
        this.getShowCoupon()
    },
    methods: {
        getShowCoupon: function() {
        this.$http.get("Coupon/GetShowCouponInfo?couponConfigId=" + this.$route.query.couponConfigId)
            .then(response => {
            if (response.success) {
                this.item = response.message
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
        },
        exChangeCoupon: function(CouponConfigId) {
        this.$http.get("Coupon/ExChangeCoupon?couponConfigId=" + CouponConfigId +"&openId="+ this.$store.state.common.login.openId)
            .then(response => {
            if (response.success) {
                MessageBox.alert(response.message).then(action => {
                    this.$router.push({ path: '/user/userCoupon' })
                });
            } else {
                MessageBox.alert(response.message).then(action => {
                        if(response.message!="积分不足！"){
                            this.$store.dispatch('common/login/logOut')
                            window.location.reload();
                        }
                    });
                }
            })
            .catch(error => {
                MessageBox.alert('发生错误:' + error).then(action => {
                    this.$store.dispatch('common/login/logOut')
                    window.location.reload();
                });
            });
        },       
    }
}
</script>

<style scoped>
.couponBox {
  width: 100%;
  height: 2.4rem;
  background: #86c166;
  border-radius: 6px 6px 0 0;
}

.couponImgBox {
  float: left;
  width: 3.2rem;
  height: 2.4rem;
  padding: 0.35rem 0.7rem 0.45rem 0.7rem;
}

.couponImg {
  float: left;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.9rem;
  border: 3px #ffffff solid;
}

.couponTag {
  float: left;
  text-align: left;
  padding: 0.75rem 0 0.55rem 0;
  line-height: 0.55rem;
}

.couponName {
  font-size: 0.45rem;
  color: #ffffff;
  height: 0.55rem;
}

.couponTime {
  font-size: 0.34rem;
  color: #ffffff;
  height: 0.55rem;
}

.ruleBox {
  padding: 0.6rem;
  padding-bottom: 0.35rem;
  margin: 0;
  font-size: 0.35rem;
  color: #0b1013;
  background: #ffffff;
  border-bottom: 2px #eee dashed;
}

.ruleTitle {
  font-size: 0.38rem;
}

.ruleContent {
  margin-top: 0.35rem;
  line-height: 0.65rem;
}

.pointIcon {
  font-size: 0.5rem;
  color: #f7d94c;
  height: 1.2rem;
  line-height: 1.2rem;
  border-radius: 0 0 6px 6px;
  background: #ffffff;
  padding: 0 0.6rem;
}

.couponPointIcon {
  float: left;
  font-size: 0.8rem;
}

.couponPointTag {
  float: left;
  margin-left: 0.25rem;
  font-size: 0.45rem;
}

.couponPointNum {
  float: right;
  font-size: 0.45rem;
}
</style>
