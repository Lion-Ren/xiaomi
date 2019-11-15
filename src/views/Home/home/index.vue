<template>
	<div class="home" style="margin-top:0.82rem;">
		<div class="home-banner swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"
					v-for="banner in banners.items"
					:key="banner.action.path"
				>
					<img v-lazy="banner.img_url_webp" alt="">
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<div class="cells_auto_fill">
			<router-link 	 
				v-for="(list,index) in list1.items"
				:key="list.action.path"
				:to="index==0?{name:'sec'}:''"
        		class="sec"
			>
				<img v-lazy="list.img_url_webp" alt="">
			</router-link>
		</div>
		<div class="cells_auto_fill">
			<router-link 	 
				v-for="(list,index) in list2.items"
				:href="list.action.path"
				:key="list.action.path"
				:to="index==1?{name:'computer'}:''"
			>
				<img v-lazy="list.img_url_webp" alt="">
			</router-link> 
		</div>
		<div class="divider_line"></div>
		<div class="cells_auto_fill cell1">
			<a 	 
				v-for="list in list3.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url_webp" alt="">
			</a>
		</div>
		<div class="divider_line"></div>
		<div class="cells_auto_fill cell2">
			<a 	 
				v-for="list in list4.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url_webp" alt="">
			</a>
		</div>
		<div class="divider_line"></div>
		<div class="cells_auto_fill cell3">
			<a 	 
				v-for="list in list5.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url_webp" alt="">
			</a>
		</div>
		<div class="divider_line index1"></div>
		<div class="list_two_type13 box-flex">
			<a  class="exposure item"
				v-for="list in list6.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<div class="img">
					<img class="big" v-lazy="list.img_url_webp">
				</div>
				<div class="info bgw align-center">
					<div class="name">{{list.product_name}}</div>
					<div class="brief">{{list.product_brief}}</div>
					<div class="price">￥{{list.product_price}}<span>起</span><span class="price old" v-if="list.product_price==list.product_org_price?false:true"><s>￥{{list.product_org_price}}</s></span></div>
					<div class="buybtn mauto"> 立即购买</div>
				</div>
			</a>
		</div>
		<div class="divider_line index1"></div>
		<div class="list_action_title box-flex">
			<a href="" class="h">
				<div class="ti">更多小米手机产品 &gt;</div>
			</a>
		</div>
		<div class="divider_line"></div>
		<div class="cells_auto_fill cell2">
			<a 	 
				v-for="list in list7.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url_webp" alt="">
			</a>
		</div>
		<div class="divider_line"></div>
		<div class="cells_auto_fill cell3">
			<a 	 
				v-for="list in list8.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url_webp" alt="">
			</a>
		</div>
		<div class="divider_line index1"></div>
		<div class="list_two_type13 box-flex">~
			<a  class="exposure item"
				v-for="list in list9.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<div class="img">
					<img class="big" v-lazy="list.img_url_webp">
				</div>
				<div class="info bgw align-center">
					<div class="name">{{list.product_name}}</div>
					<div class="brief">{{list.product_brief}}</div>
					<div class="price">￥{{list.product_price}}<span>起</span><span class="price old" v-if="list.product_price==list.product_org_price?false:true"><s>￥{{list.product_org_price}}</s></span></div>
					<div class="buybtn mauto"> 立即购买</div>
				</div>
			</a>
		</div>
		<div class="divider_line index1"></div>
		<div class="list_two_type13 box-flex">
			<a  class="exposure item"
				v-for="list in list10.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<div class="img">
					<img class="big" v-lazy="list.img_url_webp">
				</div>
				<div class="info bgw align-center">
					<div class="name">{{list.product_name}}</div>
					<div class="brief">{{list.product_brief}}</div>
					<div class="price">￥{{list.product_price}}<span>起</span><span class="price old" v-if="list.product_price==list.product_org_price?false:true"><s>￥{{list.product_org_price}}</s></span></div>
					<div class="buybtn mauto"> 立即购买</div>
				</div>
			</a>
		</div>
		<div class="divider_line index1"></div>
		<div class="list_two_type13 box-flex">
			<a  class="exposure item"
				v-for="list in list11.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<div class="img">
					<img class="big" v-lazy="list.img_url_webp">
				</div>
				<div class="info bgw align-center">
					<div class="name">{{list.product_name}}</div>
					<div class="brief">{{list.product_brief}}</div>
					<div class="price">￥{{list.product_price}}<span>起</span><span class="price old" v-if="list.product_price==list.product_org_price?false:true"><s>￥{{list.product_org_price}}</s></span></div>
					<div class="buybtn mauto"> 立即购买</div>
				</div>
			</a>
		</div>
		<div class="divider_line index1"></div>
		<div class="list_action_title box-flex">
			<a href="" class="h">
				<div class="ti">更多小米电视产品 &gt;</div>
			</a>
		</div>
		<div class="divider_line"></div>
		<div class="cells_auto_fill cell2">
			<a 	 
				v-for="list in list12.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url_webp" alt="">
			</a>
		</div>
		<div class="divider_line"></div>
		<div class="cells_auto_fill cell3">
			<a 	 
				v-for="list in list13.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url_webp" alt="">
			</a>
		</div>
		<div class="divider_line index1"></div>
		<div class="list_two_type13 box-flex">
			<a  class="exposure item"
				v-for="list in list14.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<div class="img">
					<img class="big" v-lazy="list.img_url_webp">
				</div>
				<div class="info bgw align-center">
					<div class="name">{{list.product_name}}</div>
					<div class="brief">{{list.product_brief}}</div>
					<div class="price">￥{{list.product_price}}<span>起</span><span class="price old" v-if="list.product_price==list.product_org_price?false:true"><s>￥{{list.product_org_price}}</s></span></div>
					<div class="buybtn mauto"> 立即购买</div>
				</div>
			</a>
		</div>
		<div class="divider_line index1"></div>
		<div class="list_two_type13 box-flex">
			<a  class="exposure item"
				v-for="list in list15.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<div class="img">
					<img class="big" v-lazy="list.img_url_webp">
				</div>
				<div class="info bgw align-center">
					<div class="name">{{list.product_name}}</div>
					<div class="brief">{{list.product_brief}}</div>
					<div class="price">￥{{list.product_price}}<span>起</span><span class="price old" v-if="list.product_price==list.product_org_price?false:true"><s>￥{{list.product_org_price}}</s></span></div>
					<div class="buybtn mauto"> 立即购买</div>
				</div>
			</a>
		</div>
		<div class="divider_line index1"></div>
		<div class="list_two_type13 box-flex">
			<a  class="exposure item"
				v-for="list in list16.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<div class="img">
					<img class="big" v-lazy="list.img_url_webp">
				</div>
				<div class="info bgw align-center">
					<div class="name">{{list.product_name}}</div>
					<div class="brief">{{list.product_brief}}</div>
					<div class="price">￥{{list.product_price}}<span>起</span><span class="price old" v-if="list.product_price==list.product_org_price?false:true"><s>￥{{list.product_org_price}}</s></span></div>
					<div class="buybtn mauto"> 立即购买</div>
				</div>
			</a>
		</div>
		<div class="divider_line index1"></div>
		<div class="list_action_title box-flex">
			<a href="" class="h">
				<div class="ti">更多小米笔记本产品 &gt;</div>
			</a>
		</div>
		<div class="divider_line"></div>
		<div class="cells_auto_fill cell2">
			<a 	 
				v-for="list in list17.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url_webp" alt="">
			</a>
		</div>
		<div class="divider_line"></div>
		<div class="cells_auto_fill cell3">
			<a 	 
				v-for="list in list18.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url_webp" alt="">
			</a>
		</div>
		<div class="divider_line index1"></div>
		<div class="list_two_type1 box-flex">
			<a 
				class="exposure item"
				v-for="list in list19.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<div class="img">
					<img v-lazy="list.img_url_webp" alt="" class="big">
				</div>
				<div class="info">
					<div class="name">{{list.product_name}}</div>
					<div class="brief">{{list.product_brief}}</div>
					<div class="price">￥{{list.product_price}}<span class="price old" v-if="list.product_price==list.product_org_price?false:true">￥<s>{{list.product_org_price}}</s></span></div>
				</div>
			</a>
		</div>
		<div class="list_two_type1 box-flex">
			<a 
				class="exposure item"
				v-for="list in list20.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<div class="img">
					<img v-lazy="list.img_url_webp" alt="" class="big">
				</div>
				<div class="info">
					<div class="name">{{list.product_name}}</div>
					<div class="brief">{{list.product_brief}}</div>
					<div class="price">￥{{list.product_price}}<span class="price old" v-if="list.product_price==list.product_org_price?false:true">￥<s>{{list.product_org_price}}</s></span></div>
				</div>
			</a>
		</div>
		<div class="list_two_type1 box-flex">
			<a 
				class="exposure item"
				v-for="list in list21.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<div class="img">
					<img v-lazy="list.img_url_webp" alt="" class="big">
				</div>
				<div class="info">
					<div class="name">{{list.product_name}}</div>
					<div class="brief">{{list.product_brief}}</div>
					<div class="price">￥{{list.product_price}}<span class="price old" v-if="list.product_price==list.product_org_price?false:true">￥<s>{{list.product_org_price}}</s></span></div>
				</div>
			</a>
		</div>
		<div class="divider_line index1" style="border-bottom: 0.01rem solid rgb(206, 206, 206);"></div>
		<div class="list_action_title box-flex">
			<a href="" class="h">
				<div class="ti">更多米家家电产品 &gt;</div>
			</a>
		</div>
		<div class="divider_line"></div>
		<div class="cells_auto_fill cell2">
			<a 	 
				v-for="list in list22.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url_webp" alt="">
			</a>
		</div>
		<div class="divider_line"></div>
		<div class="cells_auto_fill cell3">
			<a 	 
				v-for="list in list23.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url_webp" alt="">
			</a>
		</div>
		<div class="list_two_type2">
			<a 
				class="exposure item box-flex"
				v-for="list in list24.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<div class="img">
					<img v-lazy="list.img_url" alt="" class="big">
				</div>
				<div class="info">
					<div class="name">{{list.product_name}}</div>
					<div class="briefwrap">{{list.product_brief}}</div>
					<div class="price">￥{{list.product_price}}<span class="price old" v-if="list.product_price==list.product_org_price?false:true">￥<s>{{list.product_org_price}}</s></span></div>
				</div>
			</a>
		</div>
		<div class="list_two_type2">
			<a 
				class="exposure item box-flex"
				v-for="list in list25.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<div class="info">
					<div class="name">{{list.product_name}}</div>
					<div class="briefwrap">{{list.product_brief}}</div>
					<div class="price">￥{{list.product_price}}<span class="price old" v-if="list.product_price==list.product_org_price?false:true">￥<s>{{list.product_org_price}}</s></span></div>
				</div>
				<div class="img">
					<img v-lazy="list.img_url" alt="" class="big">
				</div>
			</a>
		</div>
		<div class="list_two_type2">
			<a 
				class="exposure item box-flex"
				v-for="list in list26.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<div class="img">
					<img v-lazy="list.img_url" alt="" class="big">
				</div>
				<div class="info">
					<div class="name">{{list.product_name}}</div>
					<div class="briefwrap">{{list.product_brief}}</div>
					<div class="price">￥{{list.product_price}}<span class="price old" v-if="list.product_price==list.product_org_price?false:true">￥<s>{{list.product_org_price}}</s></span></div>
				</div>
			</a>
		</div>
		<div class="list_action_title box-flex">
			<a href="" class="h">
				<div class="ti">更多米家智能产品 &gt;</div>
			</a>
		</div>
		<div class="divider_line"></div>
		<div class="multi_cell">
			<a 	class="exposure items"
				v-for="list in list27.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url" alt="">
			</a>
		</div>
		<div class="divider_line" style="height: 0.02rem;border-bottom: 0.02rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
		</div>
		<div class="multi_cell">
			<a 	class="exposure items"
				v-for="list in list28.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url" alt="">
			</a>
		</div>
		<div class="divider_line" style="height: 0.02rem;border-bottom: 0.02rem solid rgb(245, 245, 245);background-color: rgb(245, 245, 245);">
		</div>
		<div class="multi_cell">
			<a 	class="exposure items"
				v-for="list in list29.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url" alt="">
			</a>
		</div>
		<div class="divider_line">
		</div>
		<div class="cells_auto_fill cell2">
			<a 	 
				v-for="list in list30.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url_webp" alt="">
			</a>
		</div>
		<div class="cells_auto_fill cell2" style="height:0.5524rem;">
			<a 	 
				v-for="list in list31.items"
				:href="list.action.path"
				:key="list.action.path"
			>
				<img v-lazy="list.img_url_webp" alt="" style="height:0.5524rem;">
			</a>
		</div>
		<div data-v-0677858e="" class="fixed-br" style="" v-if="isFixed"><a><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a5bd951d960c0ad6ea2c54770edfb2ff.gif"></a><a id="top" style="visibility: visible;" @click="fn"><img src="https://m.mi.com/static/img/top.451d650ecd.png"></a><div class="safe-area-inset" style="background: transparent;"></div></div>
    	<Tabbar></Tabbar>
	</div>
