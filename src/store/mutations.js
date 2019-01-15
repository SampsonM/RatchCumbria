'use strict'
import * as MT from './mutationTypes.js'

// Edit the store state here
export default {
  [MT.SET_COMPANIES](state, companies) {
    state.companies = companies
  },
  [MT.SET_APP_LOADING](state, boolean) {
    state.appIsLoading = boolean
  }
}
