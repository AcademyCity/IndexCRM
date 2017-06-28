import Vue from 'vue'
import Vuex from 'vuex'
import commonLoading from './modules/common/loading'
import commonLogin from './modules/common/login'
import hearerHead from './modules/header/head'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common: {
      namespaced: true,
      modules: {
        loading: commonLoading,
        login: commonLogin
      }
    },
    header: {
      namespaced: true,
      modules: {
        head: hearerHead
      }
    }
  }
})
