import {
  LOGIN,
  LOGOUT
} from '../../types'

const state = {
  token: null
}

const actions = {
  ['setToken'] ({ commit }, content = '') {
    commit(LOGIN, content)
  }
}

const mutations = {
  [LOGIN]: (state, data) => {
    state.token = data;
    console.log(state.token);
  },
  [LOGOUT]: (state) => {
    state.token = null
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

