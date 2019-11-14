<template>
  <div class="item" @click="clickItem">
      <img :src="flag?img2:img1" alt="">
      <span :class="['title', flag? 'color':'']">{{txt}}</span>
  </div>
</template>

<script>
export default {
    props:["txt","mark","img1","img2","sel"],
    computed: {
        flag(){ 
            /* console.log(this.sel) */
            if(this.mark === this.sel){
                return true;
            }else{
                return false;
            }
        }
    },
    methods: {
        clickItem(){
            // 需要父组件改变自身的selected值
            // this.changeSelected(this.mark);
            this.$emit("changeSelected",this.mark)
            this.$router.push("/"+this.mark)
        }
    },
}
</script>

<style lang="scss" scoped>
    .item{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top:0.08rem;
        img{
            height: 0.2084rem;
            width: 0.2084rem;
            margin-bottom:0.051112rem;
        }
        .title{
            font-size: 0.114644rem;
        }
        .color{
            color:#ff6700;
        }
    }
</style>