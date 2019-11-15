<template>
	<div class="computer">
		<div v-for="(computer, index1) in comp" :key="index1" :class="['computer_img',index1>=8?'padding':'']">
			<router-link 
				tag="div"
				:to="{name:'details',params:{id:item.product_id}}"
				v-for="(item, index2) in computer.body.items" :key="index2" 
				:class="['Img',computer.body.items.length%2?'oneImg':'twoImg',index1>=8 && index2?'margin':'',index1>=8 && item.product_name?'border':'']">
				<img :src="item.img_url" alt="">
				<dl class="computer_list" v-if="index1>=8 && item.product_name">
					<dd class="computer_name">{{item.product_name}}</dd>
					<dd>{{item.product_brief}}</dd>
					<dd class="computer_price"><b>{{item.product_org_price}}起</b><i>{{item.product_price}}</i></dd>
					<dd class="computer_buy" v-if="item.btn_txt"><button>{{item.btn_txt}}</button></dd>
				</dl>
			</router-link>
		</div>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
import Tabbar from '@/components/Tabbar';

export default {
	components:{
		Tabbar
	},
   created() {
        this.$http.get("/api/xiaomi/index/computer").then(res=>{
            this.comp = res.data.data.object_list[0].data.data.sections
        })
	},
	data(){
		return {
			comp:[]
		}
	}
}
</script>

<style lang="scss">
	.computer{
		margin:0.75rem 0 0.5rem;
	}
	.computer_img{
		display: flex;
		width:3.75rem;
		background: rgb(111, 159, 221);
		.Img{
			overflow: hidden;
			img{
				width: 100%;
			}
		}
	}
	.twoImg{
		width:50%;
	}
	.oneImg{
		width:100%;
		margin-top:0.04rem;
	}
	.border{
		margin-top:0.1rem;
		border-radius: 5px;
	}
	.margin{
		margin-left:0.1rem;
	}
	.padding{
		padding:0 0.1rem;
	}
	.computer_list{
		width:100%;
		text-align: center;
		font-size:12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 20px;
		background: white;
		.computer_name{
			font-weight: 600;
            font-size:16px;
		}
		.computer_price{
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
		.computer_buy{
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
</style>