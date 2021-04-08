import { createStore } from 'vuex'

export default createStore({
  state: {
    
    helpData:[],
    
  },
  mutations: {
    addHelpData(state,n){
      state.helpData = n
    }
  },
  actions: {
  },
  modules: {
  }
})
