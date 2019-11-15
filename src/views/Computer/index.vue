<template>
    <div class="com">
        <div class="header" id="header">
            <div class="right gt" @click="golast">
                <router-link to="" tag="div" class="right-item">
                    <i id="haha"></i>
                </router-link>
            </div>
            <div class="tosearch">
                <router-link to="/search" tag="div" class="search">
                    <i></i>
                    搜索商品名称
                </router-link>
            </div>
            <div class="right cart">
                <router-link to="/cart" tag="div" class="right-item">
                    <i id="xixi"></i>
                </router-link>
            </div>
        </div>
        <div class="content">
            <div class="imgbox">
                <div class="sweiper">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a394b04bac545783a791641a67a37d0.jpg?thumb=1&w=720&h=360" alt="">
                </div>
            </div>
            <div class="person">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c77ff4dbb04de7f7c8b3db36e42306f.jpg?thumb=1&w=720&h=81" alt="">
            </div>
            <div class="computer">
                <img :src="img.img" alt="" v-for="img in imges" :key="img.id">
            </div>
            <div class="top">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc74487a5af885c668b99f17d9d8e25b.jpg?thumb=1&w=720&h=98" alt="">
            </div>
            <div class="redmi">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/027566d07ef8f8e30d50a75ae075578d.jpg?thumb=1&w=720&h=280" alt="">
            </div>
            <div class="two">
                <div class="line"></div>
                <div class="goods">
                    <div class="gooditem" 
                        v-for="two in twos"
                        :key="two.product_id"
                    >
                        <img :src="'https://' + two.img_url" alt="">
                        <div class="info">
                            <div class="text">
                                <div class="name">
                                    {{two.product_name}}
                                </div>
                                <div class="dsc">
                                    {{two.product_brief}}
                                </div>
                            </div>
                            <div class="btn">
                                <div class="btnbox">
                                    <div class="price">
                                        {{two.product_price}}
                                        <span>起</span>
                                    </div>
                                    <div class="buy">
                                        立即购买
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line"></div>
                <div class="goods">
                    <div class="gooditem" 
                        v-for="three in threes"
                        :key="three.product_id"
                    >
                        <img :src="'https://' + three.img_url" alt="">
                        <div class="info">
                            <div class="text">
                                <div class="name">
                                    {{three.product_name}}
                                </div>
                                <div class="dsc">
                                    {{three.product_brief}}
                                </div>
                            </div>
                            <div class="btn">
                                <div class="btnbox">
                                    <div class="price">
                                        {{three.product_price}}
                                        <span>起</span>
                                    </div>
                                    <div class="buy">
                                        立即购买
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imges:[
                {id:1,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76c21de60da4975bfa8adb28dc1a8b0f.jpg?thumb=1&w=360&h=146"},
                {id:2,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb84e505e7185f12eb1138b5af9eb535.jpg?thumb=1&w=360&h=146"},
                {id:3,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b713189d5fb59597daed98238dae43d9.jpg?thumb=1&w=360&h=146"},
                {id:4,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d6551798fdf7e9d7622199bcbf984e74.jpg?thumb=1&w=360&h=146"},
                {id:5,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7f9958a27264c7138f01a86c2aa154.jpg?thumb=1&w=360&h=158"},
                {id:6,img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/354ffa1641fc03a7956178115d389222.jpg?thumb=1&w=360&h=158"}
            ],
            twos:[],
            threes:[]
        }
    },
    methods: {
        golast(){
            this.$router.go(-1)
        },
        changeColor(){
            var oHa = document.getElementById("haha")
            var oXi = document.getElementById("xixi")
            var oHear = document.getElementById("header")
            var scoll = document.documentElement.scrollTop
            if(this.$route.name === "computer"){
                if(scoll >= 200){
                    oHa.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABfUlEQVR4AWL4//8/oH1zzA4gCMJgbNv239i2beP+R8gXczpmV79XB9ja3UEDDJCAIAQhCEF/TBAgCEEIUkSKFrEoahD0VFCdOLtmWxQh6E5Okzh7xCyC7n85T+lyL0jREJDT434NMr6cAde7mLHmXDDkfptX1AfkjPk+B9lyRn0fFO01Z8r9SVrRGJAzLaL9CrJ/q4XvlnPBX5IT4/qyqqgJyFkWcX5v8/aXsyKSXKc7FLUBORuGHAeC7K18y5DjQ5CiOiBnU6T6zSjav9WWSPebcrV3qz2R4Tcnba85hyLTb9Le/nL2RY7fqsbLcnJdl30MOSeiwG9dzD4hX1DitnCoSBDlhpwy15VVRY9YDvxWhd/xYAjiF2ORLnYviG3+45dTDopcNbisftvvRrrjlQmzNAeCSLmStP9OSZR9KBx+6cK95LH0TPMC7S80UNGCRxMnbcA0kg8iiFEEhlkYh2Kg7vd/STvPj2Qy1NvKUO+PgCAEIQhBCEIQghAE53kdVfEUUHFYAAAAAElFTkSuQmCC")'
                    oXi.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAADqklEQVR4Ae3bA4wlSxSH8Xf5bNu2bdu2bdu2bdvW2rZt27u1Xzb6p0Y9manuk0xt8gt2cE6+6+6exZxz1YhihBgoBoqBYqAYKAaKgWKgIGKgGOiGG274DTNq8AeKDTWQS2AelmqogVokCDQbqzXUQMthbfge9e5B+8YnaUi4o+HE5TEQJNDGcOLFGAgSaHmMlEB/xUCQQEvgPwnUHaUqvndF7IN9jdgbG4YOlMOrEmgYNq/k+xbHz3DG9MPVKCQPVPtI18jAaTiyku9ZAXPgDJqPU0MGOgJOXFPFPe1q9ELvjA2A87QKGWhHTJFhzxh9stWH+6OYLTtPDhloXXSRYV8hbzxSEQNl514hAy2JX2RYC6xiPNASXqAvQwTSga/JsKHY2nig7TFOdr4/dKDbZNhcHGA80MmYJTufHDrQqd7L+DnGA90OJ3YKHWhXjJaBDxkP9JbsOhgbhA60Enrpkx6KRuMU8Jvs+h9WCBZIBjeXoZ2wbC3eR72LT+roWpQTzFsd7WXXd5BPI9AHMnQGVk/4c23h6skxCW+QEfIzd4Y/qyGvZGK3hD/3az3FmYn9E8w7CvPgsABnphXoGMyXhS9I/k580b9b6+hI5BLMu0x2HI990gq0kff55mmjT9KPy449sG5agUreY/tXg3HK+Ep2bIx8WoFy+EeG90XeWKCV0UF2/DjVU88MfFGGj8Y6xgKt7x2auSvtQJd7RxcPMRZoV9lvDk5MO9D+ssACXGks0Lmy3xRskXagzTFNlnjOWKDHZLcRKKcdaA10liW+NxboR9mtkX4trUBL4Hvv6OIKhgL1lt1eSTWQLPG0LDEQWxmJsyomyW5XZBXoau/z0aFGAu2DmbLb3lkFOs47uni+kUAXy2fF6Vgvq0A7YbgEesBIoCdkp85YOatAq3hv5z9BzkAgPazyNcqpB5Jl/pRl2mIDrJCRNfCIdxbjpuwuA5aD4mI+5mVkPpx/BUrWga6EM+o22TWzQCvgA8zGAiNG4V4skXUgPb2yElY2Yvn4pwi1FgPFQDFQDBQD6VmPfIofLfLIWQ6kl+hdgf/REvdj5cBnLp5HG/yO01CwFkhP1D0F5/kdKwaYt44e8hXXWg20q5yH8l0YYN7D1VxRv57FQKfAVeHpAPO+qWLWXOxpMdC+ckGD79oA856vYtYwbGox0NL4BM7TAWsGmLe5XkAhHkPB6qvYSngGIzAen2GTgPN2w6+YjIG4E0uHeJKO7AeKgWKgGCgGihYCrZ0XvIPCJewAAAAASUVORK5CYII=")'
                    oHear.style.backgroundColor = "#fff"
                }else{
                    oHa.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABtElEQVR4Ae2btVYYQBBF4+6eNHHtYk1ccGtx9++AHqdFO6TFpcKdFpcKhwYfBtdZXOftOfcH7urIniIiYAASIAiCIAiCjp8gAEEQBEFnmTCmgnGDoPV40/LoYv5C0DKhtH4UQ9A8PrTxiCKCoEBBTjzOIHnlJBLhFgsV5KTimifyFeRk4h1E5CfIScdDkchLkJPNnNYuKFiQk8dc0h1qyGdOmSBHlSA/g5yr2oNVN0FOLXNLdzQvb6tG5pH2dIenIKeZeaI7HySHDx2CHFWCXAQ5rcwz7RlFT8PKea095eouyOll3mvPSXsLckaYD9qT9q6CnH7mk/aqhrtBzlftZR9JzjjzXXtdzJfkYam5cHiXcSR52GmvrMYxtRuIGWN+ofQMQZtyj3HCFtvdIW0BQeZrfgLX/DIehofiFwgyhxp9CDUQrG4LD6Q7dpcwewVBSLkiab+XeKHss/MXdwMKh5sf3DXMDQgyNy+UonlBloT2FzRQ7Qzvw27BQxMn2oDRSJ4CQfiKsCefWeIgaPOVFAlB+FC343dSN75krucsE85UMu4HegYBCIIgCIIgCIIgCIIgMAMUpMidp52UUAAAAABJRU5ErkJggg==")'
                    oXi.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAC9ElEQVR4Ae3aA6wlSxSF4ffGtm3btm3btm3btm3btm3bnlnjnT7Tt/smvU+qcnYlX9hJ1fxJ1uj+9/XrV+EFiSCBJJAEkkASSAJJIAkknA4kgUbCZzA772ExRPDUQB/BzjkL/jwx0Aywe6p46gYFhmAmJpNAs2SkXRUigW5JIFdB4ROJFEsCudpHAtWSQK76eWOHokO2X/JAMQuloJqFGtDMhq7QjegMZcAPd6B8JNA9L77LAp9AtXMCwnAGCmT4hccz+a4lqHpmcwYy7lA9k29Cw1q4BpfgmIUjsM2G5bDMwkyYZrCavPkNd6Be5LJ5moxvDPLmD9yBchl3SAPVyJsPcQcKAB/IhQk1CDSNvHcQVyBqF7mwkQaBrpH3FmIPZNihRYrHiUbe+hmCuiNQDnLpQ/hfr/3hD+QP3pGLE+m5PwyBiG3k4sY2vvcLiSGZQ2I7sD+sgbqRi5dZfOsLjoPTZ4AD+8MWKBu5/An48OLbKMBxjju1PzQQ1w4ls/h+LDyGZw65DeW9vz/8gahN5AHNFBzo6xb7wx6ok3GHFBLLen/4A2Uij3gGPhUKVMt6f/gD+YE35CGpFAo0i+4PfyB7O9RKoUC37O0Pf6AO5CGr9Nsf/kDpyGOeg0+99oc/kC94RR6UWsf9oYE4rCMPaqff/vAHakcetE6//eEPlJY86hX40mt/+AP5hOfkYel02x8aiMsqukP67Q9/oFbkYZv02x/+QKkM/3vpR6/9MQbi36FMOu0PDcRpOXngAijmRqXhId0fFQPVARXOKwikYiC/sE+BQA1V/kn7QNAVdsExNzoKy6Eg44/gCYkggfQIFBjaw2IYBrGZ7gkArWERjIQEOgQKCCeAnleQ0uF7/MF+oOcNZFQ9UAv419nopj9z7VE90CyThz92+J4JJvd8UD3QYJOHn3L4nq4m91xVPVAceAPGU9fhe6LCSzCeFqoGorLC0V8PvgtNmO5JR4b6PrSB/x0PJCSQBJJAEkgCSSAJJIHEN0/y13WPnnTCAAAAAElFTkSuQmCC")'
                    oHear.style.backgroundColor = "transparent"

                }
            }
        }
    },
    created() {
        this.$http.get("./api/computer.json").then(res=>{
            // this.goods = res.data
            // console.log(res.data[0].data.sections[10])
            this.twos = res.data[0].data.sections[8].body.items
            this.threes = res.data[0].data.sections[10].body.items

        })
    },
    mounted() {
        window.addEventListener("scroll",this.changeColor)
    },
}
</script>

<style lang="scss">
    .content{
        .two{
            background: rgb(126, 84, 156);
            .line{
                height: 0.08rem;
                border-bottom: 0.08rem solid rgb(126, 84, 156);
                background-color: rgb(126, 84, 156);
                margin: 0 auto;
                border-top: none;
                border-left: none;
                border-right: none;
                box-sizing: border-box;
                width: 100%;
                overflow: hidden;
            }
            .goods{
                padding: 0 .1rem;
                overflow: hidden;
                text-align: left;
                display: flex;
                justify-content: space-between;
                .gooditem{
                    width: 1.73rem;
                    border-radius: .1rem;
                    overflow: hidden;
                    float: left;
                    background: #fff;
                    img{
                        display: block;
                        width: 1.73rem;
                        height: 1.7rem;
                    }
                    .info{
                        height: auto;
                        padding: .14rem .05rem;
                        text-align: center;
                        overflow: hidden;
                        color: #000;
                        .btn{
                            display: flex;
                            justify-content: center;
                            .btnbox{
                                display: block;
                                width: 0.9rem;
                                margin: 0 auto;
                                outline: 0;
                                .price{
                                    color: rgb(255, 0, 0);
                                    font-size: .14rem;
                                    text-align: center;
                                    padding-left: .25em;
                                    position: relative;
                                    display: inline-block;
                                    font-weight: 700;
                                    line-height: 0.5em;
                                    height: 0.6em;
                                    white-space: nowrap;
                                    &::before{
                                        content: "\A5";
                                        position: absolute;
                                        left: -3px;
                                        top: 0;
                                        font-size: .4em;
                                        text-decoration: none;
                                    }
                                    span{
                                        display: inline-block;
                                        vertical-align: baseline;
                                        margin-left: .02rem;
                                        font-size: .1rem;   
                                    }
                                }
                                .buy{
                                    background-color: rgb(255, 0, 0);
                                    color: rgb(255, 255, 255);
                                    height: .25rem;
                                    line-height: .25rem;
                                    font-weight: bolder;
                                    display: block;
                                    width: 100%;
                                    text-align: center;
                                    font-size: .12rem;
                                    border-radius: 3px;
                                }
                            }
                        }
                        .text{
                            padding-top: 0;
                            padding-right: 0;
                            height: auto;
                            margin-bottom: .06rem;
                            .name{
                                font-size: .14rem;
                                padding: 0 .06rem;
                                font-weight: bolder;
                                color: #3c3c3c;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                            .dsc{
                                font-size: .1rem;
                                color: #3c3c3c;
                                height: 0.75em;
                                margin-top: .06rem;
                                line-height: 0.75em;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                }
            }
        }
        .redmi{
            img{
                width: 100%;
            }
        }
        .top{
            img{
                height: 0.5rem;
                width: 100%;
            }
        }
        .computer{
            background-color: rgb(238, 238, 238);
            img{
                display: inline-block;
                width: 50%;
            }
        }
        .person{
            background-color: rgb(238, 238, 238);
            img{
                height: 0.41rem;
                width: 100%;
            }
        }
        position: relative;
        overflow-x: hidden;
        .sweiper{
            margin-left: auto;
            margin-right: auto;
            position: relative;
            overflow: hidden;
            z-index: 1;
            background: #ccc;
            img{
                height: 1.9rem;
                width: 375px;
            }
        }
    }
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        background: #f2f2f2;
        color: #fff;
        padding: 0;
        position: fixed;
        top: -1px;
        left: 0;
        right: 0;
        z-index: 99;
        background-color: rgba(255, 255, 255, 0);
        .tosearch{
            display: flex;
            align-items: center;
            flex: 1;
            font-size: .16rem;
            .search{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border: 1px solid #e5e5e5;
                text-align: left;
                width: 100%;
                color: rgba(0,0,0,.3);
                background-color: #fff;
                border-radius: .02rem;
                i{
                    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEx0lEQVQYGe3Bf0yUdRwH8I9GpBtZVpul0y1/ZD8sKzdXbupMh3Pq0jWtzbVs9YfL8scfLq02h1m52R3c832+z/d5HrjjAOH4KQhy4MQD4eS4gXiCePLjBIwU8VeCOAPy3dZf/mEpz56zW93rRRQVFRUVFfU/dGFM+UTHlOrXzq/yf9HwefeS0plpk4/F0b+je5x/UZXIPZV+URmRwMEhQfs940K+ry6hYTY9Wu0Tyze6yxVYwSGgQoUKFSpUCMiwwH6zPLVqZVcsPRrlSwvqVVghwMGhQYMOHTp0aNDAIcBhhQ53UcWLFH4127QrElQwqEi7keUu21W/vnl5+/y2dwKraj8p3pdZ7bzDIYNDQmqweQWFU/cTpU4GAQUMro6SbR2z6D4aFuRb0m4yqFCgDXq3U7hciynOSYQOBertgr2np9I/ODHPlSlDg4AN3m8oPKq+t0GHguSexg/ogepjPbvZkIACbci3lsx3Yr06rECGvSO4gB6SbxMb5pBhDwZeInN1vWJvY5DB+5uX0ShUfmeDAhtKCkOxZCZPogUCMo5vpFEJxRSkcKiQ0BBP5gnMSu+RIaGokEatc2ZqSEBCqasnhszi32SFgBYKLiQDqnfI0CAGz79B5uibkOOVIZCXTob0TrK3qeA4tpfM0TmPQYO427CBDHLrDAoO+H+LITM0r+VQkRy88DwZFFiXBAWOS73PkRl8WzgU5JVVjyeDQi+LPhmOW63zyAxH9yvgKE31jCGDKqZltTPYh+rXkBmKXAIyKpLIsJpn8hskpMDzJZmhKFuAoXIfGeaPO+i1IQXHtpIZPHsVyCgXZJhnUm6TBPtI3UdkBv9mDo5DOVUxZFDpjAO/yHDcCcSTGVreZxDI8F58kgxqelMe5LD3h+aQGbrnsBENYrDjbTKobnMSFLh8A7Fkhpa4Ao8MgcpdZEjTuAI3h4DnRzJLYEMiODKPX3qKDAjOF30a+N3gYjJLz+SMs0lQUL2ZDDiYqkDCQffFcWSeih8sYEht/HUqjVJgjehTIOH0CjJT99QDbRJsKCxtG0+j0PWqvUOGFYdzyGxnlyVf5ZCQ9xM9tJPP5jbaIMEZ7J5B5jv6FR/iUPsP778eRw+hc4ajhEGBs+NkPIXDmTFuRyI4FBSW9EyhB2h9N+O0AgEFR5MoXK49XilzMDBktBZ+Fnia/oZ/ev6elKscAioUOEPtCyl8POucfRwSZOTVunZWxg9MoHtcnuxek5mQE7JBhoAODQIStBttCyh8OubmHEke4LBAhXM4uykt35mWb8212bPSi7M6nX9wWCGQfL2M9U73JjBw2KBfbl1M4VPxmG9tdl76gA0WWCBBhQYNKiRY8TMYMnuzXdVL6S/H90hQwGHvObeEwiv4Vpn1UG1ea9ZV510dOhxIG8npOnykNKF5Lt2jZjeDCgXJl4PLKdx6xja+4Hm94D3Hh471rhXFi+qm0X3UfMsgwKDeOreUIoP3awYFEsTNs8soMnh3MnAw6FdallNkOLGLQUBBcl/LSooMtTtkqODQBlpWU2TwbZGhgEG5fWY1RQbfVhkcDKK/eTVFhtrtMjg49Butiygy+LfKEOAodlKkCHyq94vhUx9T5GiYXjn73FiKioqKior6z/oTCs8KMOW0P6QAAAAASUVORK5CYII=");
                    background-size: .25rem .25rem;
                    display: block;
                    width: .31rem;
                    height: .31rem;
                    background-color: transparent;
                    background-repeat: no-repeat;
                    background-position: 50%;
                }
            }
        }
        .right{
            display: flex;
            align-items: center;
            .right-item{
                display: block;
                width: .3rem;
                margin: 0 .1rem;
                i{
                    width: .25rem;
                    height: .25rem;
                    line-height: .3rem;
                    display: block;
                    background-color: transparent;
                    background-repeat: no-repeat;
                    background-position: 50%;
                    background-size: cover;
                }
            }
        }
        .gt{
            i{
                background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABtElEQVR4Ae2btVYYQBBF4+6eNHHtYk1ccGtx9++AHqdFO6TFpcKdFpcKhwYfBtdZXOftOfcH7urIniIiYAASIAiCIAiCjp8gAEEQBEFnmTCmgnGDoPV40/LoYv5C0DKhtH4UQ9A8PrTxiCKCoEBBTjzOIHnlJBLhFgsV5KTimifyFeRk4h1E5CfIScdDkchLkJPNnNYuKFiQk8dc0h1qyGdOmSBHlSA/g5yr2oNVN0FOLXNLdzQvb6tG5pH2dIenIKeZeaI7HySHDx2CHFWCXAQ5rcwz7RlFT8PKea095eouyOll3mvPSXsLckaYD9qT9q6CnH7mk/aqhrtBzlftZR9JzjjzXXtdzJfkYam5cHiXcSR52GmvrMYxtRuIGWN+ofQMQZtyj3HCFtvdIW0BQeZrfgLX/DIehofiFwgyhxp9CDUQrG4LD6Q7dpcwewVBSLkiab+XeKHss/MXdwMKh5sf3DXMDQgyNy+UonlBloT2FzRQ7Qzvw27BQxMn2oDRSJ4CQfiKsCefWeIgaPOVFAlB+FC343dSN75krucsE85UMu4HegYBCIIgCIIgCIIgCIIgMAMUpMidp52UUAAAAABJRU5ErkJggg==");
            }
        }
        .cart{
            i{
                background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAC9ElEQVR4Ae3aA6wlSxSF4ffGtm3btm3btm3btm3btm3bnlnjnT7Tt/smvU+qcnYlX9hJ1fxJ1uj+9/XrV+EFiSCBJJAEkkASSAJJIAkknA4kgUbCZzA772ExRPDUQB/BzjkL/jwx0Aywe6p46gYFhmAmJpNAs2SkXRUigW5JIFdB4ROJFEsCudpHAtWSQK76eWOHokO2X/JAMQuloJqFGtDMhq7QjegMZcAPd6B8JNA9L77LAp9AtXMCwnAGCmT4hccz+a4lqHpmcwYy7lA9k29Cw1q4BpfgmIUjsM2G5bDMwkyYZrCavPkNd6Be5LJ5moxvDPLmD9yBchl3SAPVyJsPcQcKAB/IhQk1CDSNvHcQVyBqF7mwkQaBrpH3FmIPZNihRYrHiUbe+hmCuiNQDnLpQ/hfr/3hD+QP3pGLE+m5PwyBiG3k4sY2vvcLiSGZQ2I7sD+sgbqRi5dZfOsLjoPTZ4AD+8MWKBu5/An48OLbKMBxjju1PzQQ1w4ls/h+LDyGZw65DeW9vz/8gahN5AHNFBzo6xb7wx6ok3GHFBLLen/4A2Uij3gGPhUKVMt6f/gD+YE35CGpFAo0i+4PfyB7O9RKoUC37O0Pf6AO5CGr9Nsf/kDpyGOeg0+99oc/kC94RR6UWsf9oYE4rCMPaqff/vAHakcetE6//eEPlJY86hX40mt/+AP5hOfkYel02x8aiMsqukP67Q9/oFbkYZv02x/+QKkM/3vpR6/9MQbi36FMOu0PDcRpOXngAijmRqXhId0fFQPVARXOKwikYiC/sE+BQA1V/kn7QNAVdsExNzoKy6Eg44/gCYkggfQIFBjaw2IYBrGZ7gkArWERjIQEOgQKCCeAnleQ0uF7/MF+oOcNZFQ9UAv419nopj9z7VE90CyThz92+J4JJvd8UD3QYJOHn3L4nq4m91xVPVAceAPGU9fhe6LCSzCeFqoGorLC0V8PvgtNmO5JR4b6PrSB/x0PJCSQBJJAEkgCSSAJJIHEN0/y13WPnnTCAAAAAElFTkSuQmCC")
            }
        }
    }
</style>