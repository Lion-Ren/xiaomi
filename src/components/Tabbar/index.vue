<template>
    <div class="tabbar border-1px">
        <Item 
            v-for="nav in navs" 
            :txt="nav.txt"
            :key="nav.id"
            :mark="nav.mark"
            :sel="selected"
        >
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
                {id:1,txt:"首页",mark:"home"},
                {id:2,txt:"分类",mark:"group"},
                {id:3,txt:"购物车",mark:"cart"},
                {id:4,txt:"我的",mark:"mine"},
            ]
        }
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
        bottom:0;
        left:0;
        width: 100%;
        display: flex;
        background: #fff;
        height: 50px;
        background: skyblue
    }
</style>