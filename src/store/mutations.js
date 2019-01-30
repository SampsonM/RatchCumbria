'use strict'
import * as MT from './mutationTypes.js'

// Edit the store state here
export default {
  [MT.SET_COMPANIES](state, companies) {
    state.companies = companies
  },
  [MT.SET_APP_LOADING](state, boolean) {
    state.appIsLoading = boolean
  },
  [MT.UPDATE_LOCATION](state, location) {
    state.userLocation = location
  },
  [MT.UPDATE_TRADE](state, trade) {
    state.userTrade = trade
  }
}
