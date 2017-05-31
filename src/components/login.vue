<template lang="html">
  <div class="container">
<!--       <form @submit.prevent="submit">
            <h2>Log In</h2>
            <p>Log in to your account.</p>
            <div class="alert alert-danger" v-if="error">
              <p>{{ error }}</p>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your email"
                v-model="credentials.email"
              >
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Enter your password"
                v-model="credentials.password"
              >
            </div>
            <button class="btn btn-primary" type="submit">Login</button>
            </form>
 -->
       <md-layout md-align="center" md-gutter="16">
          <md-layout md-flex="25">
          <h1>Register forme</h1>
            <md-layout md-flex="100">
              <md-input-container >
                <label>Donnez votre nom</label>
                <md-input v-model="newUser.username"></md-input>
              </md-input-container>
            </md-layout>
            <md-layout md-flex="100">
              <md-input-container  >
                <label>Votre email</label>
                <md-input v-model="newUser.email"></md-input>
              </md-input-container>
            </md-layout>
            <md-layout md-flex="100">
              <md-input-container  >
                <label>Et enfin le mot de passe</label>
                <md-input  type="password" v-model="newUser.password"></md-input>
              </md-input-container>
            </md-layout>
            <md-layout md-flex="15">
              <md-button class="md-icon-button md-raised md-primary" @click.native="signup()">
                <md-icon>done</md-icon>
              </md-button> 
            </md-layout>
          </md-layout>

          <md-layout md-flex="25">
          <h1>Login forme</h1>
            <md-layout md-flex="100">
              <md-input-container >
                <label>{{credentials.email}}</label>
                <md-input v-model="credentials.email"></md-input>
              </md-input-container>
            </md-layout>
            <md-layout md-flex="100">
              <md-input-container type="password" >
                <label>{{credentials.password}}</label>
                <md-input type="password" v-model="credentials.password"></md-input>
              </md-input-container>

            </md-layout>
            <md-layout md-flex="15">
              <md-button class="md-icon-button md-raised md-primary" @click.native="signin()">
                <md-icon>done</md-icon>
              </md-button> 
            </md-layout>
          </md-layout>
        
      </md-layout>
  </div>
</template>

<script>
export default {
    data() {
      return {
        credentials: {
          email: 'oleg@popovskiy.com',
          password: '1553991'
        },
        newUser: {
          username: '',
          email: '',
          password: ''
        },
        error: ''
      }
    },
    created: function () {
      //this.user = JSON.parse(this.getUser());
    },
    computed: {
      user () {
        return this.$store.state.user
      }
    },
    methods: {
      signin() {
        this.$store.dispatch('signin',{ credentials: this.credentials })
        .then((response) => {
            console.log(this.user);
            this.$router.push('/')
          })
        },
      signup() {
        this.$store.dispatch('signup',{ newUser: this.newUser })
        .then((response) => {
            console.log(this.user);
            this.$router.push('/')
          })
        },
      getUser(){
        //console.log(this.$store.user);
        return localStorage.getItem('user');
      },
      getlUser(){
        console.log(JSON.parse(localStorage.getItem('user')))
      },
      getdataUser(){
        console.log('this.$store.user',this.$store.user);
        console.log('localStorage.getItem(user)',localStorage.getItem('user'))
      },
      logOut(){
        this.user = {};
        this.$store.dispatch('logOut');
      },
    },
    beforeMount(){
//
    },

  }
</script>

<style lang="css">
</style>
