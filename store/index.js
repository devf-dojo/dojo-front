import Vuex from 'vuex'
import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {
        token: '',
        id: '',
        name: '',
        email: '',
        avatar: '',
        auth: false
      }
    },
    mutations
  })
}

export default createStore
