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
                <div class="couponTime">
                    {{item.StartTime.replace('T',' ').substr(0 , 10)}} 至 {{item.EndTime.replace('T',' ').substr(0 , 10)}} 有效
                </div>
            </div>
        </div>
        <div class="barCode">
            <svg ref="code"></svg>
            <div class="codeTag">{{item.CouponCode}}</div>
        </div>
        <div class="ruleBox">
            <div class='ruleTitle'>活动内容</div>
            <div class='ruleContent'>
                <p v-html="item.CouponExplain">
                    <!-- 1、本券仅限堂食
                    <br> 2、本券可兑换土豆一份
                    <br> 3、优惠不能同享，优惠部分不开具发票
                    <br> 4、图片仅供参考，产品以实物为准
                    <br> 5、仅限石二锅大陆地区门店使用 -->
                </p>
            </div>
        </div>
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
    components: {
    },
    mounted() {
        this.getShowCoupon();
    },
    methods: {
        getBarCode: function (code) {
            var o = { width: 2, height: 50, displayValue: false, margin: 0 }
            JsBarcode(this.$refs.code, code, o);
        },
        getShowCoupon: function() {
        this.$http.get("Coupon/GetCoupon?couponId=" + this.$route.query.couponId)
            .then(response => {
            if (response.success) {
                this.getBarCode(response.message.CouponCode);
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
    }
}
</script>

<style scoped>
.couponBox {
    width: 100%;
    height: 2.4rem;
    background: #86C166;
    border-radius: 6px 6px 0 0;
}

.couponImgBox {
    float: left;
    width: 3.2rem;
    height: 2.4rem;
    padding: .35rem .7rem .45rem .7rem;
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
    padding: .75rem 0 .55rem 0;
    line-height: .55rem;
}

.couponName {
    font-size: .45rem;
    color: #ffffff;
    height: .55rem;
}

.couponTime {
    font-size: .34rem;
    color: #ffffff;
    height: .55rem;
}

.barCode {
    background: #FFFFFF;
    width: 100%;
    border-radius: 0 0 6px 6px;
    text-align: center;
    padding-top: .35rem;
}

.codeTag {
    padding-bottom: .35rem;
    margin-top: .1rem;
    font-size: .5rem;
    color: #0B1013
}
</style>
