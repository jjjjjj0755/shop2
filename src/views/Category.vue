<template>
  <div class="home">
    <van-nav-bar title="商品类型"></van-nav-bar>
    <div class="category">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li @click="selectCategory(item.typeId,index)" :class="{active:active==index}" v-for="(item,index) in types" :key="index">{{item.typeName}}</li>
          </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh" />
          <van-list class="content" @load="onLoad" :finished="finished" v-model="loading">
            <div @click="goDetail(item._id)" class="content-item" v-for="(item,index) in productList" :key=index>
              <img :src="item.img" />
              <p class="content-item-name">{{item.name}}</p>
              <p>￥{{item.price}}</p>
            </div>
          </van-list>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import URL from '@/servie.config.js'


export default {
  data(){
    return {
      types : 1,
      active: 0,
      productList: [],
      typeId: 1,
      start: 0,
      limit: 10,
      loading: false,
      finished: false,
      isLoading: false
    }
  },
  created(){
    axios({
      url: URL.getTypes,
      method: 'get',
    }).then(res => {
      if(res.data.code === 200){
        this.types = res.data.message
        this.getProductList();
      }else{
        this.$toast.fail('获取数据失败');
      }
    }).catch(err => {
      console.log(err);
    })
  },
  methods:{
    onLoad(){
      setTimeout(this.getProductList(),2000)
     
    },
    onRefresh(){
      this.productList = [];
      this.getProductList();
    },
    goDetail(id){
      
      this.$router.push({
        path:'detail',
        query:{
          id:id
        }})

    },
    selectCategory(typeId,index){
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.loading = true;
      this.isLoading= true;
      this.getProductList()
    },
    getProductList(){
      this.isLoading = true;
      axios({
        url: URL.getProductsByType,
        method:'get',
        params:{
          id: this.typeId,
          start: this.productList.length,
          limit: this.limit
        }
      }).then(res=>{
        var data = res.data.message;
        if(res.data.code === 200&&res.data.message.length!=0){
          this.productList.push(...data);
          this.loading=false;
        }else{
          this.finished = true;
          console.log('error')
        }
        this.isLoading = false;
      }).catch(err=>{
          console.log(err);
      })
    }
  }
}
</script>
<style lang="scss">
.nav{
  
  background-color: #eee;
  li{
    height: .6rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #fff;
    padding: 3px;
    text-align: left;
  }
  .active{
    background-color: #fff;
  }
}

.container{
  position: fixed;
  top: 46px;
  bottom: 1rem;
  right: 0;
  overflow-y: scroll;
}
.content{
  display: flex;
  padding-bottom: 1rem;
  flex-wrap: wrap;
  &-item{
    width: 40%;
    padding: 0 10px;
    text-align: center;
    img{
      width: 2rem;
      height: 2rem;
    }
    &-name{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp:2;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
