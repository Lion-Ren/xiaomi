<template>
    <div class="tabbar border-1px">
        <Item 
            v-for="nav in navs" 
            :txt="nav.txt"
            :key="nav.id"
            :mark="nav.mark"
            :sel="selected"
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
                {id:1,txt:"首页",mark:"home",colorIcon:"icon-shouye1",Icon:"icon-shouye"},
                {id:2,txt:"分类",mark:"group",colorIcon:"icon-fenlei",Icon:"icon-fenlei3-copy1-copy"},
                {id:3,txt:"购物车",mark:"cart",colorIcon:"icon-gouwuche-copy",Icon:"icon-gouwuche"},
                {id:4,txt:"我的",mark:"mine",colorIcon:"icon-ren1",Icon:"icon-ren"},
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
        background: skyblue;
        z-index: 10;
    }
</style>