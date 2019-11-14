<template>
	<div class="home">
		<Tabbar></Tabbar>
		
		<router-link to="/Computer">笔记本</router-link>
	</div>
</template>

<script>
import Tabbar from '@/components/Tabbar';
export default {
	components:{
		Tabbar
	},
}
</script>

<style>

</style>