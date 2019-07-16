<template>
  <div id="app">
    <v-head :seller="seller"></v-head>
    <div class="daohang">
      <router-link to="/goods"><span class="hong">商品</span></router-link>
      <router-link to="/pingfen"><span class="hei">评价</span></router-link>
      <router-link to="/shops"><span class="hei">商家</span></router-link>
    </div>
    <v-shopcar :goods="goods"></v-shopcar>
    <router-view :seller="seller" :goods="goods" :ratings="ratings" :sell="sell"></router-view>
  </div>
</template>
<script>
import vShopcar from '@/components/shopcar'
import vHead from '@/components/header'
export default {
//  name: 'App',
  data () {
    return {
      seller: '',
      goods: '',
      shopin: '',
      ratings: '',
      sell: ''
    }
  },
  components: {
    vHead,
    vShopcar
  },
  created () {
    this.axios.get('static/data.json')
      .then((res) => {
        this.seller = res.data.seller
        console.log(res.data)
        this.goods = res.data.goods
        this.ratings = res.data.ratings
        this.sell = res.data.seller
        this.shopin = res.data.seller.supports
      })
  }
}
</script>
<style>
  .router-link-active{
    color: rgb(240,20,20);
  }
  .daohang{
    width: 100%;
    background: white;
    height: 0.8rem;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    display: flex;
    justify-content: space-around;
  }
  .hong{
    font-size: 0.28rem;
    /*color: rgb(240,20,20);*/
    line-height: 0.8rem;
  }
  .hei{
    font-size: 0.28rem;
    /*color: rgb(77,85,93);*/
    line-height: 0.8rem;
  }
  #app{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
