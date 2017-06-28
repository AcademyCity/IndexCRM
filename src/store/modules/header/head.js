import {
  HEAD_SET
} from '../../types'

const state = {
	content: ''
}

const actions = {
  ['setHead'] ({ commit }, content = '') {
    commit(HEAD_SET, content)
  }
}

const mutations = {
  [HEAD_SET](state, data) {
    state.content = data
  }
}

const getters = {
  headContent: (state, getters) => {
    return state.content
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
