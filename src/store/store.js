import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import  axios  from 'axios';
Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    galleries:[
    ],
    tarifs: [],
    user: {},
  },
  getters,
  mutations,
  actions,
});
