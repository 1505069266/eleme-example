<template>
  <div>
    <div class="fenlei" ref="wrapper">
      <div class="dddd">
        <div class="shangp" v-for = "(classn,index) in shop" :key="index" @click="f(index)" :class="{'current':currentIndex === index}"><div style="width: 1.16rem;">
          <span v-show="classn.type > 1" class="icon"><img src="../assets/img/special_4@2x.png" alt="" style="width: 0.28rem;position: relative;top: 0.05rem;"></span><span >{{classn.name}}</span></div></div>
      </div>
    </div>
    <div class="shopings" ref="wra">
      <div>
        <div>
          <div  v-for = "(classn,index) in shop" :key="index" class="food" >
            <div class="rexiao">
            <span class="span">{{classn.name}}</span>
            </div>
            <div class="shanp" v-for = "(classa,ind) in classn.foods" :key="ind">
              <div class="shanpp" style="position: relative">
                <img :src="classa.image" alt="" class="img" @click="foodc(index,ind)">
                <div style="display: inline-block;margin-left: 0.2rem;position: absolute;top:0.04rem">
                <p style="font-size: 0.28rem;color: rgb(7,17,27);line-height: 0.28rem;">{{classa.name}}</p>
                <p style="font-size: 0.2rem;color: rgb(147,153,159);line-height: 0.25rem;margin-top: 0.16rem">{{classa.description}}</p>
                <p style="font-size: 0.2rem;color: rgb(147,153,159);line-height: 0.2rem;margin-top: 0.16rem"><span>月售{{classa.sellCount}}份</span><span style="margin-left: 0.24rem;">好评率{{classa.rating}}%</span></p>
                <p style="margin-top: 0.16rem"><span style="font-size: 0.28rem;color:red;font-weight: bold;line-height: 0.48rem;">¥{{classa.price}}</span>
                  <span class="old" v-show="classa.oldPrice">¥<s>{{classa.oldPrice}}</s></span></p>
                </div>
              <carcont style="position: absolute;right: 0;bottom:0.36rem;" :foods="classn.foods" :index="ind"></carcont>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fold">
    <div class="fooddetail" v-show="xian" ref="foodq">
      <div>
        <div class="back" @click="s"><img src="../assets/back.png" alt="" style="width: 0.5rem;height: 0.5rem"></div>
      <img :src='foodin.image' alt="" style="height: 7.5rem;width: 100%;">
      <div class="foodname">
        <div class="foodname_" style="position: relative">
          <p>{{foodin.name}}</p>
          <p style="margin-top: 0.16rem;padding-bottom: 0.36rem;font-size: 0.28rem;color: rgb(147,153,159);"><span>月售{{foodin.sellCount}}份</span><span style="margin-left: 0.24rem">好评率{{foodin.rating}}%</span></p>
          <span style="font-size: 0.28rem;font-weight: normal;color:rgb(240,20,20);">¥{{foodin.price}}<span v-show="foodin.oldPrice" style="font-size:0.2rem;color:rgb(147,153,159);margin-left: 0.16rem"><del>¥{{foodin.oldPrice}}</del></span></span>
          <div v-show="!foodin.count" @click="jion" style="position: absolute;bottom:0.36rem;right: 0.36rem;width: 1.48rem;height: 0.48rem;background: rgb(0,160,220);color:white;border-radius: 0.24rem;text-align: center;line-height: 0.36rem;"><span style="font-size: 0.2rem" >加入购物车</span></div>
          <div v-show="foodin.count > 0"><carcon style="position: absolute;bottom:0.36rem;right: 0.36rem;" :foods="foodin"></carcon></div>
        </div>
      </div>
      <div style="width: 100%;height: 0.32rem;background: #f3f5f7;border-bottom: 0.01rem solid rgba(7,17,27,0.1);
      border-top: 0.01rem solid rgba(7,17,27,0.1);"></div>
      <div v-show="foodin.info">
        <div style="padding: 0.36rem;box-sizing: border-box;">
          <p>商品介绍</p>
          <p style="font-size: 0.24rem;font-weight: 200;color: rgb(77,85,93);line-height: 0.48rem;padding: 0.16rem;">{{foodin.info}}</p>
        </div>
        <div style="width: 100%;height: 0.32rem;background: #f3f5f7;border-bottom: 0.01rem solid rgba(7,17,27,0.1);
      border-top: 0.01rem solid rgba(7,17,27,0.1);"></div>
      </div>
        <div style="padding: 0.36rem 0.36rem 0 0.36rem;">
          <p>商品评价</p>
          <div style="height: 0.54rem">
            <ul style="margin-top: 0.36rem;" class="fen">
              <li style="background: rgb(0,160,220);font-size: 0.24rem;color:white;">全部57</li>
              <li style="margin-left: 0.16rem;background: rgba(0,160,220,0.2)">推荐47</li>
              <li style="margin-left: 0.16rem;background: rgba(77,85,93,0.2)">吐槽10</li>
            </ul>
          </div>
        </div>
        <div style="margin:0.24rem 0 0.24rem 0;padding: 0.18rem 0.36rem 0.18rem 0.36rem;border-top: 1px solid rgba(7,17,27,0.1) ;border-bottom: 1px solid rgba(7,17,27,0.1)">
          <span style="font-size: 0.24rem;color:rgb(147,153,159);line-height: 0.48rem">只看有内容的评价</span>
        </div>
        <div style="padding: 0 0.36rem 0 0.36rem;width: 100%;box-sizing: border-box">
          <ul v-for="(foodw,indexx) in foodin.ratings" style="width: 100%" :key="indexx">
            <li style="width: 100%;border-bottom:1px solid rgba(7,17,27,0.1)">
              <p style="width: 100%;margin-top: 0.3rem"><span style="font-size:0.2rem;color:rgb(147,153,159);line-height: 0.24rem">{{foodw.rateTime | formatDate}}</span>
                <span style="float: right;font-size: 0.2rem;color:rgb(147,153,159);line-height: 0.24rem">{{foodw.username}}
                <img :src="foodw.avatar" alt="" style="width: 0.24rem;height: 0.24rem;margin-left: 0.12rem;"></span></p>
              <div style="padding: 0.2rem 0 0.2rem 0;"><span style="font-size: 0.28rem">{{foodw.text}}</span></div>
            </li>
          </ul>
        </div>
        <div style="height: 1rem"></div>
    </div>
    </div>
    </transition>
  </div>
