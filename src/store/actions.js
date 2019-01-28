import axios from 'axios'
import * as MT from './mutationTypes'
import getUrl from '../services'

export default {
  getCompanies: ({ commit }, payload) => {
    commit(MT.SET_APP_LOADING, true)

    const url = getUrl(payload);

    axios.get(url)
      .then(companies => {
        commit(MT.SET_COMPANIES, companies.data)
      })
      .then(() => {
        commit(MT.SET_APP_LOADING, false)
      })
  }
}
