<template>
	<div class="container">
		<div class="row justify-content-center">
		<div class="col-md-8">
		<transition name="fade" mode="in-out">
			<div class="section" v-if="showRegisterForm == false">
				<h1>Admin Login</h1>
				<form class="form-signin" v-on:submit="loginForm">
					<div class="alert alert-danger text-left" v-if="errors.length">
						<strong>Please correct the following error(s):</strong>
						<ul>
							<li v-for="error in errors">{{ error }}</li>
						</ul>
					</div>
					<input type="text" placeholder="username" class="form-control" 
						v-model="name" />
					<input type="password" placeholder="password" class="form-control" 
						v-model="password" />
					<input type="submit" value="Login" class="btn btn-lg btn-primary btn-block" />
				</form>
				<span class="btn" v-on:click="switchUI('register')">Register new member</span>
			</div>
		</transition>

		<transition name="fade" mode="in-out">
			<div class="section" v-if="showRegisterForm == true">
				<h1>Register New Member</h1>
				<form class="form-register" v-on:submit="registerForm">
					<div class="alert alert-success text-left" v-if="successRegistered == true">
						Successfully registered, please go back to Login page to login.
					</div>
					<input type="text" placeholder="username" class="form-control" 
						v-model="rname" />
					<input type="password" placeholder="password" class="form-control" 
						v-model="rpassword" />
					<input type="submit" value="Register" class="btn btn-lg btn-primary btn-block" />
				</form>
				<span class="btn" v-on:click="switchUI('login')">Back to Login</span>
			</div>
		</transition>
		</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AdminLogin',
	data: function() {
		return {
			rname: '',
			rpassword: '',
			name: '',
			password: '',
			errors: [],
			successRegistered: false,
			showRegisterForm: false,
		}
	},

	methods: {
		registerForm: function(e) {
			e.preventDefault();
			localStorage.rname = this.rname
			localStorage.rpassword = this.rpassword
			this.successRegistered = true
		},

		loginForm: function(e) {
			e.preventDefault();
			this.errors = [];
			if(localStorage.rname == this.name && localStorage.rpassword == this.password){
				localStorage.loggedin = true
				this.$router.push({ name: 'AdminIndex' })
			} else {
				if(localStorage.rname != this.name){
					this.errors.push('Username is wrong.')
				}
				if(localStorage.rpassword != this.password){
					this.errors.push('Password is wrong.')
				}
				localStorage.loggedin = false
			}
		},

		switchUI: function(view) {
			if(view == 'register') {
				this.showRegisterForm = true
			} else {
				this.showRegisterForm = false
			}
		}
	}
}
</script>

<style scoped>
form {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}

form input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

form input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.section {
	position: absolute;
	width: 100%;
}

.fade-enter-active, 
.fade-leave-active {
	transition: all .3s;
	margin-top: 0;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
	margin-top: 100px;
}
</style>