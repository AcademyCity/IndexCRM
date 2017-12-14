import {
    LOGIN,
    LOGOUT
} from '../../types'

const state = {
    token: null,
    openId: null,
    vipCode: null
}

const actions = {
    ['setToken']({ commit }, content = ["", "", ""]) {
        commit(LOGIN, content)
    }
}

const mutations = {
    [LOGIN]: (state, data) => {
        state.token = data[0]
        state.openId = data[1]
        state.vipCode = data[2]
    },
    [LOGOUT]: (state) => {
        state.token = null
        state.openId = null
        state.vipCode = null
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}