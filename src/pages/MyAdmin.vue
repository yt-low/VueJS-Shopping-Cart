<template>
	<div class="myadmin text-left">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="sidebar">
						<ul>
							<li>
								<router-link :to="{ name: 'AdminIndex' }">My Admin Page</router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-8">
					<!-- Outlet for children routes -->
    				<router-view></router-view>
				</div>
			</div>
		</div> 
	</div>
</template>

<script>
export default {
	name: 'myadmin',
}
</script>

<style>
.sidebar {
	background: #eee;
	border-radius: 5px;
	padding: 20px;
}

.sidebar ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}
</style>