</template>

<script>
import Swiper from "swiper"
import Tabbar from '@/components/Tabbar';
import homeTitle from '@/components/homeTitle'

export default {
	components:{
    	Tabbar,homeTitle
  	},
  	data(){
        return{
            banners:[],
			list1:[],
			list2:[],
			list3:[],
			list4:[],
			list5:[],
			list6:[],
			list7:[],
			list8:[],
			list9:[],
			list10:[],
			list11:[],
			list12:[],
			list13:[],
			list14:[],
			list15:[],
			list16:[],
			list17:[],
			list18:[],
			list19:[],
			list20:[],
			list21:[],
			list22:[],
			list23:[],
			list24:[],
			list25:[],
			list26:[],
			list27:[],
			list28:[],
			list29:[],
			list30:[],
			list31:[],
			isFixed:false
        }
    },
    methods:{
        //解决403缓存图片问题
        getImages(_url){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
		},
		fn(){
			window.scrollTo(0,0);
		},
		listenScroll(){
            let sTop=document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop >= 300){
                this.isFixed = true;
            }else if(sTop  <= 300){
                this.isFixed = false;
            }
        }
    },
    created(){
        this.$http.get("/api/xiaomi/index").then(res=>{
            // console.log(res.data.data.object_list[0].data.data.sections[52].body)
            this.banners = res.data.data.object_list[0].data.data.sections[0].body;
			this.list1 = res.data.data.object_list[0].data.data.sections[1].body;
			this.list2 = res.data.data.object_list[0].data.data.sections[2].body;
			this.list3 = res.data.data.object_list[0].data.data.sections[4].body;
			this.list4 = res.data.data.object_list[0].data.data.sections[6].body;
			this.list5 = res.data.data.object_list[0].data.data.sections[8].body;
			this.list6 = res.data.data.object_list[0].data.data.sections[10].body;
			this.list7 = res.data.data.object_list[0].data.data.sections[14].body;
			this.list8 = res.data.data.object_list[0].data.data.sections[16].body;
			this.list9 = res.data.data.object_list[0].data.data.sections[18].body;
			this.list10 = res.data.data.object_list[0].data.data.sections[20].body;
			this.list11 = res.data.data.object_list[0].data.data.sections[22].body;
			this.list12 = res.data.data.object_list[0].data.data.sections[26].body;
			this.list13 = res.data.data.object_list[0].data.data.sections[28].body;
			this.list14 = res.data.data.object_list[0].data.data.sections[30].body;
			this.list15 = res.data.data.object_list[0].data.data.sections[32].body;
			this.list16 = res.data.data.object_list[0].data.data.sections[34].body;
			this.list17 = res.data.data.object_list[0].data.data.sections[38].body;
			this.list18 = res.data.data.object_list[0].data.data.sections[40].body;
			this.list19 = res.data.data.object_list[0].data.data.sections[42].body;
			this.list20 = res.data.data.object_list[0].data.data.sections[43].body;
			this.list21 = res.data.data.object_list[0].data.data.sections[44].body;
			this.list22 = res.data.data.object_list[0].data.data.sections[48].body;
			this.list23 = res.data.data.object_list[0].data.data.sections[50].body;
			this.list24 = res.data.data.object_list[0].data.data.sections[52].body;
			this.list25 = res.data.data.object_list[0].data.data.sections[53].body;
			this.list26 = res.data.data.object_list[0].data.data.sections[54].body;
			this.list27 = res.data.data.object_list[0].data.data.sections[58].body;
			this.list28 = res.data.data.object_list[0].data.data.sections[60].body;
			this.list29 = res.data.data.object_list[0].data.data.sections[62].body;
			this.list30 = res.data.data.object_list[0].data.data.sections[64].body;
			this.list31 = res.data.data.object_list[0].data.data.sections[65].body;


            this.$nextTick(()=>{
                new Swiper(".home-banner",{
                    loop:true,
                    pagination:{
                        el:".swiper-pagination"
                    },
                    autoplay:{
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                    effect : 'fade',
                })
            })
		});
		window.addEventListener("beforeunload", this.fn);
        window.addEventListener("scroll",this.listenScroll)

		
	},
	beforeRouteLeave (to, from, next) {
        this.scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
        next()
    },
    beforeDestroy(){
        window.removeEventListener("scroll",this.listenScroll)
    }
}

