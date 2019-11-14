<template>
	<div>
		<homeTitle></homeTitle>
      	<router-view></router-view>
	</div>
</template>

<script>
import homeTitle from '@/components/homeTitle'
export default {
	components:{
		homeTitle
	}
}
</script>

<style>

</style>