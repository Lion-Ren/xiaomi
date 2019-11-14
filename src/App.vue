<template>
  <div id="app">
    <keep-alive include="home,group,cart,mine">
      <router-view></router-view>
    </keep-alive>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar';
export default {
  components:{
    Tabbar
  },
  created() {
    this.$router.push("/")
  },
}
</script>

<style lang="scss">

</style>
