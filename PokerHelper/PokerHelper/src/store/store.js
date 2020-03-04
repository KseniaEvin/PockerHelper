import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sevenCards: [ { suit: 'Diamonds', rank: 10 },
        { suit: 'Hearts', rank: 12 },
        { suit: 'Hearts', rank: 11 },
        { suit: 'Hearts', rank: 14 },
        { suit: 'Clubs', rank: 13 },
        { suit: 'Hearts', rank: 14 },
        { suit: 'Spades', rank: 13 } ]
    },

    mutations: {}
})