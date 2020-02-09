<template>
  <div class="home">
    <van-nav-bar title="购物车"></van-nav-bar>
    <div class="cart">
      <van-card
        
        v-for="(item,index) in cart"
        :key=index
        :price="item.price"
        :desc="item.company"
        :title="item.name"
        :thumb="item.img">
        <div slot="footer">
          <van-button size="mini" @click="deleteCart(item,index)">删除</van-button>
        </div>
      </van-card>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import URL from '@/servie.config.js'
import {mapState} from 'vuex'

export default {
  data(){
    return {
      cart: []
    }
  },
  computed:{
    ...mapState(['userInfo'])
  },
  methods:{
    deleteCart(item,index){
      this.cart.splice(index,1);
    }
  },
  created(){
    if(JSON.stringify(this.userInfo)!='{}'){
      console.log(this.userInfo)
      axios({
        url: URL.getCartByUserId,
        method: 'post',
        data:{
          userId: this.userInfo._id
        }
      }).then(res=>{
        console.log(res)
        let result = res.data;
        if(result.code === 200){
          for(var i of result.message){
            this.cart.push(i.productId)
          }
        }else{
          this.$toast.fail('获取购物车失败');
        }
      }).catch()
    }else{
      this.$router.push('/profile')
    }
    
  }
}
</script>

<style lang="scss">
.cart{
  margin-bottom: 1rem;
}
</style>
