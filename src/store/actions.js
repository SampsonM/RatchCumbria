import axios from 'axios'
import * as MT from './mutationTypes'
import getUrl from '../services'

export default {
  searchTrades: ({ commit }) => {
    commit(MT.SET_APP_LOADING, true)

    const url = getUrl(payload);

    axios.get(url)
      .then(companies => {
        commit(MT.SET_COMPANIES, companies.data)
      })
      .then(() => {
        commit(MT.SET_APP_LOADING, false)
      })
  },
  updateLocation: ({ commit }, payload) => {
    commit(MT.UPDATE_LOCATION, payload)
  },
  updateTrade: ({ commit }, payload) => {
    commit(MT.UPDATE_TRADE, payload)
  }
}
