<template>
    <div class="cart-container">
        <div class="warp">
            <div class="nologin">
                <p class="gologin same">
                    <span>{{span1}}</span>
                    <em>{{em1}}</em>
                </p>
            </div>
            <div class="nogoods" v-if="computeTotal.num==0">
                <p class="gogoods">
                    <span>{{span2}}</span>
                    <router-link to="/" class="em">{{em2}}</router-link>
                </p>
            </div>


           <div class="top" >
                <mt-cell 
                    :title="list.name"
                    v-for="(list,index) in lists"
                    :key="index"
                    class="mtcell"
                >
                    <div class="button">
                        <span @click="reduceGoodInCar(list)">-</span>
                        <P>{{list.num}}</P>
                        <span @click="addGoodInCar(list)">+</span>
                    </div>

                    <img slot="icon" :src="list.image_url" width="40" height="40">

                    <div class="money">
                        售价:{{list.market_price}}
                    </div>
                <!-- <p class="p">￥{{computeTotal.price}}</p> -->

                </mt-cell>
            </div>

        
            <div class="goods-box">
                <div class="top-img">
                    <img :src="img" alt="">
                </div>
                <div class="goodslist">
                    <div 
                        class="itembox"
                        v-for="good in goods"
                        :key="good.action.path"
                        >
                        <router-link 
                            to=""
                            tag="a"
                        >
                        <p ><img @click="addGoodInCar(good)" src="../../assets/xiaomi_tabbar1.png" alt=""></p>
                            <div class="itemimg">
                                <img :src="good.image_url" alt="">
                            </div>
                            <div class="iteminfo">
                                <div class="itemdsc">
                                    {{good.name}}
                                </div>
                                <div class="itemprice">
                                    {{good.market_price}}
                                    <del class="delprice">
                                        {{good.price}}
                                    </del>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom" v-if="computeTotal.num!=0">
            <aside>
                <p>共{{computeTotal.num}}件  金额：</p>
                <p class="p">￥{{computeTotal.price}}</p>
            </aside>
            <div>继续购物</div>
            <nav>去结算</nav>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
    data(){
        return {
            span1:"登陆后享受更多优惠",
            em1:"去登陆",
            span2:"购物车还是空的",
            em2:"去逛逛",
            img:"https://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg",
            goods:[]
        }
    },
    created() {
        this.$http.get("./api/cart.json").then(res=>{
            this.goods = res.data
        })
    },
    methods:{
        ...mapActions(["addGoodInCar","reduceGoodInCar"])
    },
    computed:{
        ...mapState({

            lists:state=>state.myCar.cars,
        }),
        ...mapGetters(["computeTotal"])
    }
}
</script>

