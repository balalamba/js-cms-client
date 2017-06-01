<template>
  <div class="hello">
    <div class="phone-viewport">
      <md-toolbar md-theme="app" >
        <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title" >My App</h2>
        <md-layout  v-if="!user.name" md-align="end" >
          <md-layout md-flex="30" :md-gutter="16">
            <md-layout >
              <md-input-container >
                <label>{{form.elabel}}</label>
                <md-input v-model="credentials.email"></md-input>
              </md-input-container>
            </md-layout>
            <md-layout>
              <md-input-container  >
                <label>{{form.plabel}}</label>
                <md-input v-model="credentials.password" ></md-input>
              </md-input-container>
            </md-layout>
          </md-layout>
        </md-layout>
        
        <md-button  v-if="!user.name" class="md-icon-button" @click.native="signin()"><md-icon>done</md-icon></md-button> 
        <md-layout v-if="user.name" md-align="end" >
          <router-link v-if="$store.getters.checkRoles" :to="{ name: 'Admin' }"><md-button class="md-icon-button md-accent"><md-icon >lock outline</md-icon></md-button></router-link>
          <md-button class="md-icon-button" @click.native="logOut()"><md-icon>input</md-icon></md-button>
        </md-layout>

      </md-toolbar>
      <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
        <md-toolbar class="md-large">
          <div class="md-toolbar-container">
            <h3 class="md-title">My Site</h3>
          </div>
        </md-toolbar>
        <md-list>
          <router-link :to="{ name: 'Home' }">
            <md-list-item>
              <md-icon>home</md-icon> <span>Home</span>
            </md-list-item>
          </router-link>
          <router-link :to="{ name: 'Blog' }">
            <md-list-item>
              <md-icon>edit</md-icon> <span>Blog</span>
            </md-list-item>
          </router-link>
          <router-link :to="{ name: 'Portfolio' }">
            <md-list-item>
              <md-icon>done all</md-icon> <span>Portfolio</span>
            </md-list-item>
          </router-link>
        </md-list>
      </md-sidenav>
    </div>
    <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeInRight">
    <router-view></router-view>
  </transition>

  <h2>Footer</h2>
  <ul>
    <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
    <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
    <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
    <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
  </ul>
</div>
</template>

<script>
//import  axios  from 'axios';
import { mainconfig } from '../config/mainconfig.js'
export default {
  name: 'hello',
  // props: {
  //     theme: {
  //       type: String,
  //       default: 'app'
  //     }
  //   },
  data () {
    return {
      // user: {},
      theme: "app",
      page: "Homepage",
      form:{elabel:"email",plabel:"password"},
      credentials: {
        email: 'oleg@popovskiy.com',
        password: '1553991'
      },
    }
  },
  computed: {
    user () {
      console.log('computed user', this.$store.state.user)
      return this.$store.state.user
    }
  },
  // created: function () {
  //   this.user = JSON.parse(this.getUser());
  // },
  // computed:{
  //   user: function(){
  //     return localStorage.getItem('user') 
  //   }
  // },
  methods: {
    signin() {
      this.$store.dispatch('signin',{ credentials: this.credentials })
      .then((response) => {
        console.log(this.user);
        this.$router.push('/')
      })
    },
    // getUser(){
    //   if (typeof localStorage.getItem('user') === 'undefined'){
    //     return ({})
    //   }
    //   else return localStorage.getItem('user');
    
    // },

    getdataUser(){
      console.log('this.user', this.user);
      console.log('this.$store.user', this.$store.state.user);
      console.log('localStorage.getItem(user)', typeof localStorage.getItem('user'))
    },
    logOut(){
      this.user = {};
      this.$store.dispatch('logOut');
      this.$router.push('/')
    },
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
    

  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
