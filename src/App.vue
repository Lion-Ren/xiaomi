<template>
  <div id="app">
    <keep-alive include="home,group,cart,mine">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  
  created(){
      this.$router.push("/")
  }
}
</script>

<style lang="scss">
.ivu-loading-bar,.ivu-loading-bar-inner,.ivu-loading-bar-inner-color-primary{
  background: orange;
  color:orange;
}
</style>
