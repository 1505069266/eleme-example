<template>
  <div >
    <div class="jian" @click="less" v-show="foods.count>0">-</div>
    <div class="shuliang" v-show="foods.count>0">{{foods.count}}</div>
    <div class="jia" @click="add">+</div>
  </div>
</template>

<script>
export default {
  props: ['foods'],
  methods: {
    add () {
      if (this.foods.count) {
        this.foods.count++
      } else {
        this.$set(this.foods, 'count', 1)
      }
    },
    less () {
      if (this.foods.count <= 0) {
        this.foods.count = 0
      } else {
        this.foods.count--
      }
    }
  }
}
</script>

<style scoped>
  .shuliang{
    display: inline-block;
    font-size: 0.32rem;
    color:rgb(147,153,159);
    line-height: 0.4rem;
    width: 0.4rem;
    text-align: center;
  }
  .jian{
    width: 0.37rem;
    height: 0.37rem;
    border: 0.03rem solid rgb(0,160,220);
    border-radius: 50%;
    background: white;
    text-align: center;
    line-height: 0.32rem;
    font-size: 0.4rem;
    color:rgb(0,160,220);
    display: inline-block;
  }
  .jia{
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: rgb(0,160,220);
    text-align: center;
    line-height: 0.35rem;
    font-size: 0.4rem;
    color:white;
    display: inline-block;
  }
</style>
