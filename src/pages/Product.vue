<template>
	<div>
		<img v-if="loading == true"
			src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
		<div v-else>
			<div v-if="!errorMessage">
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<img v-bind:src="product.image" />
						</div>
						<div class="col-md-8 text-left">
							<h1>{{ product.title }}</h1>
							<div class="red-text">{{ product.price | currency }}</div>
							<div>
								<small>Quantity: <strong>{{ product.inventory }}</strong></small>
							</div>
							<button 
								class="btn btn-primary"
								v-on:click="addProductToCart(product)"
								v-bind:class="{disabled: product.inventory == 0}">
								Add to Cart
							</button>

							<Accordion v-bind:accordions="product.details" />
						</div>
					</div>
				</div>
			</div>
			<div v-else>
				<h5>Error...</h5>
				<p>Couldn't find any product. Please go back to 
					<router-link to="/">Home</router-link> page.</p>
			</div>

		</div>
	</div>
</template>

<script>
import Accordion from '@/components/Accordion'

export default {
	name: 'product',
	components: {
		Accordion,
	},

	data: function() {
		return {
			loading: false,
			errorMessage: false,
		}
	},

	computed: {
		product: function() {
			return this.$store.getters.singleProductInfo
		},
	},

	methods: {
		addProductToCart: function(product) {
			this.$store.dispatch('addProductToCart', product)
		},
	},

	created () {
		let self = this

		// get array of data from API
		self.loading = true
		self.errorMessage = false
		self.$store.dispatch('fetchSingleProduct', self.$route.params.id)
		.then(() => {
			// success
			self.loading = false
		}, function(err){
			// failed
			self.loading = false
			self.errorMessage = true
		})
	}
}
</script>

<style>
img {
	max-width: 100%;
}

.accordion-wrapper ul {
	list-style-type: none;
	overflow: hidden;
	padding: 0;
	margin: 25px 0;
	width: 100%;
}

.accordion-wrapper li {
	border: 1px solid #ccc;
	border-top: none;
}

.accordion-wrapper li:first-child {
	border: 1px solid #ccc;
}

.accordion-wrapper .title {
	background: #efefef;
	
	cursor: pointer;
	padding: 5px 15px;
}

.accordion-wrapper .content {
	border-bottom: 0;
	box-sizing: border-box;
	overflow: hidden;
	height: 0;
	padding: 0 15px;
	text-align: left;
	transition: all 0.3s ease-out;
}

.accordion-wrapper li .indicator:before {
	content: "+";
	height: 16px;
	width: 16px;
}

.accordion-wrapper li.active .indicator:before {
	content: "-";
}

.accordion-wrapper li.active .content {
	height: auto;
	padding-top: 25px;
	padding-bottom: 25px;
}
</style>