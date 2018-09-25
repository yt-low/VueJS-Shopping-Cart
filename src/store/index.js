import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
	state: { // = data
		products: [],
		cart: [], // {id, quantity, price, title, image for cart}
		singleProduct: '',
	},

	getters: { // = computed porperties 
		availableProducts (state) {
			 //return state.products.filter(product => product.inventory > 0)
			return state.products
		},

		singleProductInfo (state) {
			return state.singleProduct
		},

		cartProducts (state) {
			return state.cart
			// don't need map array
			/*return state.cart.map(cartItem => {
				const product = state.products.find(product => product.id === cartItem.id)
				return {
					title: product.title,
					price: product.price,
					quantity: cartItem.quantity
				}
			})*/
		},

		cartTotalItemNum (state, getters) {
			let total = 0
			getters.cartProducts.forEach(product => {
				total += product.quantity
			})
			return total
		},

		cartTotal (state, getters) {
			let total = 0
			getters.cartProducts.forEach(product => {
				total += product.price * product.quantity
			})
			return total;
		},
	},

	actions: {
		fetchProducts ({commit}) {
			// use Promise to know when API loading is done.
			return new Promise((resolve, reject) => {
				// make the call 
				shop.getProducts(products => {
					// run Vuex's mutation 
					commit('setProducts', products)
					resolve()
				})
			})
		},

		fetchSingleProduct ({commit}, productID) {
			return new Promise((resolve, reject) => {
				// make the call 
				shop.getProducts(products => {
					products.forEach(product => {
						if(product.id == productID) {
							commit('getSingleProductInfo', product)
							resolve()
						}
					})
					// when not found
					reject(Error("error"))
				});
				
			})
		},

		addProductToCart (context, product) {
			if(product.inventory > 0) {
				// find cartItem
				const cartItem = context.state.cart.find(item => item.id === product.id)
				//console.log(cartItem);
				if(!cartItem) {
					// add product to cart if product is not exist in cart
					context.commit('pushProductToCart',product)
				} else {
					// increase item quantity
					context.commit('incrementItemQuantity', cartItem)
				}
				context.commit('decrementProductInventory', product)
			}
		},

		removeProductFromCart (context, product) {
			const cartItem = context.state.cart.find(item => item.id === product.id)
			if(cartItem) {
				if(cartItem.quantity > 1) {
					// decrease cart item quantity
					context.commit('decrementItemQuantity', cartItem)
				} else {
					// drop product from cart
					context.commit('dropProductFromCart', product)
				}
			}
			context.commit('incrementProductInventory', product)
		},
	},

	mutations: {
		// setting / updating state
		setProducts (state, products) {
			state.products = products
		},

		getSingleProductInfo (state, product) {
			state.singleProduct = product
		},

		pushProductToCart (state, product) {
			state.cart.push({
				id: product.id,
				title: product.title,
				price: product.price,
				image: product.image,
				quantity: 1,
			})
		},

		dropProductFromCart (state, product) {
			for( var i = 0; i < state.cart.length; i++){ 
			   if ( state.cart[i].id === product.id) {
			     state.cart.splice(i, 1)
			   }
			}
		},

		incrementItemQuantity (state, cartItem) {
			cartItem.quantity++
		},

		decrementItemQuantity (state, cartItem) {
			cartItem.quantity--
		},

		incrementProductInventory (state, product) {
			const productItem = state.products.find(item => item.id === product.id)
			if(productItem) {
				productItem.inventory++
			}
		},

		decrementProductInventory (state, product) {
			product.inventory--
		}
	}
})