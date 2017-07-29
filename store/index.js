import Vuex from 'vuex'
import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: '',
      id: '',
      name: '',
      email: ''
    },
    mutations
  })
}

export default createStore