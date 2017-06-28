import {
  LOADING_SHOW,
  LOADING_HIDE
} from '../../types'

const state = {
	content: ''
}

const actions = {
  ['showLoading'] ({ commit }, content = '正在加载') {
    commit(LOADING_SHOW, content)
  },
  ['hideLoading'] ({ commit }) {
    commit(LOADING_HIDE)
  }
}

const mutations = {
  [LOADING_SHOW](state, data) {
    // console.log(state.content+"s");
    state.content = data
  },
  [LOADING_HIDE](state, data) {
    // console.log(state.content+"h");
    state.content = ''
  }
}

const getters = {
  loadContent: (state, getters) => {
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
