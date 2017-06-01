import { mainconfig } from '../config/mainconfig.js'

export default {
  getGalleries: function(state){
    return state.galleries;
  },
  getTarifs: function(state){
    return state.tarifs;
  },
  getUser: function(){
  	return state.user;
  },
  checkRoles: function(state){
      function hasaRole(role) {
        return state.user.role == role;
      }
      return mainconfig.WhoHasAccesstoPanel.some(hasaRole)
  },
}
