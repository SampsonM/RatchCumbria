import axios from 'axios'
import * as MT from './mutationTypes'

export default {
  getCompanies: ({commit}) => {

    commit(MT.SET_APP_LOADING, true)

    axios.get('https://localhost:3000/api/companies')
      .then(companies => {
        commit(MT.SET_COMPANIES, companies.data)
      })
      .then(() => {
        commit(MT.SET_APP_LOADING, false)
      })
  }
}
