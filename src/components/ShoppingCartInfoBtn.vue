<template>
	<div class="header-shopping-cart">
		<router-link to="/checkout" 
			class="btn btn-outline-primary" 
			v-bind:class="cartTotalItemNum > 0 ? 'active' : ''">
				Cart <span>{{ cartTotalItemNum }}</span>
		</router-link>
		
		<div class="floated-cart">
			<ShoppingCart />
			<router-link to="/checkout" 
				class="btn btn-outline-primary float-right"
				v-if="cartTotalItemNum > 0">
				Checkout
			</router-link>
		</div>
	</div>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart'

export default {
	components: {
		ShoppingCart,
	},

	computed: {
		cartTotalItemNum: function() {
			return this.$store.getters.cartTotalItemNum
		}
	}
}
</script>

<style>
.header-shopping-cart {
	position: relative;
}

.header-shopping-cart > .floated-cart {
	background: #fff;
	box-shadow: 0 0 10px rgba(0,0,0,.2);
	display: none;
	text-align: left;
	padding: 10px;
	position: absolute;
	top: 30px;
	right: 0;
	width: 320px;
	z-index: 2;
}

.header-shopping-cart:hover div {
	display: block;
}

.header-shopping-cart h1 {
	font-size: 14px;
}

.header-shopping-cart .image-wrapper {
	float: left;
	margin-right: 5px;
	overflow: hidden;
	height: 50px;
	width: 50px;
}

.header-shopping-cart img {
	max-width: 100%;
}

.header-shopping-cart ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}

.header-shopping-cart ul li {
	border-bottom: 1px solid #efefef;
	padding: 10px 0;
}

.header-shopping-cart .btn-outline-primary {
	transition: all 0.5s ease-out;
}

.header-shopping-cart .btn-outline-primary.active {
	animation: animateBtn 0.5s;
}

.header-shopping-cart .total-price {
	font-size: 1.2em;
}

@keyframes animateBtn {
	0% { transform: scale(1); }
	50% { transform: scale(1.5); }
	100% { transform: scale(1); }
}
</style>