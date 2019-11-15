<template>
    <keep-alive include="seclisttwo,seclistthree">
        <div class="sec">
                <mt-header class= "mtHeader" fixed title="小米秒杀">
                    <router-link class="routerLink" to="/" slot="left">
                        <mt-button icon="back" class="mtButton"></mt-button>
                    </router-link>
                    <router-link class="routerLink" to="/" slot="right">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAA1CAMAAADf0/M4AAAAb1BMVEUAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIA7LLPuAAAAJHRSTlMAsbYNxBnB488lEiGz2QaBD7xuPy/s39SpSzT7jPJ3OWBWnp1W5OmJAAABbUlEQVRIx+3SbW+CMBSG4dNaQGoLVN4Kguj2/P/fuLZmyaZR6zKXffD+dA7JlRMI5EoObzxrQ9qkVzPvh4RCtUBsog4gQ3zZQiRTAJqtde/SgikfM7N/yPxoe2A2TDGuARhJA7Bj4ypvfOOmkr5VswZKGZZiC2S5G6tR7YCBJkA3dN7GiT2dOgCdDFOjgYkswFcXIvc3CgqFG2FaccASA9R9sTkJBTAveLTgL/GLQg7JI2JPjW3VQodYsSuPjkEf97tY0bXwzV2sCGn44sVc5tv2i6gEkN4S66GgYjHRN+YpCaMs2xjRaH0sPpdatPldsdk337b7N4rz/ULc7SX+SHDAVA+JNdA/JnpAyyffCO/xtG9VCUD84OsqJ6rYG06of/qXOKGihfLCAiZaGMDSBHRLpFg6oKQBgKnlWIea5Ea1ATCQ5AC6VGedK+tTca1UZABURTRqxKdHco08GnAHfHKYrM5CwrKr2WmQRPQBWshZO5+sae4AAAAASUVORK5CYII=" alt="">
                    </router-link>
                </mt-header>
                <div class="time-nav">
                    <div class="time-nav-top">
                        <span
                            v-for="nav in navs"
                            :key="nav.id"
                            :class="{active:type===nav.type}"
                            @click="type=nav.type"
                        >
                        {{nav.num}}</span>
                    </div>
                    <div class="time-nav-bottom">
                        <p
                            v-for="nav in navs"
                            :key="nav.numid"
                            :class="{active:type===nav.type}"
                            @click="type=nav.type"
                        >
                        {{nav.title}}</p>
                    </div>
                </div>
                <!-- 第一页 -->
                <div class="list" v-if="this.type=='in_theaters'">
                    <div class="timer" v-if="Date.now()<=1573884000000">
                        <span>即将开始的秒杀</span>
                        <aside>距开始：</aside>
                        <p>{{timerone1 | filterTimerone1(":")}}</p>
                    </div>
                    <div class="timer" v-if="Date.now()>=1573884000000">
                        <span>抢购中 &ensp;先到先得哟</span>
                        <aside>距结束：</aside>
                        <p>{{timerone2 | filterTimerone2(":")}}</p>
                    </div>
                    <router-link 
                        class="movie-item"
                        v-for="datil in datils1"
                        :key="datil.position_id"
                        tag="div"
                        :to="{name:'sec',params:{id:datil.id}}"
                    >
                        <div class="img-box" :class="(!datil.goods_name?'imgboxwidth':'')">
                            <img :class="(!datil.goods_name?'imgwidth':'')" width="100%" :src="datil.img" alt="">
                        </div>
                        <div class="info" v-if="datil.goods_name">
                            <div class="info-top">
                                <p class="title">{{datil.goods_name}}</p>
                                <p class="desc">{{datil.desc}}</p>
                            </div>
                            <div class="info-middle" v-if="datil.goods_name">
                                <p class="seckill_price">￥{{datil.seckill_price}}</p>
                                <p class="goods_price">￥{{datil.goods_price}}</p>
                            </div>
                            <div class="info-bottom" v-if="datil.goods_name">
                                <p class="remind_num">{{datil.remind_num}}</p>
                            </div>
                            <router-link 
                            class="maxtimer"
                            tag="div"
                            to="/home"
                            v-if="Date.now()>=1573884000000"
                            >
                                <p>登录后抢购</p>
                            </router-link>
                            <div 
                            class="mintimer"
                            v-else
                            >   
                                <p @click="datil.isBtn=!datil.isBtn;isButton1()" v-if="datil.isBtn">提醒我</p>
                                <span @click="datil.isBtn=!datil.isBtn" v-else>取消提醒</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <!-- 第二页 -->
                <div class="list" v-if="this.type=='coming_soon'">
                    <div class="timer" v-if="Date.now()<=1573905600000">
                        <span>即将开始的秒杀</span>
                        <aside>距开始：</aside>
                        <p>{{timertwo1 | filterTimertwo1(":")}}</p>
                    </div>
                    <div class="timer" v-if="Date.now()>=1573905600000 && Date.now()<=1573911720">
                        <span>抢购中 &ensp;先到先得哟</span>
                        <aside>距结束：</aside>
                        <p>{{timertwo2 | filterTimertwo2(":")}}</p>
                    </div>
                    <router-link 
                        class="movie-item"
                        v-for="datil in datils2"
                        :key="datil.position_id"
                        tag="div"
                        :to="{name:'sec',params:{id:datil.id}}"
                    >
                        <div class="img-box" :class="(!datil.goods_name?'imgboxwidth':'')">
                            <img :class="(!datil.goods_name?'imgwidth':'')" width="100%" :src="datil.img" alt="">
                        </div>
                        <div class="info" v-if="datil.goods_name">
                            <div class="info-top">
                                <p class="title">{{datil.goods_name}}</p>
                                <p class="desc">{{datil.desc}}</p>
                            </div>
                            <div class="info-middle" v-if="datil.goods_name">
                                <p class="seckill_price">￥{{datil.seckill_price}}</p>
                                <p class="goods_price">￥{{datil.goods_price}}</p>
                            </div>
                            <div class="info-bottom" v-if="datil.goods_name">
                                <p class="remind_num">{{datil.remind_num}}</p>
                            </div>
                            <router-link 
                            class="maxtimer"
                            tag="div"
                            to="/home"
                            v-if="Date.now()>=1573905600000"
                            >
                                <p>登录后抢购</p>
                            </router-link>
                            <div 
                            class="mintimer"
                            v-if="Date.now()<=1573911720000 && Date.now()<=1573905600000"
                            >   
                                <p @click="datil.isBtn=!datil.isBtn;isButton1()" v-if="datil.isBtn">提醒我</p>
                                <span @click="datil.isBtn=!datil.isBtn" v-else>取消提醒</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <!-- 第三页 -->
                <div class="list" v-if="this.type=='coming_soon1'">
                    <div class="timer" v-if="Date.now()<=1573912800000">
                        <span>即将开始的秒杀</span>
                        <aside>距开始：</aside>
                        <p>{{timerthree1 | filterTimerthree1(":")}}</p>
                    </div>
                    <div class="timer" 
                    v-if="Date.now()>=1573912800000 && Date.now()<=1573918920000"
                    >
                        <span>抢购中 &ensp;先到先得哟</span>
                        <aside>距结束：</aside>
                        <p>{{timerthree2 | filterTimerthree2(":")}}</p>
                    </div>
                    <router-link 
                        class="movie-item"
                        v-for="datil in datils3"
                        :key="datil.position_id"
                        tag="div"
                        :to="{name:'sec',params:{id:datil.id}}"
                    >
                        <div class="img-box" :class="(!datil.goods_name?'imgboxwidth':'')">
                            <img :class="(!datil.goods_name?'imgwidth':'')" width="100%" :src="datil.img" alt="">
                        </div>
                        <div class="info" v-if="datil.goods_name">
                            <div class="info-top">
                                <p class="title">{{datil.goods_name}}</p>
                                <p class="desc">{{datil.desc}}</p>
                            </div>
                            <div class="info-middle" v-if="datil.goods_name">
                                <p class="seckill_price">￥{{datil.seckill_price}}</p>
                                <p class="goods_price">￥{{datil.goods_price}}</p>
                            </div>
                            <div class="info-bottom" v-if="datil.goods_name">
                                <p class="remind_num">{{datil.remind_num}}</p>
                            </div>
                            <router-link 
                            class="maxtimer"
                            tag="div"
                            to="/home"
                            v-if="Date.now()>=1573912800000"
                            >
                                <p>登录后抢购</p>
                            </router-link>
                            <div 
                            class="mintimer"
                            v-else
                            >   
                                <p @click="datil.isBtn=!datil.isBtn;isButton1()" v-if="datil.isBtn">提醒我</p>
                                <span @click="datil.isBtn=!datil.isBtn" v-else>取消提醒</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

    </keep-alive>
