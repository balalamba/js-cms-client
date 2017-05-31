import  axios  from 'axios';
export default {
  signin({ commit }, data) {
    return new Promise(function(resolve, reject){
      axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/user/signin',
        data: {email: data.credentials.email, password: data.credentials.password},
      })
      .then(function (response) {
        var user = parseJwt(response.data.token);
        commit('updateUserObject',user);
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
        url: 'http://127.0.0.1:8000/api/user',
        data: {name: data.newUser.username, email: data.newUser.email, password: data.newUser.password},
      })
      .then(function (response) {
        console.log(response)
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
