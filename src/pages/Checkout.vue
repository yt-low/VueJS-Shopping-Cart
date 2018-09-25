<template>
	<div id="checkout-page" class="container">
		<h1>Checkout</h1>
		<ShoppingCart />
	</div>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart'

export default {
	components: {
		ShoppingCart
	}
}
</script>

<style>
#checkout-page {
	text-align: left;
}

#checkout-page ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

#checkout-page ul li {
	border-bottom: 1px solid #efefef;
	padding: 10px 0;
}

#checkout-page .image-wrapper {
	float: left;
	margin-right: 10px;
	overflow: hidden;
	width: 150px;
}

#checkout-page .image-wrapper img {
	max-width: 100%;
}

#checkout-page .title-wrapper {
	text-align: left;
}

#checkout-page .price-quantity {
	display: block;
	text-align: right;
}

#checkout-page .total-price {
	font-size: 1.2em;
}

</style>