</template>

<script>
import { Toast } from 'mint-ui';


export default {
    data() {
        return {
            // isButton:true,
            timerone1:Math.abs(Date.now()-1573884000000)-28800000,
            timerone2:Math.abs(Date.now()-1573904520000)-28800000,
            timertwo1:Math.abs(Date.now()-1573905600000)-28800000,
            timertwo2:Math.abs(Date.now()-1573911720000)-28800000,
            timerthree1:Math.abs(Date.now()-1573912800000)-28800000,
            timerthree2:Math.abs(Date.now()-1573918920000)-28800000,
            type:"in_theaters",
            datils1:[],
            datils2:[],
            datils3:[],
            navs:[
                {id:1,numid:4,num:"14:00",title:"抢购中",type:"in_theaters"},
                {id:2,numid:5,num:"20:00",title:"即将开始",type:"coming_soon"},
                {id:3,numid:6,num:"22:00",title:"即将开始",type:"coming_soon1"}
            ],
        }
    },
    filters:{ //局部过滤器
        filterTimerone1(val,options="-"){
            let date = new Date(val)
            return (date.getHours()<10?"0"+date.getHours():date.getHours())+options+(date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())+options+(date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds());
        },
        filterTimerone2(val,options="-"){
            let date = new Date(val)
            return (date.getHours()<10?"0"+date.getHours():date.getHours())+options+(date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())+options+(date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds());
        },
        filterTimertwo1(val,options="-"){
            let date = new Date(val)
            return (date.getHours()<10?"0"+date.getHours():date.getHours())+options+(date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())+options+(date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds());
        },
        filterTimertwo2(val,options="-"){
            let date = new Date(val)
            return (date.getHours()<10?"0"+date.getHours():date.getHours())+options+(date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())+options+(date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds());
        },
        filterTimerthree1(val,options="-"){
            let date = new Date(val)
            return (date.getHours()<10?"0"+date.getHours():date.getHours())+options+(date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())+options+(date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds());
        },
        filterTimerthree2(val,options="-"){
            let date = new Date(val)
            return (date.getHours()<10?"0"+date.getHours():date.getHours())+options+(date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())+options+(date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds());
        }

    },
    methods:{
        isButton1(){
            Toast({
                message: '抢购前15分钟将提醒您',
                position: 'middle',
                duration: 2000,
            });
        }
    },
        
    created(){
        // console.log(this.timerone)
        setInterval(()=>{
            this.timerone1 =Math.abs(Date.now()-1573884000000)-28800000
            this.timerone2 =Math.abs(Date.now()-1573904520000)-28800000
            this.timertwo1 =Math.abs(Date.now()-1573905600000)-28800000
            this.timertwo2 =Math.abs(Date.now()-1573911720000)-28800000
            this.timerthree1 =Math.abs(Date.now()-1573912800000)-28800000
            this.timerthree2 =Math.abs(Date.now()-1573918920000)-28800000
        },1000)
        // console.log(Date.now())
        this.$http.get("/api/xiaomi/index/sec",{
            }).then(res=>{
                this.datils1 =res.data.data.object_list[0].data.data[0].list
                this.datils2 =res.data.data.object_list[0].data.data[1].list
                this.datils3 =res.data.data.object_list[0].data.data[2].list
        })
    }
}
</script>

    <style lang="scss" scoped>
    .sec {
        .mtHeader{
            background: #f2f2f2;
            height: 50px;
            font-size: 0.17rem;
            color: rgba(0,0,0,.72);
            .routerLink{
                img{
                    width: 0.25rem;
                    height: 0.25rem;
                    margin-left: 0.60rem;
                }
            }
        }
        .active {
    border-bottom: none;
    color: #ed5b00;
}
        .mintui-back:before{
            font-size: 0.21rem;
        }
        .time-nav{
            overflow-x: scroll;
            width: 3.75rem;
            padding: .15rem .2rem .2rem;
            white-space: nowrap;
            border-bottom: .09rem solid #ececec;
            height: 1.1rem;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            padding-top: 54px;
            overflow: hidden;
            .time-nav-top{
                height: 25px;
                width: 100%;
                display:flex;
                justify-content: space-around;
                color: rgba(0,0,0,.87);
                span{
                    font-size:0.18rem;
                    height: 25px;
                }
            }
            .time-nav-bottom{
                height: 25px;
                width: 100%;
                display:flex;
                justify-content: space-around;
                padding-left: 0.02rem;
                p{
                    font-size:0.11rem;
                    height: 25px;
                }
                p[data-v-2576be4a]{
                   position: relative;
                   left: 0.04rem;
                }
            }
            .active{
                color:orange;
            }
        }
        .movie-item{
            height: 1.2rem;
            box-sizing: border-box;
            padding: .08rem;
            border-bottom: 1px #ccc solid;
            display: flex;
            // flex-direction: column-reverse;
            .img-box{
                width: 1rem;
                height: 1rem;
                &.imgboxwidth{
                    width: 3.75rem;
                }
                .imgwidth{
                    height: 100px;
                    display: block;
                    width: 100%;
                }
            }
            .info{
                padding:0  .2rem 0 .2rem;
                .info-top{
                    .title{
                        color:black;
                    }
                    .desc{
                        font-size: 0.12rem;
                        color: #9a9a9a;
                    }
                }
                .info-middle{
                    display: flex;
                    margin:0.15rem 0 0 -.1rem;
                    p{
                        margin-left: 0.1rem;
                    }
                    .goods_price{
                        color:#ccc;
                        text-decoration: line-through;
                    }
                    .seckill_price{
                        color:#ff6b00;
                    }
                }
                .info-bottom{
                    margin-top:0.12rem;
                    .remind_num{
                        font-size: 0.12rem;
                        color:#9a9a9a;
                    }
                }
            }
            .maxtimer{
                position: relative;
                left: 1.4rem;
                top: -0.3rem;
                p{
                    height: 0.3rem;
                    width: 0.9rem;
                    background: #ff6b00;
                    color:white;
                    font-size: 12.5px;
                    text-align: center;
                    line-height: 0.3rem;
                    border-radius: 1px;
                }
                .active{
                   background: green; 
                }
            }
            .mintimer{
                position: relative;
                left: 1.4rem;
                top: -0.3rem;
                p,span{
                    height: 0.3rem;
                    width: 0.9rem;
                    background: #8ac349;
                    border: #8ac349 solid 0.005rem;
                    color:white;
                    font-size: 12.5px;
                    text-align: center;
                    line-height: 0.3rem;
                    border-radius: 1px;
                }
                span{
                    display: block;
                    background: white;
                    color:#8ac349;
                    border: #8ac349 solid 0.005rem;
                }
                .active{
                   background: green; 
                }
            }
        }
    }
    .timer{
        display: flex;
        height: .42rem;
        line-height: .42rem;
        padding: 0 .2rem;
        justify-content: space-between;
        align-content: center;
        color: rgba(0,0,0,.87);
        aside{
            position: relative;
            left: 0.46rem;
            color: rgba(0,0,0,.87);
        }
        p{
            font-size: 17px;
            color:rgb(230, 44, 44);
            font-weight: 900;
        }
    }
    
    </style>