<template>
    <div class="content">
        <div class="couponBox" @click="marketCoupon" v-for="(item,index) in items" :key="index">
            <div class="couponImgBox">
                <img class="couponImg" :src="item.url" />
            </div>
            <div class="couponTag">
                <div class="couponName">
                    {{item.message}}
                </div>
                <div class="couponTime">
                    {{item.time}}-{{item.time}} 有效
                </div>
                <div class="pointIcon">
                    <div class="couponPointIcon iconfont">&#xe703;</div>
                    <div class="couponPointNum">兑换需积分:150</div>
                </div>
            </div>
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
    data() {
        return {
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
        marketCoupon: function () {
            this.$router.push({ path: '/market/marketCoupon' })

        }
    }
}
</script>

<style scoped>
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

.couponTag {
    float: left;
    text-align: left;
    padding: .35rem 0 .15rem 0;
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

.pointIcon {
    font-size: .5rem;
    color: #F7D94C;
    height: .9rem;
    line-height: .9rem;
}

.couponPointIcon {
    float: left;
    font-size: .8rem;
}

.couponPointNum {
    float: left;
    margin-left: .25rem;
    /*color: #0B1013;*/
    font-size: .37rem;
    line-height: .95rem;
}
</style>

