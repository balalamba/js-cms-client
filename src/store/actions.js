import  axios  from 'axios';
import { mainconfig } from '../config/mainconfig.js'

export default {
  signin({ commit }, data) {
    return new Promise(function(resolve, reject){
      axios({
        method: 'POST',
        url: mainconfig.backendAddress + 'authenticate',
        data: {email: data.credentials.email, password: data.credentials.password},
      })
      .then(function (response) {
        const token = response.data.token;
        var user = parseJwt(response.data.token);
        commit('updateUserObject',{user,token});
        function parseJwt(token) {
			    //console.log("token" , token)
			    var base64Url = token.split('.')[1];
			    var base64 = base64Url.replace('-', '+').replace('_', '/');
			    return JSON.parse(window.atob(base64));
        }
        resolve();
      })
      .catch(function (error) {
        console.log(error);
      });
    })
  },
  signup({ dispatch }, data) {
    return new Promise(function(resolve, reject){
      console.log(data)
      axios({
        method: 'POST',
        url: mainconfig.backendAddress + 'user',
        data: {name: data.newUser.username, email: data.newUser.email, password: data.newUser.password},
      })
      .then(function (response) {
        dispatch('signin',{ credentials: data.newUser })
        resolve();
      })
      .catch(function (error) {
        console.log(error);
      });
    })
  },
  logOut({ commit }) {
    commit('updateUserObject');
  },


}
