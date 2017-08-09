const mutations = {
  saveUserData (state, user) {
    state.user.token = user.token
    state.user.id = user.id
    state.user.email = user.email
    state.user.avatar = user.avatar
    state.user.auth = true
  }
}

export default mutations
