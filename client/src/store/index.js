import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CreateRoom : false,

  },
  mutations: {
    TurnOnCreateRoom(state){
      state.CreateRoom = true
    },
    TurnOffCreateRoom(state){
      state.CreateRoom = false
    }
  },
  actions: {
    TurnOnCreateRoom(context){
    context.commit('TurnOnCreateRoom')
    },
    TurnOffCreateRoom(context){
      context.commit('TurnOffCreateRoom')
    }
  },
  modules: {
  }
})
