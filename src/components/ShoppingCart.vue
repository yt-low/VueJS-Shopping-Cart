<template>
	<div>
		<ul v-if="products.length" class="clearfix">
			<li v-for="product in products" class="clearfix">
				<div class="image-wrapper"><img v-bind:src="product.image" /></div>
				<div class="title-wrapper">
					{{ product.title }}<br />
					<strong class="price-quantity">
						<span class="red">{{ product.price | currency }}</span> x {{ product.quantity }}
					</strong>
				</div>
				<button class="btn btn-outline-primary" v-on:click="removeProductFromCart(product)" >
				Descrease quantity
				</button>
			</li>
		</ul>
		<span v-else>Your cart is empty.</span>
		<div class="mt-2 mb-2 text-right">
			<strong class="total-price">Total: {{ total | currency }}</strong>
		</div>
	</div>
</template>

<script>
export default {
	name: 'cart',
	computed: {
		products: function() {
			return this.$store.getters.cartProducts
		},

		total: function() {
			return this.$store.getters.cartTotal
		}
	},

	methods: {
		removeProductFromCart: function(product) {
			this.$store.dispatch('removeProductFromCart', product)
		}
	}
}
</script>

<style scoped>
.red {
	color: red;
}
</style>