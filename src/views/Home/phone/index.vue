<template>
    <div class="phone">
        <div class="fa fa-spinner fa-pulse lodiing" v-if="!PLT">
        </div>
        <router-link :to="{name:'details'}" v-else>
            <div class="phone_img1">
                <img :src="PLT[0].body.items[0].img_url" alt="">
            </div>
            <div class="phone_img2">
                <img :src="PLT[2].body.items[0].img_url" alt="">
            </div>
            <div class="swiper-container phone_banner">
                <div class="swiper-wrapper">
                    <dl class="phone_list_1 swiper-slide" v-for="(item, index) in PLT[4].body.items" :key="index">
                        <dt><img :src="item.img_url" alt=""></dt>
                        <dd class="phone_name">{{item.product_name}}</dd>
                        <dd>{{item.product_brief}}</dd>
                        <dd class="phone_price"><b>{{item.product_org_price}}起</b><i>{{item.product_price}}</i></dd>
                        <dd class="phone_buy"><button>{{item.btn_txt}}</button></dd>
                    </dl>
                </div>
            </div>
            <div class="biggest_box">
                <div class="phone_img2">
                    <img :src="PLT[6].body.items[0].img_url" alt="">
                </div> 
                <div class="phone_img1 phone_img3">
                    <div class="xiaomiCC9Img">
                        <img :src="PLT[8].body.items[0].img_url" alt="">
                    </div>
                    <div class="xiaomiCC9">
                        <div class="xiaomiCC9_left">
                            <p>{{PLT[8].body.items[0].product_name}}</p>
                            <b>{{PLT[8].body.items[0].product_brief}}</b>
                        </div>
                        <div class="xiaomiCC9_right">
                            <p>{{PLT[8].body.items[0].product_price}} 起</p>
                            <button>{{PLT[8].body.items[0].btn_txt}}</button>
                        </div>
                    </div>
                </div>
                <div class="forPhone">
                    <dl class="phone_list_1 float_list" v-for="(item, index) in PLT[10].body.items" :key="index">
                        <dt><img :src="item.img_url" alt=""></dt>
                        <dd class="phone_name xiamiande">{{item.product_name}}</dd>
                        <dd>{{item.product_brief}}</dd>
                        <dd class="phone_price"><b>{{item.product_org_price}}起</b><i>{{item.product_price}}</i></dd>
                        <dd class="phone_buy"><button>{{item.btn_txt}}</button></dd>
                    </dl>
                </div>
                <div class="forPhone">
                    <dl class="phone_list_1 float_list" v-for="(item, index) in PLT[12].body.items" :key="index">
                        <dt><img :src="item.img_url" alt=""></dt>
                        <dd class="phone_name xiamiande">{{item.product_name}}</dd>
                        <dd>{{item.product_brief}}</dd>
                        <dd class="phone_price"><b>{{item.product_org_price}}起</b><i>{{item.product_price}}</i></dd>
                        <dd class="phone_buy"><button>{{item.btn_txt}}</button></dd>
                    </dl>
                </div>
            </div>
            <div class="biggest_box">
                <div class="phone_img2">
                    <img :src="PLT[14].body.items[0].img_url" alt="">
                </div> 
                <div class="phone_img1 phone_img3">
                    <div class="xiaomiCC9Img">
                        <img :src="PLT[16].body.items[0].img_url" alt="">
                    </div>
                    <div class="xiaomiCC9">
                        <div class="xiaomiCC9_left">
                            <p>{{PLT[16].body.items[0].product_name}}</p>
                            <b>{{PLT[16].body.items[0].product_brief}}</b>
                        </div>
                        <div class="xiaomiCC9_right">
                            <p>{{PLT[16].body.items[0].product_price}} 起</p>
                            <button>{{PLT[16].body.items[0].btn_txt}}</button>
                        </div>
                    </div>
                </div>
                <div class="forPhone">
                    <dl class="phone_list_1 float_list" v-for="(item, index) in PLT[18].body.items" :key="index">
                        <dt><img :src="item.img_url" alt=""></dt>
                        <dd class="phone_name xiamiande">{{item.product_name}}</dd>
                        <dd>{{item.product_brief}}</dd>
                        <dd class="phone_price"><b>{{item.product_org_price}}起</b><i>{{item.product_price}}</i></dd>
                        <dd class="phone_buy"><button>{{item.btn_txt}}</button></dd>
                    </dl>
                </div>
                <div class="forPhone">
                    <dl class="phone_list_1 float_list" v-for="(item, index) in PLT[20].body.items" :key="index">
                        <dt><img :src="item.img_url" alt=""></dt>
                        <dd class="phone_name xiamiande">{{item.product_name}}</dd>
                        <dd>{{item.product_brief}}</dd>
                        <dd class="phone_price"><b>{{item.product_org_price}}起</b><i>{{item.product_price}}</i></dd>
                        <dd class="phone_buy"><button>{{item.btn_txt}}</button></dd>
                    </dl>
                </div>
                <div class="forPhone">
                    <dl class="phone_list_1 float_list" v-for="(item, index) in PLT[22].body.items" :key="index">
                        <dt><img :src="item.img_url" alt=""></dt>
                        <dd class="phone_name xiamiande">{{item.product_name}}</dd>
                        <dd>{{item.product_brief}}</dd>
                        <dd class="phone_price"><b>{{item.product_org_price}}起</b><i>{{item.product_price}}</i></dd>
                        <dd class="phone_buy"><button>{{item.btn_txt}}</button></dd>
                    </dl>
                </div>
                <div class="forPhone">
                    <dl class="phone_list_1 float_list" v-for="(item, index) in PLT[24].body.items" :key="index">
                        <dt><img :src="item.img_url" alt=""></dt>
                        <dd class="phone_name xiamiande">{{item.product_name}}</dd>
                        <dd>{{item.product_brief}}</dd>
                        <dd class="phone_price"><b>{{item.product_org_price}}起</b><i>{{item.product_price}}</i></dd>
                        <dd class="phone_buy"><button>{{item.btn_txt}}</button></dd>
                    </dl>
                </div>
            </div>
            <div class="biggest_box">
                <div class="phone_img2">
                    <img :src="PLT[26].body.items[0].img_url" alt="">
                </div> 
                <div class="phone_img1 phone_img3">
                    <div class="xiaomiCC9Img">
                        <img :src="PLT[28].body.items[0].img_url" alt="">
                    </div>
                    <div class="xiaomiCC9">
                        <div class="xiaomiCC9_left">
                            <p>{{PLT[28].body.items[0].product_name}}</p>
                            <b>{{PLT[28].body.items[0].product_brief}}</b>
                        </div>
                        <div class="xiaomiCC9_right">
                            <p>{{PLT[28].body.items[0].product_price}} 起</p>
                            <button>{{PLT[28].body.items[0].btn_txt}}</button>
                        </div>
                    </div>
                </div>
                <div class="forPhone">
                    <dl class="phone_list_1 float_list" v-for="(item, index) in PLT[30].body.items" :key="index">
                        <dt><img :src="item.img_url" alt=""></dt>
                        <dd class="phone_name xiamiande">{{item.product_name}}</dd>
                        <dd>{{item.product_brief}}</dd>
                        <dd class="phone_price"><b>{{item.product_org_price}}起</b><i>{{item.product_price}}</i></dd>
                        <dd class="phone_buy"><button>{{item.btn_txt}}</button></dd>
                    </dl>
                </div>
                <div class="forPhone">
                    <dl class="phone_list_1 float_list" v-for="(item, index) in PLT[32].body.items" :key="index">
                        <dt><img :src="item.img_url" alt=""></dt>
                        <dd class="phone_name xiamiande">{{item.product_name}}</dd>
                        <dd>{{item.product_brief}}</dd>
                        <dd class="phone_price"><b>{{item.product_org_price}}起</b><i>{{item.product_price}}</i></dd>
                        <dd class="phone_buy"><button>{{item.btn_txt}}</button></dd>
                    </dl>
                </div>
            </div>
            <div class="biggest_box">
                <div class="phone_img2">
                    <img :src="PLT[34].body.items[0].img_url" alt="">
                </div> 
                <div class="phone_img1 phone_img3">
                    <div class="xiaomiCC9Img">
                        <img :src="PLT[36].body.items[0].img_url" alt="">
                    </div>
                    <div class="xiaomiCC9">
                        <div class="xiaomiCC9_left">
                            <p>{{PLT[36].body.items[0].product_name}}</p>
                            <b>{{PLT[36].body.items[0].product_brief}}</b>
                        </div>
                        <div class="xiaomiCC9_right">
                            <p>{{PLT[36].body.items[0].product_price}} 起</p>
                            <button>{{PLT[36].body.items[0].btn_txt}}</button>
                        </div>
                    </div>
                </div>
                <div class="forPhone">
                    <dl class="phone_list_1 float_list" v-for="(item, index) in PLT[38].body.items" :key="index">
                        <dt><img :src="item.img_url" alt=""></dt>
                        <dd class="phone_name xiamiande">{{item.product_name}}</dd>
                        <dd>{{item.product_brief}}</dd>
                        <dd class="phone_price"><b>{{item.product_org_price}}起</b><i>{{item.product_price}}</i></dd>
                        <dd class="phone_buy"><button>{{item.btn_txt}}</button></dd>
                    </dl>
                </div>
                <div class="forPhone">
                    <dl class="phone_list_1 float_list" v-for="(item, index) in PLT[40].body.items" :key="index">
                        <dt><img :src="item.img_url" alt=""></dt>
                        <dd class="phone_name xiamiande">{{item.product_name}}</dd>
                        <dd>{{item.product_brief}}</dd>
                        <dd class="phone_price"><b>{{item.product_org_price}}起</b><i>{{item.product_price}}</i></dd>
                        <dd class="phone_buy"><button>{{item.btn_txt}}</button></dd>
                    </dl>
                </div>
                 <div class="forPhone">
                    <dl class="phone_list_1 float_list" v-for="(item, index) in PLT[42].body.items" :key="index">
                        <dt><img :src="item.img_url" alt=""></dt>
                        <dd class="phone_name xiamiande">{{item.product_name}}</dd>
                        <dd>{{item.product_brief}}</dd>
                        <dd class="phone_price"><b>{{item.product_org_price}}起</b><i>{{item.product_price}}</i></dd>
                        <dd class="phone_buy"><button>{{item.btn_txt}}</button></dd>
                    </dl>
                </div>
            </div>
            <div class="phone_bottom">
                <div class="phone_bottom_1">
                    <img :src="PLT[44].body.items[0].img_url" alt="">
                </div>
                <div class="phone_bottom_2">
                    <img :src="PLT[45].body.items[0].img_url" alt="">
                    <img :src="PLT[45].body.items[1].img_url" alt="">
                </div>
                <div class="phone_bottom_3">
                    <img :src="PLT[46].body.items[0].img_url" alt="">
                    <img :src="PLT[46].body.items[1].img_url" alt="">
                </div>
            </div>
        </router-link>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from '@/components/Tabbar';

