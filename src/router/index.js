import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Product from '@/pages/Product'
import Checkout from '@/pages/Checkout'
import AdminLogin from '@/pages/AdminLogin'
import MyAdmin from '@/pages/MyAdmin'
import AdminIndex from '@/pages/AdminIndex'
import EditProduct from '@/pages/EditProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/product/:id',
    	name: 'Product',
    	component: Product
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/admin',
      name: 'AdminLogin',
      component: AdminLogin,
    },
    {
      path: '/myadmin',
      name: 'MyAdmin',
      component: MyAdmin,
      // children routes
      children: [
        {
          path: '',
          name: 'AdminIndex',
          component: AdminIndex
        },
        {
          path: 'edit/product/:id',
          name: 'EditProduct',
          component: EditProduct,
        }
      ]
    },
  ],
  mode: 'history'
});