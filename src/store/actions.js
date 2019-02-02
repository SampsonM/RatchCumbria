import axios from 'axios'
import * as MT from './mutationTypes'
import {getCompaniesUrl} from '../services'

export default {
  searchTrades: ({ commit, state }) => {

    commit(MT.SET_APP_LOADING, true)

    const {url} = getCompaniesUrl(state.searchParameters)

    axios.get(url)
      .then(companies => {
        console.log(url)
        commit(MT.SET_COMPANIES, companies.data)
      })
      .then(() => {
        commit(MT.SET_APP_LOADING, false)
      })
      .catch(err => {
        console.log('ERROR:', err)
      })
  },
  updateLocation: ({ commit }, payload) => {
    commit(MT.UPDATE_LOCATION, payload)
  },
  updateTrade: ({ commit }, payload) => {
    commit(MT.UPDATE_TRADE, payload)
  },
  updateCompanyName: ({ commit }, payload) => {
    commit(MT.UPDATE_COMPANY_NAME, payload)
  }
}
