import Vue from 'vue'
import Vuex from 'vuex'
import types from './types'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    package: window.localStorage.getItem('package') || '',
  },
  mutations: {
    [types.GET_PACKAGE](state) {
      axios.get('http://localhost:8000/api/packet').then((response) => {
          localStorage.setItem('package', JSON.stringify(response.data))
      })
    }
  },
  actions: {
    [types.GET_PACKAGE](context) {
      context.commit(types.GET_PACKAGE)
    }
  },
  modules: {
  }
})
