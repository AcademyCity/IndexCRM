<template>
  <div class="userInfo">
    <div class="userInfoBox">
      <div class="card">
        <span class="cardName">会员卡</span>
        <span class="brandName">石头锅</span>
        <span class="cardNo">
          012000034238
        </span>
      </div>
      <div class="menu">
        <div class="barCode" >
          <svg ref="code"></svg>
          <div class="codeTag">如扫码失败请将屏幕调至最亮重新扫码</div>
        </div>
        <div class="menuList">    
          <div class="point iconfont" @click="point">&#xe703;
            <div class="pointTag">积分</div>
          </div>
          <div class="coupon iconfont"  @click="coupon">&#xe6ed;
            <div class="couponTag">优惠券</div>
          </div>
        </div>
        <div class="menuList">
          <div class="market iconfont">&#xe727;
            <div class="marketTag">积分商城</div>
          </div>
          <div class="suggest iconfont">&#xe6f4;
            <div class="suggestTag">线上建议</div>
          </div>
        </div>
      </div>
    </div>
 
  </div>
</template>
<script>


export default {
  name: 'userInfo',
  components: {

  },
  mounted() {
    this.getBarCode("012000034238");
  },
  methods: {
    getBarCode:function(code){
       var o={width:2,height:50,displayValue: false,margin:0}
       JsBarcode(this.$refs.code,code,o); 
    },
    point:function(){
       this.$router.push({ path: '/user/userPoint' })
    },
    coupon:function(){
       this.$router.push({ path: '/user/userCoupon' })
    }
    
  }  
}
</script>

<style scoped>

.userInfoBox {
  padding: 0 .5rem;
  padding-top: 55px;
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
  left:0;
  bottom:.25rem; 
  width: 100%;
  text-align: center;
  font-size: .5rem;
  font-family: 'ocraext'
}

.menu {
  /*margin-top: 15px;*/
}

.menuList{
  margin-top: 0.6%;
  height: 3rem
}

.barCode{
  background: #FFFFFF;
  width: 100%;
  height: 2.6rem;
  border-radius: 0 0 4px 4px;
  padding: .35rem 0;
  text-align: center;
}

.codeTag{
  margin-top: .1rem;
  font-size: .35rem;
  color: #0B1013
}

.point{
    float: left;
    background: #FFFFFF;
    margin-right: 0.6%;
    width: 49.7%;
    height: 3rem;
    border-radius: 4px;
    padding: .4rem 0;
    text-align: center;
    font-size: 1.8rem;
    color: #F7D94C
}

.pointTag{
    font-size: .35rem;
    color: #0B1013
}

.coupon{
    float: left;
    background: #FFFFFF;
    width: 49.7%;
    height: 3rem;
    border-radius: 4px;
    padding: .4rem 0;
    text-align: center;
    font-size: 1.8rem;
    color: #86C166
}

.couponTag{
    font-size: .35rem;
    color: #0B1013
}

.market{
    float: left;
    background: #FFFFFF;
    margin-right: 0.6%;
    width: 49.7%;
    height: 3rem;
    border-radius: 4px;
    padding: .4rem 0;
    text-align: center;
    font-size: 1.8rem;
    color: #CC543A
}

.marketTag{
    font-size: .35rem;
    color: #0B1013
}

.suggest{
    float: left;
    background: #FFFFFF;
    width: 49.7%;
    height: 3rem;
    border-radius: 4px;
    padding: .4rem 0;
    text-align: center;
    font-size: 1.8rem;
    color: #7DB9DE
}

.suggestTag{
    font-size: .35rem;
    color: #0B1013
}

</style>
