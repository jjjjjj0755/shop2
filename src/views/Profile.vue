<template>
  <div class="home">
  <van-tabs v-model="active">
    <van-tab title="登陆" >
        <van-cell-group >
          <van-field required clearable label="用户名" v-model="loginUsername" placeholder="请输入用户名" />
          <van-field required clearable v-model="loginPassword" type="password" label="密码" placeholder="请输入密码"/>
        </van-cell-group>
        <div>
          <van-button @click="loginHandler" type="primary" size="large">登陆</van-button>
        </div>
    </van-tab>
    <van-tab title="注册">
       <van-cell-group>
        <van-field required clearable label="用户名" v-model="registUsername" placeholder="请输入用户名" />
        <van-field required clearable v-model="registPassword" type="password" label="密码" placeholder="请输入密码"/>
      </van-cell-group>
      <div>
        <van-button @click='registHandler' type="primary" size="large">注册</van-button>
      </div>
    </van-tab>
  </van-tabs>
  </div>
</template>

<script>

import axios from 'axios'
import URL from '@/servie.config.js'
import { mapActions } from 'vuex'

export default {
  data(){
    return {
       active: 0,
       loginUsername:'',
       loginPassword:'',
       registUsername:'',
       registPassword:''
    }
  },
  methods:{
    ...mapActions(['loginAction']),
    registHandler(){
      axios({
        url: URL.registUser,
        method: 'post',
        data:{
          userName:this.registUsername,
          password:this.registPassword
        }
      }).then((res)=>{
        if(res.data.code === 200)
          this.$toast.success('注册成功');
        else
          this.$toast.fail('注册失败');
      }).catch((err)=>{
          this.$toast.fail(err);
      })
    },
    loginHandler(){
      axios({
        url:URL.loginUser,
        method:'post',
        data:{
          userName:this.loginUsername,
          password:this.loginPassword
        }
      }).then(res=>{
        if(res.data.code === 200){
          this.$toast.success('登陆成功');
          this.loginAction(res.data.userInfo);
          //this.isloginPageShow = false;
          this.$router.go(-1);
        } else 
          this.$toast.fail('登陆失败');
      }).catch(()=>{
          this.$toast.fail('登陆失败');
      })
    }
  },
}
</script>

<style lang="scss">
</style>