import Swiper from "swiper"
export default {
    components:{
        Tabbar
    },
    created() {
        this.$http.get("/api/xiaomi/index/phone").then(res=>{
            this.PLT = res.data.data.object_list[0].data.data.sections
            this.$nextTick(()=>{
                new Swiper(".phone_banner",{
                    slidesPerView: 3,
                    spaceBetween: 10,
                    loop:true,
                })
            })
        })
    },
    data(){
        return {
            PLT:[],
        }
    }
}
</script>

<style lang="scss">
    .phone{
        margin:85px 0 50px;
        background:#250168;
        .lodiing{
            font-size:40px;
        }
    }
    .phone_img1{
        width:3.75rem;
        height:auto;
        img{
            border:none;
            width:100%;
        }
    }
    .phone_img2{
        margin-top:0.05rem;
        width:3.75rem;
        height:auto;
        img{
            border:none;
            width:100%;
        }
    } 
    .forPhone{
        background: #250168;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        padding:0 0.1rem;
    }
    .phone_img3{
        padding:0.1rem 0.1rem 0;
    }
    .biggest_box{
        display: flex;
        flex-flow: column;
    }   
    .phone_list_1{
        width:1.6rem !important;
        height:2.6rem;
        background: white;
        margin-top:0.1rem;
        dt{
            width:100%;
            border-radius:5px;
            overflow: hidden;

            img{
                width:100%;
                overflow: hidden;
            }
        }
        dd{
            width:100%;
            text-align: center;
            font-size:12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 20px;
        }
        .phone_name{
            font-weight: 600;
            font-size:16px;
        }
        .phone_price{
            line-height: 24px;
            b{
                font-weight: 600;
                font-size:16px;  
                color:#f54b4b;
            }
            i{
                font-weight: 100;
                font-size:12px; 
                text-decoration: line-through;
            }
        }
        .phone_buy{
            font-weight: 600;
            font-size:16px;
            margin:0.1rem 0;
            button{
                background: #f54b4b;
                border:none;
                color:white;
                padding:0.05rem 0.1rem; 
                border-radius: 3px;
            }
        }
       
    }
     .float_list{
        width:1.72rem !important;
        height:2.8rem;
        background: white;
        border-radius: 5px;
    }  
    .xiaomiCC9{
        display: flex;
        padding:0.14rem;
        justify-content: space-between;
        background-color: white;
        border-radius: 0 0 5px 5px;
        .xiaomiCC9_left{
            p{
                font-weight: 600;
                font-size:16px;  
            }
            b{
              font-size:12px;   
            }
        }
        .xiaomiCC9_right{
            p{
                text-align: center;
                font-weight: 600;
                font-size:16px; 
                color:#f54b4b; 
            }
            button{
                background: #f54b4b;
                border:none;
                color:white;
                padding:0.05rem 0.2rem; 
                border-radius: 3px; 
            }
        }
    }
    .xiaomiCC9Img{
        border-radius: 5px 5px 0 0;
        overflow: hidden;
    }

    .phone_bottom{
        width:3.75rem;
        height:auto;
        .phone_bottom_1{
            margin-top:0.1rem;
            width:100%;
            img{
                width:100%;
            }
        }
         .phone_bottom_2{
            margin-top:0.1rem;
            width:100%;
            display: flex;
            justify-content: space-between;
            img{
               width:50%; 
            }
        }
        .phone_bottom_3{
            margin-top:0.1rem;
            width:100%;
            display: flex;
            justify-content: space-between;
            img{
               width:50%; 
            }
        }
    }
</style>