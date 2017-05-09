<template>
    <div class="content">
        <div class="couponBox">
            <div class="couponImgBox">
                <img class="couponImg" :src="item.url" />
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
        <div class="barCode">
            <svg ref="code"></svg>
            <div class="codeTag">0120 0120 0003 4238</div>
        </div>
        <div class="ruleBox">
            <div class='ruleTitle'>活动内容</div>
            <div class='ruleContent'>
                <p>
                    1、本券仅限堂食
                    <br> 2、本券可兑换土豆一份
                    <br> 3、优惠不能同享，优惠部分不开具发票
                    <br> 4、图片仅供参考，产品以实物为准
                    <br> 5、仅限石二锅大陆地区门店使用
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import a from '../../assets/images/1.jpg'

export default {
    data() {
        return {
            item: { message: '土豆', time: '2017.05.03', url: a },
        }
    },
    components: {
    },
    mounted() {
        this.getBarCode("012000034238");
    },
    methods: {
        getBarCode: function (code) {
            var o = { width: 2, height: 50, displayValue: false, margin: 0 }
            JsBarcode(this.$refs.code, code, o);
        }
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
    font-size: .37rem;
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