<style lang="scss">
@import '../../stylesheets/main.scss';
    .cart-container{
        // padding-top:0.5rem;
        background: #fff;
        color: #3c3c3c;
        .warp{
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;
            .goods-box{
                background: #fff;
                text-align: left;
                padding-bottom: .45rem;
                
                .goodslist{
                    display: flex;
                    flex: 1;
                    flex-wrap: wrap;
                    flex-direction: row;
                    justify-content: space-between;
                    align-content: flex-start;
                    align-items: center;
                    .itembox{
                        flex: 0 1 49.5%;
                        overflow: hidden;
                        position: relative;
                        p{
                            position: absolute;
                            bottom:13px;
                            right:13px;
                            img{
                                width: 15px;
                                height: 15px;
                            }
                        }
                        a{
                            display: block;
                            outline: 0;
                            .itemimg{
                                    position: relative;
                                img{
                                    display: block;
                                    outline: 0;
                                    width: 100%;
                                    min-height: 1.78rem;
                                }
                            }
                            .iteminfo{
                                    padding: .09rem .13rem .11rem;
                                    overflow: hidden;
                                    text-align: left;
                                .itemdsc{
                                    font-size: .14rem;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                                .itemprice{
                                        font-size: .16rem;
                                        display: inline-block;
                                        color: #ff6700;
                                        margin-top: .1rem;
                                        position: relative;
                                        padding-left: 0.6em;
                                        line-height: 0.5em;
                                        &::before{
                                            content: "\A5";
                                            position: absolute;
                                            left: 0;
                                            top: 0;
                                            font-size: .76em;
                                            text-decoration: none;
                                        }
                                    .delprice{
                                        font-size: .11rem;
                                        margin-left: .03rem;
                                        color: rgba(0,0,0,.54);
                                        text-decoration: line-through;
                                        position: relative;
                                        padding-left: .55em;
                                        // line-height: 0.5em;
                                        &::before{
                                            content: "\A5";
                                            position: absolute;
                                            left: 0;
                                            top: 2px;
                                            font-size: .76em;
                                            text-decoration: none;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .top-img{
                    width: 3.75rem;
                    height: 0.61rem;
                    img{
                        width: 3.75rem;
                        height: 0.6rem;
                        outline: 0;
                    }
                }
            }
            .nogoods{
                background: #ebebeb;
                padding: .1rem;
                .gogoods{
                    // height: 0.72rem;
                    font-size: .12rem;
                    text-decoration: none;
                    text-align: center;
                    outline: 0;
                    span{
                        display: inline-block;
                        line-height: .4rem;
                        background: url("https://m.mi.com/static/img/cartnull.daaf7926f8.png") no-repeat 0;
                        background-size: auto 100%;
                        padding: 0 .08rem 0 .48rem;
                        color: rgba(0,0,0,.27);
                    }
                    .em{
                        display: inline-block;
                        border: 1px solid rgba(0,0,0,.15);
                        box-sizing: border-box;
                        height: .25rem;
                        line-height: .25rem;
                        padding: 0 .12rem;
                        color: rgba(0,0,0,.87);
                        font-style: normal;
                    }
                }
            }
            .nologin{
                .gologin{
                    height: .502rem;
                    padding: 0 .28rem 0 .16rem;
                    position: relative;
                    color: rgba(0,0,0,.54);
                    outline: 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span{
                        font-size: .16rem;
                        color: rgba(0,0,0,.87);
                        display: block;
                        text-align: left;
                        flex: 1 1 auto;
                    }
                    em{
                        font-size: .12rem;
                        text-align: right;
                    }
                }
            }
        }
    }
    .same{
        @include rightrow;
        &::after{
            width: 0.08rem;
            height: .08rem;
        }
    }
    .mint-cell-wrapper {
         width: 3.75rem;
            height: 1.18rem;
            position: relative;
    }
    .top{
        .mtcell{
            width: 3.75rem;
            height: 1.18rem;
            position: relative;
            img{
                width: 0.91rem;
                height: 0.91rem;
                position: absolute;
                margin-left: 0.06rem;
                margin-top: -0.33rem;
                z-index: 100;
            }
            
            .button{
                width: 0.93rem;
                height: 0.31rem;
                display: flex;
                border:1px solid #ccc;
                position: relative;
                top:0.3rem;
                left:-1.38rem;
                span,p{
                    display: block;
                    width: 0.93rem;
                    height: 0.31rem;
                    text-align: center;
                    line-height: 0.29rem;
                }
                span{
                    background: #f0e9e9;
                    opacity: 0.6;
                }
            }
            .mint-cell-text{
                font-size: 13px;
                position: relative;
                left: 1.24rem;
                top:-0.24rem;
            }
            .money{
                font-size: 12px;
                position: absolute;
                left: 1.34rem;
                top:0.52rem;
            }
        }
    }
    .bottom{
        width: 100%;
        height: 0.4974rem;
        background:white;
        position: fixed;
        bottom: 0;
        z-index: 1000;
        display: flex;
        aside{
            width: 33%;
            height: 100%;
            // background: red;
            p{
                padding-left: 0.15rem;
            }
            .p{
                color:orange;
                font-size: 18px;
                font-weight: 900;
                padding-left: 0.03rem;
            }
        }
        div{
            background: #f4f4f4;
            text-align: center;
            width: 33%;
            line-height: 0.497rem;
            font-size: 15px;
        }
        nav{
          text-align: center;
            width: 33%;
            line-height: 0.497rem;  
            background: #ff6700;
            color:white;
            font-size: 15px;
        }
    }
    
</style>