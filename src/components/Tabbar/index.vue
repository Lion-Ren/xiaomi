<template>
    <div class="tabbar border-1px">
        <Item 
            v-for="nav in navs" 
            :txt="nav.txt"
            :key="nav.id"
            :mark="nav.mark"
            :sel="selected"
            :img1="nav.img1"
            :img2="nav.img2"
        >
        <p slot="activeImg" :class="nav.colorIcon"></p>
        <p slot="normalImg" :class="nav.Icon"></p>
        </Item>
    </div>
</template>

<script>
import Item from "./Item"

export default {
    data() {
        return {
            selected:this.$route.name,
            navs:[
                {id:1,txt:"首页",mark:"home",img1:require("../../assets/xiaomi_tabbar3.png"),img2:require("../../assets/xiaomi_tabbar4.png")},
                {id:2,txt:"分类",mark:"group",img1:require("../../assets/xiaomi_tabbar5.png"),img2:require("../../assets/xiaomi_tabbar6.png")},
                {id:3,txt:"购物车",mark:"cart",img1:require("../../assets/xiaomi_tabbar1.png"),img2:require("../../assets/xiaomi_tabbar2.png")},
                {id:4,txt:"我的",mark:"mine",img1:require("../../assets/xiaomi_tabbar7.png"),img2:require("../../assets/xiaomi_tabbar8.png")},
            ]
        }
    },
    updated() {
        setTimeout(()=>{
            console.log(this.$route.name)
        },0)
    },
    components:{
        Item
    },
    methods: {
        changeSelected(val){
            this.selected = val;
        }
    },
}
</script>

<style lang="scss">
    // @import "@/stylesheets/_commons.scss";
    @import "@/stylesheets/_mixins.scss";
    .tabbar{
        @include border-top(1px, #ccc);
        position: fixed;
        bottom:-1px;
        left:0;
        width: 100%;
        display: flex;
        background: #fff;
        height: 50px;
        align-items: center;
        font-size:0.114644rem;
        color:#999;
        box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
        z-index: 20;
    }
</style>