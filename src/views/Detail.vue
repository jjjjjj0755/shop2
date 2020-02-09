<template>
    <div>
        <van-nav-bar title="商品详情" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
        <div class="details">
            <img :src="details.img" class="details-img"/>
            <p class="details-name">{{details.name}} </p>
            <p class="details-price">￥{{details.price}}</p>
            <p class="details-company">公司: {{details.company}} </p>
            <p class="details-company">产地: {{details.city}} </p>
        </div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="cart-o" text="购物车"/>
            <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>


<script>
import axios from 'axios'
import URL from '@/servie.config.js'
import { mapState } from 'vuex'

export default {
    data(){
        return {
            details: {}
        }
    },
    created(){
        var id = this.$route.query.id;
        console.log(id)
        axios({
            url: URL.getProductsById,
            method: 'get',
            params: {
            id: id
            }
        }).then(res=>{
            let result = res.data;
            if(result.code === 200){
                this.details = result.message;
                console.log(this.details)
            }else{
                this.$toast.fail('error')
            }
        }).catch(()=>{
            //console.log(err)
        })
    },
    computed:{
        ...mapState(['userInfo'])
    },
    methods:{
        addCart(){
            console.log(this.userInfo)
            if(this.userInfo!=null&&this.userInfo!=undefined&&Object.keys(this.userInfo).length!=0){
                axios({
                    url: URL.addCartByUserId,
                    method: 'post',
                    data: {
                        userId: this.userInfo._id,
                        productId: this.details._id
                    }
                }).then(()=>{
                    this.$toast.success('添加商品成功')
                }).catch({

                })
            }else{
                this.$toast.fail('请先登陆');
                this.$router.push('/profile')
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
.details{
    &-img{
        width: 100%;
        height: 5rem;
    }
    &-name{
        padding: 0.08rem .1rem;
        font-size: .35rem;
        font-weight: bold;
    }
    &-company{
        padding: 0.08rem .1rem;
        font-size: .25rem;
    }
    &-price{
        font-size: .3rem;
        color: orange;
    }
}
</style>