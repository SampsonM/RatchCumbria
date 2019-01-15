import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    ...state
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
})
