export default {
  //   finishWedding(state, argument){
  //     this.$store.state...
  //   }
  // checkUserObject(state){
  //   //
  // 	var newvalue = JSON.parse(localStorage.getItem('user'));
  // 	if(newvalue === null) state.user = {}
  // 		else state.user = newvalue;
  // },

  checkUserObject(state){
    return localStorage.getItem('user');
  },

  //очищаем или заполняем state , localstorage в зависимости от случая
  updateUserObject(state,payload){
    console.log(payload)
  	if(payload === undefined || payload === null){
      console.log("clear LStorage & state.user")
  		localStorage.clear();
  		state.user = {};
  	}
  	else {
      console.log("User is fullfil")
  		localStorage.setItem('user',JSON.stringify(payload));
    	state.user = payload;
  	}
    return state.user;
  }
}
