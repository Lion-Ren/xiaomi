<template>
    <div class="group">
      <!-- <Header></Header> -->
        <mt-header fixed title="分类">
            <router-link to="/home" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="search" slot="right"></mt-button>
        </mt-header>
        <Title></Title>
        <Goods></Goods>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Title from './Title';
import Goods from './Goods';
import Tabbar from '@/components/Tabbar';
export default {
    components:{
        Title,Goods,Tabbar
    }
}

</script>

<style lang="scss">
    .group{
        .mint-header{
            background: #f2f2f2;
            color: #666;
            height: 50px;
            font-size: 18px;
            
        }
        .mintui-back,.mintui-search{
            font-size: 26px;
        }
    }
</style>