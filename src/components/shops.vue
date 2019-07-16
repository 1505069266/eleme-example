<template>
  <div>
    <div class="cont" ref="conts">
      <div>
    <div class="cont1" >
      <div style="padding-bottom:0.36rem;display: flex;justify-content: space-between;border-bottom: 1px solid rgba(7,17,27,0.1)">
        <div>
        <p style="font-size: 0.28rem;color:rgb(7,17,27);line-height: 0.28rem;font-weight: normal">{{seller.name}}</p>
        <p style="margin-top: 0.16rem;margin-left: -0.16rem;">
          <span  v-for = "(classn,index) in starArrs" :class="classn" class="staritem" :key="index"></span>
        <span style="margin-top:0.16rem;color:rgb(77,85,93);font-size: 0.24rem">({{seller.ratingCount}}) <span style="margin-left: 0.16rem"> 月售{{seller.sellCount}}单</span></span></p>
        </div>
        <div @click="f" style="width: 0.6rem;">
          <div style="width: 0.48rem;height: 0.48rem;margin-left: 0.08rem;" class="ax" :class="{'axx':this.xin == true}"></div>
          <p style="font-size: 0.2rem;color:rgb(77,85,93);line-height: 0.2rem;margin-top: 0.08rem;text-align: center">{{bb}}</p>
        </div>
      </div>
      <div style="width: 100%;display: flex;justify-content: space-around;">
        <div style="margin-top:0.36rem;padding-bottom: 0.36rem;text-align: center;border-right:1px solid rgba(7,17,27,0.1);width: 30%">
          <p style="font-size: 0.2rem;color:rgb(147,153,159);line-height: 0.2rem;">起送价</p>
          <p style="margin-top: 0.08rem;font-size: 0.48rem;font-weight: 200;color:rgb(7,17,27);line-height: 0.48rem;">{{seller.minPrice}}元</p>
        </div>
        <div style="margin-top:0.36rem;padding-bottom: 0.36rem;text-align: center;border-right:1px solid rgba(7,17,27,0.1);width: 30%">
          <p style="font-size: 0.2rem;color:rgb(147,153,159);line-height: 0.2rem;">商家配送</p>
          <p style="margin-top: 0.08rem;font-size: 0.48rem;font-weight: 200;color:rgb(7,17,27);line-height: 0.48rem;">{{seller.deliveryPrice}}元</p>
        </div>
        <div style="margin-top:0.36rem;padding-bottom: 0.36rem;text-align: center;width: 30%">
          <p style="font-size: 0.2rem;color:rgb(147,153,159);line-height: 0.2rem;">平均配送时间</p>
          <p style="margin-top: 0.08rem;font-size: 0.48rem;font-weight: 200;color:rgb(7,17,27);line-height: 0.48rem;">{{seller.deliveryTime}}分钟</p>
        </div>
      </div>
    </div>
    <split></split>
      <div class="hd" style="padding:0.36rem 0.36rem 0 0.36rem;">
        <p style="font-size: 0.3rem;font-weight: 500;color:black;">公告与活动</p>
        <p style="padding: 0.16rem 0.24rem 0.32rem 0.24rem;font-size: 0.24rem;font-weight: 200;color:rgb(240,20,20);line-height: 0.48rem;">{{seller.bulletin}}</p>
        <div v-for="(site,index) in seller.supports" style="border-top:1px solid rgba(7,17,27,0.1);" :key="index">
          <p style="padding: 0.32rem 0.24rem 0.32rem 0.24rem;"><img src="../assets/img/decrease_3@2x.png" alt="" style="width: 0.32rem;height: 0.32rem;">
            <span style="font-size: 0.24rem;font-weight: 200;color:rgb(7,17,27);line-height: 0.32rem;margin-left: 0.12rem;">{{site.description}}</span></p>
        </div>
      </div>
      <split></split>
      <div class="shijing" style="height:2.3rem;padding: 0.36rem 0 0.36rem 0.36rem;">
        <p style="font-size: 0.3rem;font-weight: 500;color:black;">商家实景</p>
        <div style="width: 100%;height: 1.8rem;overflow: hidden;" ref="rua">
          <div style="width: 10.5rem;height: 1.8rem;">
          <img :src="pic" alt="" v-for="(pic,xx) in seller.pics" style="width:2.4rem;height: 1.8rem;margin-left: 0.12rem;margin-top: 0.24rem" :key="xx">
          </div>
        <!--<div v-for="pic in seller.pics" style="float: left;width: ">-->
          <!--<img :src="pic" alt="" style="float: left;width: 2.4rem;height: 1.8rem;margin-left: 0.12rem;margin-top: 0.24rem;">-->
        <!--</div>-->
        </div>
      </div>
      <split></split>
      <div style="padding: 0.36rem 0.36rem 0.5rem 0.36rem;">
        <p style="font-size: 0.3rem;font-weight: 500;color:black;padding-bottom: 0.24rem;">商家信息</p>
        <div v-for="(dz,qq) in seller.infos" style="padding:0.32rem 0.24rem 0.32rem 0.24rem;border-top:1px solid rgba(7,17,27,0.1)" :key="qq">
          <p style="font-size: 0.24rem;font-weight: 200;color:rgb(7,17,27);line-height: 0.32rem">{{dz}}</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import Scroll from 'better-scroll'
import split from '@/components/split'
export default {
  props: ['seller', 'shopin'],
  data () {
    return {
      shoping: '',
      xin: false,
      bb: '收藏'
    }
  },
  methods: {
    f () {
      if (this.xin === false) {
        this.xin = true
        this.bb = '已收藏'
      } else {
        this.xin = false
        this.bb = '收藏'
      }
    }
  },
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
  components: {
    split
  },
  created () {
    /* eslint-disable no-new */
    this.$nextTick(() => {
      this.qqq = new Scroll(this.$refs.rua, {scrollX: true})
      this.www = new Scroll(this.$refs.conts, {click: true})
    })
  }
}
</script>
<style scoped>
  .ax{
     background: url("../assets/aixin.png") 0.48rem 0.48rem;
     background-size:cover ;
   }
  .axx{
    background: url("../assets/aixin1.png") 0.48rem 0.48rem;
    background-size:cover ;
  }
  .staritem{
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 0.15rem;
  }
  .onstar{
    background: url("../assets/img/2018070817420611.png");
    background-size: cover;
  }
  .halfstar{
    background: url("../assets/img/20180708174252116.png");
    background-size: cover;
  }
  .offstar{
    background: url("../assets/img/20180708174333883.png");
    background-size: cover;
  }
  .cont{
    position: absolute;
    top: 3.5rem;
    width: 100%;
    bottom: 0.94rem;
    box-sizing: border-box;
    overflow: hidden;
  }
  .cont1{
    padding: 0.36rem;
  }
</style>
