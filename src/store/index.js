import Vue from 'vue'
import Vuex from 'vuex'
import commonLoading from './modules/common/loading'
import hearerHead from './modules/header/head'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common: {
      namespaced: true,
      modules: {
        loading: commonLoading
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
