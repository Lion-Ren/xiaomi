<template>
    <div class="nex">
        <mt-header class="bbbooo"  style="background: rgba(0,0,0,0)">
            <div slot="left" @click="goBack" >
                <mt-button icon="back" style="background: rgba(0,0,0,0.3)"></mt-button>
            </div>
            <mt-button icon="more" slot="right" style="background: rgba(0,0,0,0.3)"></mt-button>
        </mt-header>
        <div class="nex_content">
            <div class="swiper-container aaaaa">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in ImgData" :key="index">
                        <img :src="item.img_url" alt="">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="miaosha">
                <div>
                    秒杀价
                </div>
                <div>
                    <i>{{h}}</i>:
                    <i>{{m}}</i>:
                    <i>{{s}}</i>
                </div>
            </div>
            <div>
                <p class="title">{{seo.title}}</p>
                <div v-html="seo.description" class="shabi"></div>
                <div class="lllldiv">
                    <b class="picB">￥{{pci.price}}</b>
                    &ensp;
                    <i class="pici">￥{{pci.market_price}}</i>
                </div>
            </div>
        </div>
        <div class="buton">
            <button>加入购物车</button>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
export default {
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
    created() {
        this.$http.get("./update.json").then(res=>{
            console.log(res.data)
            this.ImgData = res.data.data.goods_share_datas.gallery_view
            this.seo = res.data.data.seo
            this.pci = res.data.data.goods_info[0]
            this.time = res.data.data.server_time
            this.$nextTick(()=>{
                new Swiper(".aaaaa",{
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })
            })
        })
       var times = setInterval(()=>{
            var mydate = new Date();
            var oldTime = new Date(this.time)
            var newTime = new Date(oldTime - mydate)
            this.h =  newTime.getHours()
            this.m = newTime.getMinutes()
            this.s =  newTime.getSeconds()
            if(this.h<10){
                this.h = "0" + this.h
            }
            if(this.m<10){
                this.m = "0" + this.m
            }
            if(this.s<10){
                this.s = "0" + this.s
            }
            if(oldTime - mydate == 0){
                clearInterval(times)
            }
       },1000)
    },
    data(){
        return {
            ImgData:[],
            seo:{},
            pci:{},
            time:"",
            h:"",
            m:'',
            s:''
        }
    }
}
</script>

<style lang="scss">
.bbbooo{
    z-index: 10;
    position: fixed;
    top:0;
    left:0;
    right:0;
}
    .mint-button{
        border-radius: 50%;
        width:0.3rem;
        height:0.3rem;
    }
    .swiper-slide{
        img{
            width:3.75rem;
        }
    }
    .title{
        padding:0.1rem;
        font-size:22px;
        
    }
    .shabi{
        padding:0 0.1rem;
    }
    .picB{
        font-size:22px;
        color:orange;
    }
    .pici{
        text-decoration: line-through;
        font-size:12px;
        color:#999;
    }
    .nex_content{
        position: relative;
        top:-0.5rem;
        left:0 ;
        right:0;
        z-index: 1;
    }
    .lllldiv{
        padding-top:0.1rem;
    }
    .miaosha{
        width:100%;
        padding:0.2rem 0.1rem;
        text-align: center;
        background: #ff6700;
        font-size:18px;
        color:white;
        display: flex;
        justify-content: space-between;
    }
    .buton{
        width:3.75rem;
        height:0.5rem;
        position: fixed;
        bottom:0;
        left:0;
        right:0;
        background: white;
        display: flex;
        justify-content:center;
        align-items: center;
        z-index: 10;
        button{
            width:2rem;
            height:0.4rem;
            padding:0.1rem  0;
            text-align: center;
            border-radius: 0.5rem;
            border:none;
            color:white;
            background: #ff6700;
        }
    }

</style>