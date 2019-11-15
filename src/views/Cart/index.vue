<template>
	<div class="cart">
		<CartHeader></CartHeader>
		<CartContent></CartContent>
		<Tabbar></Tabbar> 
	</div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import CartHeader from './CartHeader'
import CartContent from './CartContent'
export default {
	components:{
	Tabbar,CartHeader,CartContent
	}
}
</script>