</template>
<script>
import carcont from '@/components/cartcontrol'
import carcon from '@/components/cartcontro'
import Scroll from 'better-scroll'
export default {
  props: ['goods'],
  data () {
    return {
      shop: '',
      listHeight: [],
      scrollY: 0,
      foodin: '',
      xian: false
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          let foodList = this.$refs.wra.getElementsByClassName('food')
          let el = foodList[i]
          this.menuScroll.scrollToElement(el, 200)
          return i
        }
      }
      return 0
    }
  },
  filters: {
    formatDate (tim) {
      let time = new Date(tim)
      let year = time.getFullYear()
      let month = time.getMonth()
      let day = time.getDate()
      let hour = time.getHours()
      let minutes = time.getMinutes()
      return `${year}-${month}-${day} ${hour}:${minutes}`
    }
  },
  methods: {
    jion () {
      if (this.foodin.count > 0) {
        this.foodin.count++
      } else {
        this.$set(this.foodin, 'count', 1)
      }
      console.log(this.foodin.count)
    },
    s () {
      this.xian = false
    },
    foodc (index, ind) {
      this.xian = true
      console.log(this.foodin)
      this.foodin = this.shop[index].foods[ind]
    },

    _initScroll () {
      this.menuScro = new Scroll(this.$refs.foodq, {click: true})
      this.menuScroll = new Scroll(this.$refs.wrapper, {click: true})
      this.foodsScroll = new Scroll(this.$refs.wra, {probeType: 3, click: true})
      this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight () {
      let foodList = this.$refs.wra.getElementsByClassName('food')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    f (index) {
      let foodList = this.$refs.wra.getElementsByClassName('food')
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el, 200)
      return index
    }
  },
  components: {
    carcont,
    carcon
  },
  created () {
    setTimeout(() => {
      this.shop = this.goods
      /* eslint-disable no-new */
      this.$nextTick(() => {
        this._calculateHeight()
        this._initScroll()
      })
    }, 100)
  }
}
</script>
<style scoped>
  .fen li{
    border-radius: 2%;
    font-size: 0.24rem;
    list-style: none;
    float: left;
    width: 1.5rem;
    height: 0.54rem;
    line-height: 0.54rem;
    text-align: center;
  }
  .back{
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    background: rgba(255,255,255,0.3);
    line-height: 0.5rem;
    text-align: center;
    z-index: 100;
  }
  @keyframes xiangzuo {
    0%{transform: translateX(-100%)}
    100%{transform: translateX(0)}
  }
  @keyframes xiangyou {
    0%{transform: translateX(0%)}
    100%{transform: translateX(-100%)}
  }
  .fold-enter-active{
   animation: xiangzuo 0.5s;
  }
  .fold-leave-active{
   animation: xiangyou 0.5s;
  }
  .foodname{
    width: 100%;
    background: white;
  }
  .foodname_{
    width: 100%;
    padding: 0.36rem;
    box-sizing: border-box;
  }
  .fooddetail{
    width: 100%;
    position: absolute;
    top:0;
    /*left: -100%;*/
    bottom:0.94rem;
    background: white;
    z-index: 9;
    min-height: 100%;
    overflow: hidden;
    /*display: none;*/
  }
  .old{
    font-size: 0.2rem;
    color:rgb(147,153,159);
    font-weight: normal;
    line-height: 0.48rem;
    margin-left: 0.16rem;
  }
  .img{
    width: 1.28rem;
    height: 1.28rem;
  }
  .shanpp{
    width: 87%;
    height: 100%;
    position: absolute;
    border-bottom: 0.01rem solid rgba(7,17,27,0.1);
  }
  .shanp{
    width: 100%;
    height: 2.04rem;
    padding: 0.36rem;
    position: relative;
  }
  .span{
    margin-left: 0.28rem;
  }
  .rexiao{
    border-left: 0.04rem solid #d9dde1;
    height: 0.52rem;
    font-size: 0.24rem;
    color:rgb(147,153,159);
    font-weight: normal;
    line-height: 0.48rem;
    background: #F3F5F7;
  }
  .shangp{
    width: 1.12rem;
    height: 1.08rem;
    padding: 0 0.24rem 0 0.24rem;
    border-bottom: 0.01rem solid rgba(7,17,27,0.1);
    /*border-top: 0.01rem solid rgba(7,17,27,0.1);*/
    font-size: 0.24rem;
    color: rgb(0,0,0);
    font-weight: 200;
    line-height: 0.28rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .shopings{
    position: absolute;
    top: 3.51rem;
    bottom: 0.94rem;
    left: 1.6rem;
    right: 0;
    overflow: hidden;
  }
  .fenlei{
    position: absolute;
    top: 3.5rem;
    bottom: 0.94rem;
    width: 1.6rem;
    background: rgba(7,17,27,0.1);
    overflow: hidden;
  }
  .dddd{
    width:1.6rem;
  }
  .current{
    color: black;
    background: white;
    font-weight: bold;
  }
</style>
