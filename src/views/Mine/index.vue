<template>
    <div class="mine">
        <div class="content">
            <header class="head">
                <div class="user">
                    <div class="user-img">
                        <img :src="userImg" alt="">
                    </div>
                    <div class="online">
                      {{online}}
                    </div>
                </div>
            </header>
            <div class="order same">
                <div class="left">
                    {{my}}
                </div>
                <div class="right">
                    {{all}}
                </div>
            </div>
            <ul class="after">
                <li
                  v-for="after in afters"
                  :key="after.id"
                >
                  <a>
                    <div :class="after.icon"></div>
                    <span>{{after.info}}</span>
                  </a>
                </li>
            </ul>
            <div class="line"></div>
            <ul class="items">
                <li
                v-for="item in items"
                :key="item.id"
                >
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="item.icon"></use>
                    </svg>
                    <a class="same">{{item.info}}</a>
              </li>
            </ul>
        </div>
		<Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from '@/components/Tabbar';
export default {
    data(){
        return {
            userImg:"https://m.mi.com/static/img/avatar.76a75b8f17.png",
            online:"登录/注册",
            my:"我的订单",
            all:"全部订单",
            afters:[
              {id:1,info:"待付款",icon:"iconfont icon-qianbao"},
              {id:2,info:"待收货",icon:"iconfont icon-xiaohuoche"},
              {id:3,info:"退换修",icon:"iconfont icon-banshou"}
              ],
            items:[
              {id:4,info:"会员中心",icon:"#icon-icon_huangguan"},
              {id:5,info:"我的优惠",icon:"#icon-qianbao1"},
              {id:6,info:"服务中心",icon:"#icon-fuwu"},
              {id:7,info:"小米之家",icon:"#icon-icon-test"},
              {id:8,info:"我的F码",icon:"#icon-fc"},
              {id:9,info:"礼物码兑换",icon:"#icon-icon"},
              {id:10,info:"设置",icon:"#icon-chilun"}
            ]
        }
    },
    components:{
		Tabbar
	}
}
</script>

<style lang="scss">
@import '../../stylesheets/main.scss';
    .mine{
        width: 100%;
        .content{
          	width:100%;
          	height:auto;
          	margin: 0 auto;
          	padding-bottom: 52px;
          .items{
              	background: #fff;
              	li{
					position: relative;
					color: rgba(0,0,0,.54);
					display: flex;
					align-items: center;
					svg{
						width: 0.6rem;
						font-size: 0.28rem;
						padding: 0 0.1rem;
                  	}
                  a{  
						display: block;
						padding-right: .28rem;
						height: 0.55rem;
						border-bottom: 2px solid rgba(0,0,0,.15);
						flex: 1;
						line-height: 0.5rem;
						font-size: .14rem;
						font-style: normal;
						color: rgba(0,0,0,.87);
                  	}
              	}
          }
          .items>li:nth-child(2){
                border-bottom: 0.12rem solid #f5f5f5;
              	a{
                  	border:none;
              	}
          }
          .items>li:nth-child(4){
                border-bottom: 0.12rem solid #f5f5f5;
              	a{
                  	border:none;
              	}
          }
          .items>li:nth-child(6){
                border-bottom: 0.12rem solid #f5f5f5;
              	a{
                  	border:none;
              	}
		  }
		    .items>li:nth-child(7){
              	a{
                  	border:none;
              	}
        	}
          	.line{
              height: .1rem;
              background: #f5f5f5;
              overflow: hidden;
              clear: both;
         	}
          .after{
              padding: 0 .4rem;
              background-color: #fff;
              display: flex;
              justify-content: space-between;
              align-items: center;
              li{
                  display: flex;
                  align-content: space-between;
                  position: relative;
                  padding: .2rem 0;
                  .iconfont{
                      width: .24rem;
                      height: .24rem;
                      font-size: 0.24rem;
                      margin: 0 auto .08rem;
                  }
                  span{
                      font-size: 12px;
                      color: #333;
                  }
              }
          }
            .order{
                display: flex;
                background-color: #fff;
                height: .4rem;
                border-bottom: 1px solid rgba(0,0,0,.15);
                color: rgba(0,0,0,.54);
                position: relative;
                padding-right: .28rem;
                justify-content: space-between;
                align-items: center;
                .left{
                    font-size: .14rem;
                    padding: 0 0 0 .16rem;
                    color: rgba(0,0,0,.87);
                }
                .right{
                    font-size: .12rem;
                    color: rgba(0,0,0,.87);
                }
            }
            .head{
              background: url(https://m.mi.com/static/img/bg.63c8e19851.png) center 0 #f37d0f;
              background-size: auto 100%;
              padding: .17rem 0;
              .user{
                  display: flex;
                  align-items: center;
                  .user-img{
                      margin: 0 .16rem 0 .16rem;
                      width: .48rem;
                      height: .48rem;
                      overflow: hidden;
                      box-sizing: border-box;
                      border-radius: 100%;
                      border:3px solid #eee;
                      text-align: center;
                        img{
                            width: auto;
                            height: 100%;
                            margin: 0 auto;
                        }
                  }
                  .online{
                        color: #fff;
                        font-size: .12rem;
                        text-align: left;
                  }
              }
            }
        }
    }
    .same{
        @include rightrow;
    }
</style>