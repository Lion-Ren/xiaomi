<template>
  <div id="app">
    <keep-alive include="home,group,cart,mine">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  created(){
    this.$router.push("/")
    // this.$store.dispatch("initCars")
    this.initCars()
  },
  methods:{
    ...mapActions(["initCars"])
  }
}
</script>

<style lang="scss">
.ivu-loading-bar,.ivu-loading-bar-inner,.ivu-loading-bar-inner-color-primary{
  background: orange;
  color:orange;
}
</style>
