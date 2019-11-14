<template>
  <div id="app">
    <keep-alive include="home,group,cart,mine">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import router from './router'
export default {

}  
</script>

<style lang="scss">

</style>
