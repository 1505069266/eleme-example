<template>
  <div>
    <div class="siyi" v-show="xx">
      <div style="width: 100%;position: absolute;top: 0;background: rgba(7,17,27,0.5);bottom: 0;" @click="qq"></div>
      <div class="contgood" style="width: 100%;position: absolute;bottom:0.94rem;background: white;">
        <div style="width: 100%;height: 0.8rem;border-bottom: 0.01rem solid rgba(7,17,27,0.1);background: #f3f5f7">
          <span style="font-size:0.28rem;font-weight: 700;color:rgb(7,17,27);line-height: 0.8rem;margin-left: 0.36rem">购物车</span>
          <span style="float: right;font-size: 0.25rem;color:rgb(0,160,220);line-height: 0.8rem;margin-right: 0.36rem;font-weight: 500;"
                @click="clean">清空</span></div>
        <div style="max-height: 4rem;overflow: hidden;width: 100%;" ref="warper">
        <div>
        <div v-for="(classa,index) in goods" :key="index" style="width: 100%;padding: 0 0.36rem 0 0.36rem;box-sizing: border-box;" >
          <div v-for="(classn,ind) in classa.foods" v-if="goods[index].foods[ind].count" :key="ind"
               style="height: 0.96rem;width: 100%;box-sizing: border-box;border-bottom:1px solid rgba(7,17,27,0.1);
               display: flex;justify-content: space-between;">
          <span style="align-self: center">{{classn.name}}</span>
          <span style="margin-right: 0;align-self: center">
            <span style="margin-right: 0.24rem;font-size: 0.28rem;font-weight: 700;color:rgb(240,20,20)">¥{{classn.count*classn.price}}</span>
            <carcon style="display: inline-block;align-self: center" :foods="classn"></carcon></span>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    <div class="shopcar">
      <div class="car" @click="pingsiyi"><div class="bgqq" v-if="allgoods>0">
        <img src="../assets/img/carno.png" alt="" style="width: 0.6rem;margin: 0.15rem 0.15rem">
      <div class="hong1" v-show="allgoods>0">{{allgoods}}</div></div>
        <div class="carc" v-if="allgoods<=0">
          <img src="../assets/img/caroff.png" alt="" style="width: 0.6rem;margin: 0.15rem 0.15rem">
          <div class="hong1" v-show="allgoods>0">{{allgoods}}</div></div></div>
      <div class="jiage" style="display: flex;"><div>
        <span  class="font" :class="{'white':allprice > 0}">¥{{allprice}}</span></div>
      <div class="peison">
        <span style="font-size:0.28rem;font-weight: 700;line-height: 0.6rem;color:rgba(255,255,255,0.4);margin-left: 0.16rem;">另需配送费¥4元</span>
      </div></div>
      <div class="jiesuan" v-if="allprice<20"><span>差¥{{rualast}}起送</span></div>
      <div class="jiesuan1" v-if="allprice>=20" @click="f"><span>去结算</span></div>
    </div>
  </div>
</template>
<script>
import Scroll from 'better-scroll'
import carcon from '@/components/cartcontro'
export default {
  props: ['goods'],
  data () {
    return {
      allgoods: 0,
      rualast: 0,
      chuxian: true,
      allprice: 0,
      xx: false
    }
  },
  created () {

  },
  components: {
    carcon
  },
  methods: {
    qq () {
      this.xx = !this.xx
    },
    clean () {
      for (let k = 0; k < this.goods.length; k++) {
        for (let g = 0; g < this.goods[k].foods.length; g++) {
          if (this.goods[k].foods[g].count) {
            this.goods[k].foods[g].count = 0
          }
        }
      }
      this.xx = false
    },
    f () {
      alert('支付' + this.allprice + '元')
    },
    pingsiyi () {
      this.xx = !this.xx
      setTimeout(() => {
        this.$nextTick(() => {
          if (!this.ojbk) {
          /* eslint-disable no-new */
            this.ojbk = new Scroll(this.$refs.warper, {click: true})
          } else {
            this.ojbk.refresh()
          }
        })
      }, 100)
    }
  },
  watch: {
    goods: {
      handler (value) {
        let rua = []
        let pricein = []
        for (let k = 0; k < value.length; k++) {
          for (let g = 0; g < value[k].foods.length; g++) {
            if (value[k].foods[g].count) {
              rua.push(value[k].foods[g].count)
              pricein.push(value[k].foods[g].count * value[k].foods[g].price)
            } else {
              // 开始忘记加这个判断  尽管能实现但是会报错 加上就好了
              this.$set(value[k].foods[g], 'count', 0)
              rua.push(value[k].foods[g].count)
              pricein.push(value[k].foods[g].count * value[k].foods[g].price)
            }
          }
        }
        this.allgoods = rua.reduce(function (previousValue, currentValue, index, array) {
          return previousValue + currentValue
        })
        this.allprice = pricein.reduce(function (previousValue, currentValue, index, array) {
          return previousValue + currentValue
        })
        if (this.allprice < 20) {
          this.rualast = 20 - this.allprice
          this.chuxian = false
        } else {
          this.chuxian = true
        }
      },
      deep: true
    }
  }
}
</script>
<style>
  .bgqq{
    width: 0.88rem;
    height: 0.88rem;
    position: absolute;
    bottom: 0.16rem;
    left: 0.14rem;
    border-radius: 50%;
    background: deepskyblue;
  }
  .font{
    font-size: 0.35rem;
    font-weight: bold;
    color:rgba(255,255,255,0.2);
    line-height: 0.94rem;
    float: right
  }
  .white{
    color:white;
  }
  .siyi{
    position: absolute;
    width: 100%;
    top:0;
    bottom:0;
    /*background: pink;*/
    z-index: 9;
  }
  .hong1{
    font-size: 0.2rem;
    line-height: 0.28rem;
    text-align: center;
    color:white;
    width: 0.4rem;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0,0,0,0.4);
    background: rgb(240,20,20);
    height: 0.28rem;
    border-radius: 0.16rem;
    position: absolute;
    top:-0.1rem;
    right: 0;
  }
  .peison{
    margin-left: 0.24rem;
    border-left: 0.01rem solid rgba(255,255,255,0.1);
    /*width: 50%;*/
    height: 0.6rem;
    margin-top: 0.17rem;
    display: inline-block;
  }
  .jiage{
    width: 45%;
    height: 100%;
    margin-left: 1.5rem;
  }
  .carc{
    width: 0.88rem;
    height: 0.88rem;
    position: absolute;
    bottom: 0.16rem;
    left: 0.14rem;
    border-radius: 50%;
    background: #2B343C;
  }
  .car{
    width: 1.16rem;
    height: 1.16rem;
    background: #141d27;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 0.24rem;
  }
  .jiesuan1{
    width: 2.1rem;
    height: 100%;
    position: absolute;
    top:0;
    right: 0;
    background: deepskyblue;
    text-align: center;
    color: white;
    font-size: 0.28rem;
    font-weight: bold;
    line-height: 0.94rem;
  }
  .jiesuan{
    width: 2.1rem;
    height: 100%;
    position: absolute;
    top:0;
    right: 0;
    background: #2B333B;
    text-align: center;
    color: rgba(255,255,255,0.4);
    font-size: 0.28rem;
    font-weight: bold;
    line-height: 0.94rem;
  }
  .shopcar{
    width: 100%;
    height: 0.94rem;
    position: fixed;
    bottom: 0;
    background: #141d27;
    z-index: 10;
  }
</style>
