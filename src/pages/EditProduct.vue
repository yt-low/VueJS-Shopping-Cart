<template>
	<div class="text-left">
		<img v-if="loading == true"
			src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
		<form v-else>
			<h1>Edit Product - {{ newProductTitle }}</h1>
			<div class="mb-3">
				<label>Product Title</label>
				<input type="text" class="form-control" 
					v-model="newProductTitle" />
			</div>
			<div class="mb-3">
				<label>Inventory</label>
				<input type="number" v-bind:value="product.inventory" class="form-control" />
			</div>
			<hr />
			<div class="mb-3">
				<strong>Details</strong>
				<fieldset>
					<table id="table-details" width="100%">
						<tr 
							v-for="(value, key, i) in product.details"
							v-bind:key="`accordion-item-${i}`">
							<td>
								<div class="form-group">
									<label>Title</label>
									<input type="text" v-bind:value="key" class="form-control" />
								</div>
								<div class="form-group">
									<label>Description</label>
									<textarea class="form-control">
										{{ value }}
									</textarea>
								</div>
							</td>
						</tr>
						<!-- Custom add extra field -->
						<tr v-for="(row, index) in rows" v-bind:key="index">
		                    <td>
		                    	<span class="btn btn-remove-row btn-outline-danger" v-on:click="removeField(index);" style="cursor: pointer">X</span>
		                    	<div class="form-group">
		                    		<label>Title</label>
		                      		<input type="text" v-model="row.title" class="form-control">
		                      	</div>
		                    	<div class="form-group">
		                    		<label>Description</label>
		                    		<input type="text" v-model="row.description" class="form-control">
		                    	</div>
	                    	</td>
		                </tr>
					</table>
				</fieldset>
				<button class="btn btn-secondary" v-on:click="addNewField">Add new detail's field</button>
			</div>
		</form>
		<router-link :to="{ name: 'AdminIndex' }" class="btn btn-primary">Save</router-link>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			loading: true,
			newProductTitle: '',
			product: '',
			rows: [],
		}
	},

	methods: {
		addNewField: function (e) {
			e.preventDefault()
			this.rows.push({
                title: "",
                description: ""
            });
		},

		removeField: function (index) {
			this.rows.splice(index, 1)
		}
	},

	created () {
		this.$store.dispatch('fetchSingleProduct', this.$route.params.id)
		.then(() => {
			this.loading = false
			this.product = this.$store.getters.singleProductInfo
			this.newProductTitle = this.product.title
		})
	},
}
</script>

<style>
label {
	display: block;
	font-weight: bold;
}

fieldset {
	background: #eee;
	padding: 15px;
}

fieldset table tr > td {
	border-top: 1px dashed #ccc;
	padding-top: 15px;
	position: relative;
}

fieldset table tr:first-child > td {
	border: none;
	padding-top: 5px;
}

.btn-remove-row {
	padding: 1px 8px;
	position: absolute;
	right: 0;
	top: 10px;
}
</style>