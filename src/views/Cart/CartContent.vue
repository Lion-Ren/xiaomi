<template>
    <div class="cart-container">
        <div class="warp">
            <div class="nologin">
                <p class="gologin same">
                    <span>{{span1}}</span>
                    <em>{{em1}}</em>
                </p>
            </div>
            <div class="nogoods">
                <p class="gogoods">
                    <span>{{span2}}</span>
                    <router-link to="/" class="em">{{em2}}</router-link>
                </p>
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
    </div>
</template>

<script>

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
        this.$http.get("/api/cart.json").then(res=>{
            this.goods = res.data
        })
    },
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
</style>