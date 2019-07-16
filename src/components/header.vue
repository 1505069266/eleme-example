<template>
  <div>
    <div class="head" >
      <img :src="seller.avatar" alt="" class="imghead">
       <div class="tu"><img :src = 'seller.avatar' alt="" class="img"></div>
        <div class="conthead">
          <p><img src="../assets/img/brand@2x.png" alt="" style="float: left;  height: 0.32rem;line-height: 0.32rem"><span style=" font-size:0.32rem;color: white;font-weight: bold;line-height: 0.35rem;margin-left: 0.12rem">粥品香坊（大运村）</span></p>
          <p style="font-size:0.24rem;margin-top: 0.16rem;color:white;">蜂鸟专送/38分钟送达</p>
          <p style="margin-top: 0.16rem;height: 0.2rem;color:white;font-size:0.2rem;"><img src="../assets/decrease_1@2x.png" alt="" style="height:0.2rem;float: left; margin-top: 0.03rem"><span style="margin-left: 0.08rem;font-weight: 200;line-height: 0.24rem;">在线支付满28减5，满50减10</span></p>
        </div>
      <div style="position: absolute;top: 1.5rem;right: 0.5rem;">
        <span @click="find"  class="dian" style="font-size: 0.2rem;color: white;font-weight: 200;line-height: 0.24rem;">5个<span class="icon iconfont" style="color: white;font-size: 0.2rem;margin-left: 0.04rem;">&#xe62d;</span></span>
      </div>
       <div class="head-foot " @click="find">
         <div class="footdiv">
         <img src="../assets/222.png" alt="" style="height: 0.32rem;vertical-align: middle;">
           <span style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width:5.5rem;font-size: 0.2rem;font-weight: 200;color: white;margin-left: 0.08rem;height: 0.24rem">{{seller.bulletin}}</span>
           <span class="icon iconfont" style="color: white;font-size: 0.2rem;margin-left: 0.4rem;">&#xe62d;</span>
         </div>
       </div>
      <div class="headdiv blur"></div>
    </div>
    <div style="width: 100%;height: 100%;background: black">
    </div>
    <transition name="fold">
    <div class="youhui" v-show="bian" ref="world">
      <div style="width: 100%;">
      <p class="youhuip">粥品香坊（大运村）</p>
      <div class="yhcont">
          <div id="star" style="width: 100%;">
            <div style="padding: 0.5rem 0;margin: 0 auto; width: 3rem;height: 1rem"><span  v-for = "(classn,index) in starArrs" :class="classn" class="staritem" :key="index"></span>
            </div>
          </div>
        <div >
          <p>
          <span style="width: 2.24rem"><hr style="width: 2.24rem;border-top: 0;opacity: 0.2;float: left"></span><span style="padding: 0 0.24rem;text-align: center;font-size: 0.25rem;color: white">优惠信息</span>
            <span style="width: 2.24rem"><hr style="width: 2.24rem;border-top: 0;opacity: 0.2;float: right;"></span></p>
        </div>
        <div style="padding: 0.4rem 0.24rem" class="divp">
          <p class="p1">在线支付满28减5，满50减10</p>
          <p class="p2">单人精彩赛</p>
          <p class="p2">清肺雪梨汤8折抢购</p>
          <p class="p3">特价饮品八折抢购</p>
          <p class="p3">单人特色套餐</p>
        </div>
        <div style="">
          <p>
            <span style="width: 2.24rem"><hr style="width: 2.24rem;border-top: 0;opacity: 0.2;float: left"></span><span style="padding: 0 0.24rem;text-align: center;font-size: 0.25rem;color: white">商家公告</span>
            <span style="width: 2.24rem"><hr style="width: 2.24rem;border-top: 0;opacity: 0.2;float: right;"></span></p>
        </div>
        <div style="padding: 0.4rem 0.24rem">
          <p style="font-size:0.24rem;font-weight: 200;color:white;line-height: 0.48rem;padding-bottom: 1rem;">{{seller.bulletin}}</p>
        </div>

      </div>
      <div style="margin: 0 auto;width: 100%;">
        <div @click="dep"  class="icon iconfont" style="margin: 0 auto;width: 0.64rem;height: 0.64rem;font-size: 0.5rem;color: white;padding-bottom: 0.5rem;">&#xe677;</div>
      </div>
      </div>
    </div>
    </transition>
  </div>
