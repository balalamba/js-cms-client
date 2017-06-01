<template>
<md-layout md-flex="100" md-align="center">
		<md-layout md-flex="100" md-align="center">
				<h1>Admin Panel - Users</h1>
			</md-layout>
		<md-layout md-flex="50">
			
		
			<md-list class="custom-list md-triple-line">
				<md-list-item v-for="user in users" :key="user.id">
					<md-avatar>
						<img src="https://placeimg.com/40/40/people/1" alt="People">
					</md-avatar>

					<div class="md-list-text-container">
						<span>{{user.name}}</span>
						<span>{{user.email}}</span>
						<p>{{user.created_at}}</p>
					</div>

					<md-button class="md-icon-button md-list-action">
						<md-icon class="md-primary">star</md-icon>
					</md-button>

					<md-divider class="md-inset"></md-divider>
				</md-list-item>
			</md-list>
		</md-layout>
	</md-layout>


</template>
<script>
	import { mainconfig } from '../../config/mainconfig.js'
	export default {
		data(){
			return{
				users: {},
				user:{},
			}
		},
		created: function(){
			this.getUsers();
		},
		methods: {
			getUsers(){},
			logout(){},
			getUsers(){
				var _this = this;
				return new Promise(function(resolve, reject){

					axios({
						method: 'GET',
						url: mainconfig.backendAddress + 'admin/users' + '?token=' + localStorage.getItem('token')
					})
					.then(function (response) {
						_this.users = response.data.users;
						console.log(_this.users)
						resolve();
					})
					.catch(function (error) {
						console.log(error);
					});
				})
			},
		}
	}
</script>
<style></style>