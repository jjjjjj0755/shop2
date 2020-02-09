<template>
  <div>
    <van-tabbar v-model="active" @change="changeItem">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/Cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    data(){
        return {
        active: 0
        }
    },
    created(){
      this.active = parseInt(localStorage.getItem('active'))
    },
    methods:{
      changeItem(){
        console.log(localStorage.getItem('active'))
        localStorage.setItem('active',this.active)
      }
    }
}
</script>

<style>

</style>

