// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import { store } from './store/store'
//console.log(router)
window.axios = require('axios');
//Vue.prototype.$http = axios;
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VueMaterial)

Vue.material.registerTheme({
  app: {
    primary: 'deep-purple'
  },
  admin: {
    primary: 'orange'
  }
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  	el: '#app',
  	store,
  	router,
  	template: '<App/>',
    created: function () {
      if(localStorage.getItem('user') == "undefined" || !localStorage.getItem('user')){
        console.log("user is empty")
        store.state.user = {};
      }
     else {
      console.log("user is not empty")
      store.state.user = JSON.parse(localStorage.getItem('user'));
     } 
    },
  	components: { App }
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth) {
    if (store.getters.checkRoles) {
      next()
    }
    else {
      next({ path: '/login'})
    }
  }else {
    next()
  }

})
