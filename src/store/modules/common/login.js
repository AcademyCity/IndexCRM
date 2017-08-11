import {
  LOGIN,
  LOGOUT
} from '../../types'

const state = {
  token: null,
  vipCode: null
}

const actions = {
  ['setToken']({ commit }, content = ["", ""]) {
    commit(LOGIN, content)
  }
}

const mutations = {
  [LOGIN]: (state, data) => {
    console.log(data)
    state.token = data[0]
    state.vipCode = data[1]
  },
  [LOGOUT]: (state) => {
    state.token = null
    state.vipCode = null
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

