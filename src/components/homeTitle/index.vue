<template>
    <div class="home_Title">
		<div class="Title">
			<div class="Title_left">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC" alt="">
			</div>
			<router-link :to="{name:'search'}" class="Title_content">
				<input type="text" placeholder="搜索">
			</router-link>
			<div class="Title_right iconfont">
				&#xe602;
			</div>
		</div>
		<router-link class="TitleList swiper-container" to="" tag="div" >
			<router-link 
			v-for="TitleList in TitleLists" 
			:key="TitleList.page_id" 
			:to="{name:TitleList.name}"
			tag="ul"
			class="swiper-wrapper"
			active-class="active"
			>
				<li class="swiper-slide" width="auto">
				{{TitleList.name}}
				</li>
			</router-link>
		</router-link>
    </div>
</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
			TitleLists:[],
			name:this.$route.name
        }
    },
    created() {
        this.$http.get("/api/xiaomi/index/phone").then(res=>{
			/* console.log(res.data.data.object_list[0].data) */
			this.TitleLists = res.data.data.object_list[0].data.tabs
			this.$nextTick(()=>{
				new Swiper('.TitleList', {
					slidesPerView: 6,
					spaceBetween: 0,
					freeMode: true,
					});
			})
        })
    },
}
</script>

<style lang="scss">
	.home_Title{
		position: fixed;
		top:0;
		left:0;
		right:0;
		z-index: 10;
	}
    .Title{
        display: flex;
        padding:0.06rem 0.06rem;
        justify-content:space-between;
        align-items: center;
        background:#f2f2f2;
        .Title_content{
            width:100%;
           input{
                width:100%;
                border:none;
                padding:0.08rem 0.03rem;
           }
        }
        .Title_left{
            padding:0 0.06rem;
            img{
                height:0.16rem;
                width:0.24rem;
                margin-right:0.06rem;
            }
        }
        .Title_right{
            margin-left:0.15rem;
            margin-right:0.1rem;
            font-size:20px;
        }
	}
	.TitleList{
		padding:0.08rem 0.1rem 0.02rem;
		background:#f2f2f2;
		white-space: nowrap;
		overflow-x:auto;
		.swiper-wrapper{
			display: inline-block;
			width:auto;
			padding:0.04rem 0.12rem;	
			text-align: center;
			.swiper-slide{
				width:auto !important;
			}
		}
	}
	.active{
		border-bottom:2px solid #ed5b00;
		color:#ed5b00;
	}
</style>