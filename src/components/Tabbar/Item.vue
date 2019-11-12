<template>
  <div class="item" @click="clickItem">
      <span :class="['title', flag? 'color':'']">{{txt}}</span>
  </div>
</template>

<script>
export default {
    props:["txt","mark"],
    computed: {
        flag(){ 
            if(this.mark === this.sel){
                return true;
            }
            return false;
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
        img{
            height: 40px;
            width: 40px;
        }
        .title{
            font-size: 12px;
        }
        .color{
            color:#42bd56;
        }
    }
</style>