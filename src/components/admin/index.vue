<template>
<div>
	<md-toolbar md-theme="admin">
        <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>

	  <h2 class="md-title" style="flex: 1">Admin panel</h2>

	  <router-link :to="{ name: 'Home' }"><md-button class="md-raised">Home</md-button></router-link>
	  <md-button class="md-raised md-warn" @click.native="logOut()" >Logout</md-button>
	</md-toolbar>
	      <md-sidenav md-theme="admin" class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
        <md-toolbar class="md-large">
          <div class="md-toolbar-container">
            <h3 class="md-title">My Site</h3>
          </div>
        </md-toolbar>
        <md-list>
          <router-link :to="{ name: 'AdminUsers' }">
            <md-list-item>
              <md-icon>home</md-icon> <span>Users</span>
            </md-list-item>
            </router-link>
            <router-link :to="{ name: 'AdminBlog' }">
                <md-list-item>
                  <md-icon>edit</md-icon> <span>Blog</span>
                </md-list-item>
            </router-link>
<!--             <router-link :to="{ name: 'Portfolio' }">
                <md-list-item>
                  <md-icon>done all</md-icon> <span>Portfolio</span>
                </md-list-item>
            </router-link> -->
        </md-list>
      </md-sidenav>
	<h1>Admin Panel</h1>
    <router-view></router-view>
</div>

</template>
<script>
import { mainconfig } from '../../config/mainconfig.js'

export default {
	data(){
		return{
			users: {},
			user:{},
			blog: {},
		}
	},
	methods: {
	toggleLeftSidenav() {
		this.$refs.leftSidenav.toggle();
	},
	toggleRightSidenav() {
		this.$refs.rightSidenav.toggle();
	},
	closeRightSidenav() {
		this.$refs.rightSidenav.close();
	},
	open(ref) {
		console.log('Opened: ' + ref);
	},
	close(ref) {
		console.log('Closed: ' + ref);
	},
	getBlog(){},

	logOut(){
      this.user = {};
      this.$store.dispatch('logOut');
      this.$router.push('/');
    },
	}
}
</script>
<style></style>