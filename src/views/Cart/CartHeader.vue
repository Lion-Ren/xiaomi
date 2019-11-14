<template>
    <mt-header title="购物车">
        <router-link to="" slot="left">
            <mt-button icon="back" @click="back"></mt-button>
        </router-link>
        <mt-button @click="tosearch" icon="search" slot="right"></mt-button>
    </mt-header>
</template>
<script>
import {Header} from "mint-ui"
export default {
    props:["show"],
    methods: {
        back(){
            this.$router.go(-1)
        },
        tosearch(){
            this.$router.push("/search")
        }
    }
}
</script>

<style lang="scss">
    .mint-header{
        background: #f2f2f2;
        color: #666;
        height: 0.5rem;
        padding: 0px 15px;
        z-index: 10;
        top: 0;
        .mint-header-title{
            font-size: 16px;
        }
        .mintui-back{
            font-size:22px;
        }
        .mintui-search{
            font-size: 22px;
        }
    }
</style>