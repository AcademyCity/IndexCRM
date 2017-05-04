<template>
    <div class="couponDetail">
        <div class="couponDetailBox">
            <div class="couponBox">
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
            <div class="barCode">
                <svg ref="code"></svg>
                <div class="codeTag">0120 0120 0003 4238</div>
            </div>
        </div>
    </div>
</template>
<script>
import a from '../../assets/images/1.jpg'

export default {
    name: 'couponDetail',
    data() {
        return {
            selected: 'validCoupon',
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
.couponDetailBox {
    padding: 0 .5rem;
    padding-top: 55px;
    /*background: #FCFAF2;
  border-radius: 10px;*/
}

.couponBox {
    width: 100%;
    height: 2.4rem;
    background: #86C166;
    border-radius: 6px 6px 0 0;
    padding: .4rem .5rem;
}

.couponImg {
    float: left;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.8rem;
}

.couponTag {
    float: left;
    text-align: left;
    margin-left: .8rem;
}

.couponName {
    font-size: .45rem;
    color: #ffffff;
    margin-top: .25rem;
}

.couponTime {
    font-size: .4rem;
    color: #ffffff;
    margin-top: .15rem;
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
