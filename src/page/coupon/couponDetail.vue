<template>
    <div class="couponDetail">
        <div class="couponDetailBox">
            <div class="card">
                <span class="cardName">会员卡</span>
                <span class="brandName">石头锅</span>
                <span class="cardNo">012000034238</span>
            </div>
            <div class="barCode">
                <svg ref="code"></svg>
                <div class="codeTag">如扫码失败请将屏幕调至最亮重新扫码</div>
            </div>
        </div>
    
    </div>
</template>
<script>


export default {
    name: 'couponDetail',
    data() {
    return {
      selected: 'validCoupon',
      items: [
        { message: '土豆', time: '2017.05.03'},
      ]
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
    padding-top: 50px;
    /*background: #FCFAF2;
  border-radius: 10px;*/
}

.card {
    position: relative;
    text-align: center;
    font-size: .3rem;
    color: #FCFAF2;
    font-weight: normal;
    border-radius: 4px 4px 0 0;
    height: 5.5rem;
    background: url(https://res.hualala.com/group2/M00/E3/BB/wKgCMljHk9Ce2aDkAAVqDhRRqh4096.jpg) center;
    background-size: cover;
}

.cardName {
    line-height: initial;
    position: absolute;
    top: .25rem;
    left: .25rem;
}

.brandName {
    line-height: initial;
    position: absolute;
    top: .25rem;
    right: .25rem;
}

.cardNo {
    line-height: initial;
    position: absolute;
    left: 0;
    bottom: .25rem;
    width: 100%;
    text-align: center;
    font-size: .5rem;
    font-family: 'ocraext'
}

.barCode {
    background: #FFFFFF;
    width: 100%;
    height: 2.6rem;
    border-radius: 0 0 4px 4px;
    padding: .35rem 0;
    text-align: center;
}

.codeTag {
    margin-top: .1rem;
    font-size: .35rem;
    color: #0B1013
}
</style>
