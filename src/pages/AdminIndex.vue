<template>
	<div class="product-list">
		<h1>My Product List</h1>
		<img v-if="loading == true"
				src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
		<table class="text-left" width="100%" v-else>
			<tr v-for="product in products">
				<td width="90">
					<img v-bind:src="product.image" width="90" />
				</td>
				<td>
					<strong>{{ product.title }}</strong><br />
					<i>Quantity: {{ product.inventory }}</i>
				</td>
				<td>
					 <router-link :to="{ name: 'EditProduct', params: { id: product.id } }">Edit</router-link>
				</td>
			</tr>
		</table>
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
		products: function () {
			return this.$store.getters.availableProducts
		}
	},

	created () {
		this.loading = true
		this.$store.dispatch('fetchProducts')
		.then(() => {
			this.loading = false
		})
	}
}
</script>

<style scoped>
.product-list table tr td {
	border: 1px solid #eee;
	padding: 5px;
}
</style>