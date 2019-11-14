<template>
    <div class="nex">
        <mt-header  style="background: rgba(0,0,0,0)">
            <div slot="left" @click="goBack" >
                <mt-button icon="back" style="background: rgba(0,0,0,0.3)"></mt-button>
            </div>
            <mt-button icon="more" slot="right" style="background: rgba(0,0,0,0.3)"></mt-button>
        </mt-header>
    </div>
</template>

<script>
export default {
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="scss">
    .mint-header{
        background:rgba(0,0,0,0)
        color
    }
    .mint-button{
        border-radius: 50%;
        width:0.3rem;
        height:0.3rem;
        background: rgba(0,0,0,0.6)
    }
</style>