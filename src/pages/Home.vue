<template>
	<div>
		<h1>Home Page</h1>
		<ProductList/>
	</div>
</template>

<script>
import ProductList from '@/components/ProductList'

export default {
	name: 'home',
	components: {
		ProductList
	}
}
</script>

<style>
.product-list .item {
	border: 1px solid rgba(0,0,0,.125);
	box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
}
</style>