</script>

<style lang='scss' scoped>
	.home{
		padding-bottom:0.5rem;
		width:100%;
		.home-banner{
			width:100%;
			height:1.875rem;
			img{
				height:1.875rem;
				width:100%;
			}
			.swiper-pagination-bullet-active{
            	background:#fff;
			}
			.swiper-pagination-bullets{
				bottom:5px;
			}
		}
		.cells_auto_fill{
			width:3.752rem;
			height:0.792rem;
			overflow: hidden;
			position: relative;
			a{
				width:0.7504rem;
				height:0.792rem;
				position: absolute;
				img{
					width:0.7504rem;
					height:0.792rem;
				}
			}
			a:nth-of-type(2){
				left:0.7504rem;
			}
			a:nth-of-type(3){
				left:1.5008rem;
			}
			a:nth-of-type(4){
				left:2.2512rem;
			}
			a:nth-of-type(5){
				left:3.0016rem;
			}
		}
		.divider_line{
			height:0.0834rem;
			border-bottom: 0.0834rem solid rgb(245, 245, 245);
    		background-color: rgb(245, 245, 245);
			margin: 0 auto;
			border-top: none;
			border-left: none;
			border-right: none;
			box-sizing: border-box;
			width: 100%;
			overflow: hidden;
		}
		.index1{
			height:0.0346rem;
			background-color: rgb(255, 255, 255);
			border-bottom: 0.0346rem solid rgb(255, 255, 255);
		}
		.cell1{
			width:3.752rem;
			height:2.6471rem;
			a:nth-of-type(1){
				height:100%;
				width:1.8655rem;
				img{
					height:100%;
					width:1.8655rem;
				}
			}
			a:nth-of-type(2){
				height:1.3235rem;
				width:1.8865rem;
				left:1.8658rem;
				img{
					height:100%;
					width:100%;
				}
			}
			a:nth-of-type(3){
				height:1.3235rem;
				width:1.8865rem;
				left:1.8658rem;
				top:1.3235rem;
				img{
					height:100%;
					width:100%;
				}
			}
		}
		.cell2{
			height:1.459rem;
			width:3.752rem;
			a{
				width:100%;
				height:100%;
				img{
					width:100%;
					height:100%;
				}
			}
		}
		.cell3{
			height:2.2929rem;
			width:3.752rem;
			a{
				width:100%;
				height:100%;
				img{
					width:100%;
					height:100%;
				}
			}
		}
		.list_two_type13 {
			padding: 0 .06rem;
			width: 100%;
			overflow: hidden;
			text-align: center;
			.item{
				width:1.7823rem;
			}
			.img {
				position: relative;
				overflow: hidden;
				img{
					display: block;
					height:1.459rem;
					width:1.7925rem;
				}
			}
			.item:first-child{
				margin-right:0.06rem
			}
			.align-center{
				text-align: center!important;
			}
			.info{
				padding:.1rem .135rem;
			}
			.bgw{
				background:#fff;
			}
			.name {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				font-size: .14rem;
    			color: rgba(0,0,0,.87);
			}
			.brief {
				margin-top: .03rem;
				font-size: .11rem;
				line-height: .15rem;
				color: rgba(0,0,0,.54);
			}
			.price {
				font-size: .14rem;
				color: #ea625b;
				height: 1.5em;
				line-height: 1.5em;
				position: relative;
				display: inline-block;
				span {
					display: inline-block;
					margin-left: .02rem;
					font-size: .1rem;
				}
				.old {
					display: inline-block;
					margin: 0 .05rem;
					font-size: .11rem;
					color: rgba(0,0,0,.54);
				}
			}
			.mauto {
				margin: 0 auto;
			}
			.buybtn {
				width: 1rem;
				background: #ea625b;
				border-radius: .025rem;
				text-align: center;
				color: #fff;
				font-size: .12rem;
				padding: .08rem 0;
				font-weight: 700;
			}
		}
		.box-flex{
			display: flex;
		}
		.list_action_title{
			.h{
				background: #fff;
				height: 0.5rem;
				line-height: 0.5rem;
				font-size: .14rem;
				text-align: center;
				width:100%;
				.ti {
					color: rgba(0,0,0,.6);
				}
			}
		}
		.list_two_type1{
			.item:first-child{
				margin-right: .04rem;
			}
			.item{
				width:1.8rem;
			}
			.img{
				width:1.8rem;
				height:1.8rem;
				position: relative;
    			overflow: hidden;
				img{
					width:1.8rem;
					height:1.8rem;
					display: block;
				}
			}
			.info {
				padding: .1rem .135rem;
				text-align: left;
				.name {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: .14rem;
    				color: rgba(0,0,0,.87);
				}
				.brief {
					margin-top: .03rem;
					font-size: .11rem;
					line-height: .15rem;
					color: rgba(0,0,0,.54);
				}
				.price {
					font-size: .14rem;
					color: #ea625b;
					height: 0.75em;
					line-height: 0.75em;
					position: relative;
					display: inline-block;
					padding-left: .25em;
					.old {
						display: inline-block;
						margin: 0 .05rem;
						font-size: .11rem;
						color: rgba(0,0,0,.54);
					}
				}
			}
		}
		.list_two_type2{
			.item{
				width:100%;
			}
			.img{
				width:1.8rem;
				height:1.8rem;
				position: relative;
    			overflow: hidden;
				img{
					width:1.8rem;
					height:1.8rem;
					display: block;
				}
			}
			.info {
				padding: .32rem .06rem 0 .16rem;
				box-sizing: border-box;
				width: 1.8rem;
				height: 1.8rem;
				text-align: left;
				.name {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: .14rem;
    				color: rgba(0,0,0,.87);
				}
				.briefwrap{
					margin-top: .03rem;
					font-size: .11rem;
					line-height: .175rem;
					color: rgba(0,0,0,.54);
				}
				.price {
					font-size: .14rem;
					color: #ea625b;
					height: 0.75em;
					line-height: 0.75em;
					position: relative;
					display: inline-block;
					padding-left: .25em;
					margin-top: .1rem;
					.old{
						display: inline-block;
						margin: 0 .05rem;
						font-size: .11rem;
						color: rgba(0,0,0,.54);
					}
				}
			}
		}
		.multi_cell {
			width:100%;
			height:2.4rem;
			position: relative;
			display: flex;
			justify-content: space-between;
			.items {
				width:1.8655rem;
				height:auto;
				img{
					display: block;
					width:100%;
					height:2.4rem;
				}
			}
		}
		.fixed-br {
			position: fixed;
			z-index: 20;
			bottom: 0.7rem;
			right: .13rem;
			a {
				display: block;
				width: 0.56rem;
				height: 0.56rem;
				overflow: hidden;
				margin: .05rem auto 0;
				img{
					width:100%;
				}
			}
			#top {
				width: .35rem;
				height: .35rem;
			}
		}
	}
</style>