<template>
	<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <nav>
            <router-link to="/" class="p-2 text-dark">Home</router-link>
            <router-link :to="{ name: 'AdminIndex'}" class="p-2 text-dark" v-if="isAdminLoggedIn == true">My Admin</router-link>
            <router-link to="/admin" class="p-2 text-dark">
                <span v-if="isAdminLoggedIn == true" v-on:click="AdminLogout">
                    Logout
                </span>
                <span v-else>Admin Login</span>
            </router-link>
        </nav>
    	<ShoppingCartInfoBtn />
    </div>
</template>

<script>
import ShoppingCartInfoBtn from '@/components/ShoppingCartInfoBtn'

export default {
	name: 'SiteHeader',
	components: {
		ShoppingCartInfoBtn,
	},

    data: function() {
        return {
            isAdminLoggedIn: false,
        }
    },

    watch: {
        // Listen to router update event, fires every time when router event is changed
        $route (to, from){
            if(localStorage.loggedin == 'true'){
                this.isAdminLoggedIn = true
            }
        }
    },

    methods: {
        AdminLogout: function() {
            localStorage.loggedin = false
            this.isAdminLoggedIn = false
        }
    },

    created () {
        if(localStorage.loggedin == 'true'){
            this.isAdminLoggedIn = true
        }
    }
}
</script>

<style scoped>
a.router-link-exact-active:focus, 
a.router-link-exact-active:hover,
.router-link-exact-active {
    color: #007bff !important;
}
</style>