</template>
<script>
import Scroll from 'better-scroll'
export default {
  props: ['seller'],
  computed: {
    starArrs () {
      var starArr = []
      let onstar = parseInt(this.seller.score)
      let half = Math.round(this.seller.score - onstar)
      for (var i = 0; i < onstar; i++) {
        starArr.push('onstar')
      }
      if (half) {
        starArr.push('halfstar')
      }
      while (starArr.length < 5) {
        starArr.push('offstar')
      }
      return starArr
    }
  },
  created () {
  },
  data () {
    return {
      bian: false
    }
  },
  methods: {
    find () {
      this.bian = true
      setTimeout(() => {
      /* eslint-disable no-new */
        this.$nextTick(() => {
          new Scroll(this.$refs.world, {click: true})
        })
      }, 100)
    },
    dep () {
      this.bian = false
    }
  }
}
</script>
<style scoped>
  .staritem{
    display: inline-block;
    width: 0.37037rem;
    height: 0.37037rem;
    margin-left: 0.15rem;
  }
  .onstar{
    background: url("../assets/img/2018070817420611.png");
  }
  .halfstar{
    background: url("../assets/img/20180708174252116.png");
  }
  .offstar{
    background: url("../assets/img/20180708174333883.png");
  }
  .fold-enter, .fold-leave-to{
  opacity:0;
  }
  .fold-enter-active,.fold-leave-active{
  transition:  .5s;
  }
  .p1:before{
     content: "";
     display: inline-block;
     width: 0.32rem;
     height: 0.32rem;
     background: url("../assets/img/decrease_1@2x.png")  no-repeat;
     background-size: 0.32rem 0.32rem;
     position: absolute;
     top:-0.04rem;
     left: 0;
   }
  .p2:before{
    content: "";
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    background: url("../assets/img/discount_1@2x.png")  no-repeat;
    background-size: 0.32rem 0.32rem;
    position: absolute;
    top:-0.04rem;
    left: 0;
  }
  .p3:before{
    content: "";
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    background: url("../assets/img/special_1@2x.png")  no-repeat;
    background-size: 0.32rem 0.32rem;
    position: absolute;
    top:-0.04rem;
    left: 0;
  }
  .divp p{
    padding-left: 0.44rem;
    position: relative;
    margin-top: 0.3rem;
    font-size: 0.24rem;
    font-weight: 200;
    color:white;
    line-height: 0.24rem;
  }
  .yhcont{
    padding: 0 0.72rem;
  }
  .youhuip{
    color: white;
    font-size: 0.32rem;
    font-weight: 700;
    line-height: 0.32rem;
    text-align: center;
    margin-top: 1.28rem;
  }
  .youhui{
    width: 100%;
    position: absolute;
    top:0;
    background: rgba(7,17,27,0.8);
    z-index: 999;
    height: 100%;
    overflow: hidden;
  }
  .dian{
    height: 0.48rem;
    padding: 0.14rem 0.16rem;
    background: rgba(0,0,0,0.2);
    border-radius: 20px;
  }
  .dian:after{
    content: "";
    display: inline-block;

  }
  .conthead{
    width: 4rem;
    height: 1.2rem;
    display: inline-block;
    margin-left: 0.32rem;
    position: absolute;
    top:0.52rem;
  }
  .footdiv{
    width: 100%;
    height: 100%;
    padding-left: 0.24rem;
    padding-right: 0.24rem;
    display: flex;
    align-items: center;
  }
  .headdiv{
    width: 100%;
    height: 100%;
    background: rgba(7,17,27,0.6);
    position: absolute;
    top:0;
    z-index: -1;
  }
  .blur {
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }
  .imghead{
    position: absolute;
    height:2.68rem;
    /*overflow: hidden;*/
    width:100%;
    top:0;
    z-index: -1;
  }
  .head-foot{
    height: 0.56rem;
    width: 100%;
    position:absolute;
    bottom:0;
    background: rgba(7,17,27,0.2);
    /*z-index: 2;*/
  }
  .img{
    width: 1.28rem;
    height: 1.28rem;
    border-radius: 4px;
  }
  .head{
    height: 2.68rem;
    /*background:url('seller.avatar');*/

    box-sizing: border-box;
    position: relative;
 }
  .tu{
    width: 1.28rem;
    height: 1.28rem;
    margin-top: 0.48rem;
    margin-left: 0.48rem;
    display: inline-block;
  }
</style>
