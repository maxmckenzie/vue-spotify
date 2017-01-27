import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  sound: null,
  history: []
}

const store = new Vuex.Store({
  state
  // getters,
  // actions,
  // mutations
})

if (module.hot) {
  module.hot.accept([
    // './getters',
    // './actions',
    // './mutations'
  ], () => {
    store.hotUpdate({
      // getters: require('./getters'),
      // actions: require('./actions'),
      // mutations: require('./mutations')
    })
  })
}

export default store
