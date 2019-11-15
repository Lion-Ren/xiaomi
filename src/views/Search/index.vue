<template>
		<div class="search">
			<div class="searchwarp">
				<div class="head">
					<div class="headbox">
						<a 
							class="goback"
							@click="goback"
						>
							<i></i>
						</a>
						<div class="input">
							<input type="text" placeholder="搜索商品名称">
						</div>
						<a class="big">
							<i></i>
						</a>
					</div>
				</div>
				<div class="page">
					<div class="title">
						热门搜索
					</div>
					<div class="sh-img">
						<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea75a5220c77cb62eb0f1e7e7db2335a.jpg?w=1080&h=300&bg=0" alt="">
					</div>
				</div>
				<div class="search-key">
					<a
						v-for="(key,index) in keys"
						:key="index"
						:style="{'color':key.font_n,'background':key.back_n,'borderColor':key.border_n}"
					>
						{{key.word}}
					</a>
				</div>
				<div class="search-hot">
					<div class="hot">常用分类</div>
					<div class="group">
						<a
							v-for="(item,index) in items"
							:key="index"
						>
							{{item.name}}
						</a>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
	data() {
		return {
			keys:[],
			items:[]
		}
    },
    methods: {
        goback(){
            this.$router.go(-1)
        }
    },
	created() {
		this.$http.get("./api/cartkeys.json").then(res=>{
			this.keys = res.data
		})
		this.$http.get("./api/cartitem.json").then(res=>{
			this.items = res.data
		})
	},
}
</script>

