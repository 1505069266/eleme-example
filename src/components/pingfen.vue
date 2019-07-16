<template>
  <div style="position: absolute;top:3.48rem ;bottom: 0.94rem;width: 100%;background-color: #f3f5f7;overflow: hidden" ref="rat">
    <div class="pingfen">
      <div style="padding: 0.36rem 0;border-bottom: 0.01rem solid rgba(7,17,27,0.1);border-top: 0.01rem solid rgba(7,17,27,0.1);background-color: white">
        <div style="text-align: center;width: 2.75rem;float: left">
           <div style="font-size: 0.48rem;color: rgb(255,153,0);line-height: 0.56rem">
            {{sell.score}}
          </div>
          <div style="font-size: 0.24rem;line-height: 1;color: rgb(7,17,27);margin-top: 0.12rem">
            综合评分
          </div>
          <div style="margin-top: 0.16rem;font-size: 0.2rem;line-height: 0.2rem;color: rgb(147,153,159)">
            高于周边商家69%
          </div>
        </div>
        <div style="width: 3.5rem;border-left: 0.01rem solid rgba(7,17,27,0.1);position:absolute;right: 0;    padding: 0 0.48rem;font-size: 0.24rem;line-height: 0.36rem;color: rgb(7,17,27)">
          <div>
            <div style="float: left">
              服务态度<span  v-for = "(classn,index) in starArrs" :class="classn" class="staritem" :key="index"></span>
            </div>
            <div style="float: left">
              <!--<Row>-->
                <!--<Rate show-text allow-half v-model="sell.serviceScore">-->
                  <!--<span style="color: rgb(255,153,0);line-height: 0.36rem;font-size: 0.24rem">{{sell.serviceScore}}</span>-->
                <!--</Rate>-->
              <!--</Row>-->
            </div>
            <div style="clear: both"></div>
          </div>
          <div style="margin-top: 0.16rem">
            <div style="float: left">
              商品质量<span  v-for = "(classn,index) in starArrs" :class="classn" class="staritem" :key="index"></span>
            </div>
            <div style="float: left">
              <!--<Row>-->
                <!--<Rate show-text allow-half v-model="sell.foodScore">-->
                  <!--<span style="color: rgb(255,153,0);line-height: 0.36rem;font-size: 0.24rem">{{ sell.foodScore}}</span>-->
                <!--</Rate>-->
              <!--</Row>-->
            </div>
            <div style="clear: both"></div>
          </div>
          <div style="margin-top: 0.16rem">
            <div style="float: left">
              送达时间
            </div>
            <div style="float: left;color: rgb(147,153,159);margin-left: 0.16rem">
              44分钟
            </div>
          </div>
        </div>
        <div style="clear: both"></div>
      </div>
      <div>
        <div style="margin-top: 0.32rem;padding: 0.36rem;padding-bottom: 0;background-color: white;border-bottom: 0.01rem solid rgba(7,17,27,0.1);border-top: 0.01rem solid rgba(7,17,27,0.1)">
          <div style="padding: 0.36rem 0;border-bottom: 0.01rem solid rgba(7,17,27,0.1);">
            <div @click="rua=true" style="font-size: 0.24rem;line-height: 0.32rem;background-color: rgb(0,160,220);color: white;padding: 0.16rem 0.24rem;float: left">
              全部{{pinjia.all}}
            </div>
            <div @click="good" style="font-size: 0.24rem;line-height: 0.32rem;background-color: rgba(0,160,220,0.2);color: rgb(77,85,93);padding: 0.16rem 0.24rem;float: left;margin-left: 0.16rem">
              推荐{{pinjia.tuijian}}
            </div>
            <div @click="bad" style="font-size: 0.24rem;line-height: 0.32rem;background-color: rgba(77,85,93,0.2);rgb(77,85,93);padding: 0.16rem 0.24rem;float: left;margin-left: 0.16rem">
              吐槽{{pinjia.tucao}}
            </div>
            <div style="clear: both"></div>
          </div>
          <div @click="hascont" :class="{'lan':!cont}" style="margin: 0.24rem 0;color: rgb(147,153,159);line-height: 0.48rem">
            <span  class="ivu-icon ivu-icon-md-checkmark-circle" style="font-size: 0.48rem;"></span>
            <span style="font-size: 0.24rem">只看有内容的评价</span>
          </div>
        </div>
        <ul style="padding:0 0.36rem;background-color: white">
          <li v-for="(items,index) in ratings" v-if="(rua||items.rateType==numb)&&(cont||items.text!='')"  :key="index" style="padding: 0.36rem 0;">
            <img :src="items.avatar" alt="" style="width: 0.56rem;float: left;border-radius: 0.28rem">
            <div style="float: left;margin-left: 0.24rem;width: 5.98rem;">
              <div style="height: 0.24rem;line-height: 0.24rem;color:rgb(147,153,159);font-size: 0.2rem ">
                <span style="float: right;font-weight: 200">{{items.rateTime | time}}</span>
                <span style="float: left;color: rgb(7,17,27)">{{items.username}}</span>
              </div>
              <!--<div>-->
                <!--<Row>-->
                  <!--<Rate show-text allow-half v-model="items.score">-->
                    <!--<span style="color: rgb(147,153,159)!important" v-if="items.deliveryTime != ''">{{ items.deliveryTime}}分钟送达</span>-->
                    <!--<span v-else> </span>-->
                  <!--</Rate>-->
                <!--</Row>-->
              <!--</div>-->
              <div style="margin-top: 0.12rem;color: rgb(7,17,27);font-size: 0.24rem;line-height: 0.36rem">
                <span>{{items.text}}</span>
              </div>
              <div style="margin-top: 0.16rem;height: 0.32rem;line-height: 0.32rem;font-size: 0.24rem">
                <span style="color: rgb(0,160,220);float: left;line-height: 0.32rem" class="ivu-icon ivu-icon-md-thumbs-up" v-if="items.rateType === 0"></span>
                <span style="float: left;line-height: 0.32rem" class="ivu-icon ivu-icon-md-thumbs-down" v-else=""></span>
                <div v-for="(i,index) in items.recommend" :key="index" style="margin-left: 0.16rem; border: 0.01rem solid rgba(7,17,27,0.1);border-radius: 0.02rem;font-size: 0.18rem;line-height: 0.32rem;color: rgb(147,153,159);float: left;padding: 0 0.12rem">
                  {{i}}
                </div>
              </div>
            </div>
            <div style="clear: both"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      boo: false,
      num: 3,
      cont: true,
      rua: true,
      numb: 0
    }
  },
  props: ['goods', 'ratings', 'sell', 'seller'],
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
    },
    pinjia () {
      let all = 0
      let tuijian = 0
      let tucao = 0
      for (let n = 0; n < this.ratings.length; n++) {
        if (this.ratings[n].rateType === 1) {
          tucao++
        } else {
          tuijian++
        }
        all++
      }
      return {all, tucao, tuijian}
    }
  },
  methods: {
    good () {
      this.rua = false
      this.numb = 0
    },
    bad () {
      this.rua = false
      this.numb = 1
    },
    hascont () {
      this.cont = !this.cont
    }
  },
  filters: {
    time (tim) {
      let time = new Date(tim)
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      let hour = time.getHours()
      let minu = time.getMinutes()
      return year + '-' + month + '-' + day + '  ' + hour + ':' + minu
    }
  },
  created () {
    this.$nextTick(() => {
      this.rat = new BScroll(this.$refs.rat, {probeType: 3, click: true})
    })
  }
}
</script>

<style >
  .staritem{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
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
  .lan{
    color: rgb(0,160,220) !important;
  }
  .ivu-rate{
    font-size: 0.36rem;
    /*width: 100%;*/
    margin: 0 auto;
    text-align: center;
    height: 0.36rem;
    line-height: 1;
  }
  .ivu-rate-star{
    margin-right: 0 !important;
  }
  .ivu-rate-text{
    margin-left: 0;
    line-height: 0.36rem!important;
  }
  .ivu-rate-text>span{
    color: rgb(255,153,0)!important;
    font-size: 0.24rem!important
  }
</style>
