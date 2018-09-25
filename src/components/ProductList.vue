<template>
	<div class="product-list">
		<img v-if="loading == true"
			src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
		<div class="container" v-else>
			<div class="row">
				<div class="col-lg-3 col-md-6 col-12" v-for="product in products">
					<div class="item">
						<div class="mb-3">
							<img v-bind:src="product.image" width="100%" />
						</div>
						<div class="p-4">
							<h5>{{ product.title }}</h5>
							<div class="red-text mb-3">{{ product.price | currency }}</div>
							<div>
								<router-link :to="'/product/' + product.id">View Details</router-link>
							</div>
							<button 
								class="btn btn-primary"
								v-on:click="addProductToCart(product)"
								v-bind:class="{disabled: product.inventory == 0}">
								Add to Cart
							</button>
							<div>
								<small>Quantity: <strong>{{ product.inventory }}</strong></small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			loading: false
		}
	},

	computed: {
		products: function() {
			return this.$store.getters.availableProducts
		}
	},

	methods: {
		addProductToCart: function(product) {
			this.$store.dispatch('addProductToCart', product)
		}
	},

	created () {
		this.loading = true
		// get array of data from API
		this.$store.dispatch('fetchProducts')
		.then(() => {
			this.loading = false
		})
	}
}
</script>

<style scoped>
li {
	margin: 20px 0;
}
</style>