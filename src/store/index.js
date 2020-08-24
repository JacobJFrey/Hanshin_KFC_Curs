import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    standings: [
        {year: '1987', percent: '.331', rank: '12/12'},
        {year: '1988', percent: '.398', rank: '12/12'},
        {year: '1989', percent: '.419', rank: '10/12'},
        {year: '2001', percent: '.416', rank: '12/12'}
      ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