<style lang="scss">
    .searchwarp{
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: #fff;
        .search-hot{
            .hot{
                line-height: .4rem;
                padding: 0 .15rem;
                font-size: .12rem;
                text-align: left;
            }
            .group{
                text-align: left;
                max-height: 1.6rem;
                overflow: hidden;
                padding-left: .16rem;
                a{
                    display: inline-block;
                    background: #f5f5f5;
                    height: .28rem;
                    line-height: .28rem;
                    padding: 0 .076rem;
                    margin-right: .076rem;
                    margin-bottom: .05rem;
                    color: rgba(0,0,0,.54);
                }
            }
        }
        .search-key{
            margin: .055rem .12rem;
            text-align: left;
            a{
                display: inline-block;
                padding: .07rem .1rem;
                margin: .05rem;
                border: 1px solid #e4e4e4;
                font-size: .12rem;
            }
        }
        .page{
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;
            .title{
                line-height: .4rem;
                padding: 0 .12rem;
                font-size: .13rem;
                text-align: left;
                background: #fff;
            }
            .sh-img{
                    img{
                        width: 100%;
                        display: block;
                    }
                }
        }
        .head{
            width: 100%;
            background: #f2f2f2;
            .headbox{
                display: flex;
                align-items: center;
                height: .41rem;
                width: 100%;
                .big{
                    display: block;
                    margin: 0 .1rem;
                    color: #666;
                    i{
                        display: block;
                        width: .3rem;
                        height: .3rem;
                        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQVQYGe3Bf0yUdRwH8I9GpBtZVpul0y1/ZD8sKzdXbupMh3Pq0jWtzbVs9YfL8scfLq02h1m52R3c832+z/d5HrjjAOH4KQhy4MQD4eS4gXiCePLjBIwU8VeCOAPy3dZf/mEpz56zW93rRRQVFRUVFfU/dGFM+UTHlOrXzq/yf9HwefeS0plpk4/F0b+je5x/UZXIPZV+URmRwMEhQfs940K+ry6hYTY9Wu0Tyze6yxVYwSGgQoUKFSpUCMiwwH6zPLVqZVcsPRrlSwvqVVghwMGhQYMOHTp0aNDAIcBhhQ53UcWLFH4127QrElQwqEi7keUu21W/vnl5+/y2dwKraj8p3pdZ7bzDIYNDQmqweQWFU/cTpU4GAQUMro6SbR2z6D4aFuRb0m4yqFCgDXq3U7hciynOSYQOBertgr2np9I/ODHPlSlDg4AN3m8oPKq+t0GHguSexg/ogepjPbvZkIACbci3lsx3Yr06rECGvSO4gB6SbxMb5pBhDwZeInN1vWJvY5DB+5uX0ShUfmeDAhtKCkOxZCZPogUCMo5vpFEJxRSkcKiQ0BBP5gnMSu+RIaGokEatc2ZqSEBCqasnhszi32SFgBYKLiQDqnfI0CAGz79B5uibkOOVIZCXTob0TrK3qeA4tpfM0TmPQYO427CBDHLrDAoO+H+LITM0r+VQkRy88DwZFFiXBAWOS73PkRl8WzgU5JVVjyeDQi+LPhmOW63zyAxH9yvgKE31jCGDKqZltTPYh+rXkBmKXAIyKpLIsJpn8hskpMDzJZmhKFuAoXIfGeaPO+i1IQXHtpIZPHsVyCgXZJhnUm6TBPtI3UdkBv9mDo5DOVUxZFDpjAO/yHDcCcSTGVreZxDI8F58kgxqelMe5LD3h+aQGbrnsBENYrDjbTKobnMSFLh8A7Fkhpa4Ao8MgcpdZEjTuAI3h4DnRzJLYEMiODKPX3qKDAjOF30a+N3gYjJLz+SMs0lQUL2ZDDiYqkDCQffFcWSeih8sYEht/HUqjVJgjehTIOH0CjJT99QDbRJsKCxtG0+j0PWqvUOGFYdzyGxnlyVf5ZCQ9xM9tJPP5jbaIMEZ7J5B5jv6FR/iUPsP778eRw+hc4ajhEGBs+NkPIXDmTFuRyI4FBSW9EyhB2h9N+O0AgEFR5MoXK49XilzMDBktBZ+Fnia/oZ/ev6elKscAioUOEPtCyl8POucfRwSZOTVunZWxg9MoHtcnuxek5mQE7JBhoAODQIStBttCyh8OubmHEke4LBAhXM4uykt35mWb8212bPSi7M6nX9wWCGQfL2M9U73JjBw2KBfbl1M4VPxmG9tdl76gA0WWCBBhQYNKiRY8TMYMnuzXdVL6S/H90hQwGHvObeEwiv4Vpn1UG1ea9ZV510dOhxIG8npOnykNKF5Lt2jZjeDCgXJl4PLKdx6xja+4Hm94D3Hh471rhXFi+qm0X3UfMsgwKDeOreUIoP3awYFEsTNs8soMnh3MnAw6FdallNkOLGLQUBBcl/LSooMtTtkqODQBlpWU2TwbZGhgEG5fWY1RQbfVhkcDKK/eTVFhtrtMjg49Butiygy+LfKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII=");
                        background-color: transparent;
                        background-repeat: no-repeat;
                        background-position: 50%;
                        background-size: cover;
                    }
                }
                .input{
                    background: #fff;
                    width: 100%;
                    input{
                        border: 1px solid #e5e5e5;
                        border-radius: .02rem;
                        width: 100%;
                        padding: 0 .1rem;
                        outline: 0;
                        font-size: .15rem;
                        font-weight: 400;
                        height: .27rem;
                        line-height: normal;
                    }
                }
                .goback{
                    display: block;
                    margin: 0 .1rem;
                    color: #666;
                    i{
                        display: block;
                        width: .25rem;
                        height: .25rem;
                        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABfUlEQVR4AWL4//8/oH1zzA4gCMJgbNv239i2beP+R8gXczpmV79XB9ja3UEDDJCAIAQhCEF/TBAgCEEIUkSKFrEoahD0VFCdOLtmWxQh6E5Okzh7xCyC7n85T+lyL0jREJDT434NMr6cAde7mLHmXDDkfptX1AfkjPk+B9lyRn0fFO01Z8r9SVrRGJAzLaL9CrJ/q4XvlnPBX5IT4/qyqqgJyFkWcX5v8/aXsyKSXKc7FLUBORuGHAeC7K18y5DjQ5CiOiBnU6T6zSjav9WWSPebcrV3qz2R4Tcnba85hyLTb9Le/nL2RY7fqsbLcnJdl30MOSeiwG9dzD4hX1DitnCoSBDlhpwy15VVRY9YDvxWhd/xYAjiF2ORLnYviG3+45dTDopcNbisftvvRrrjlQmzNAeCSLmStP9OSZR9KBx+6cK95LH0TPMC7S80UNGCRxMnbcA0kg8iiFEEhlkYh2Kg7vd/STvPj2Qy1NvKUO+PgCAEIQhBCEIQghAE53kdVfEUUHFYAAAAAElFTkSuQmCC");
                        background-color: transparent;
                        background-repeat: no-repeat;
                        background-position: 50%;
                        background-size: cover;
                    }
                }
            }
        }
    }
</style>