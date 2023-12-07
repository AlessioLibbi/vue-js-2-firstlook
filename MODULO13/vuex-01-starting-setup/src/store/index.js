import { createStore} from 'vuex'
import mutation from './mutation.js'
import action from './action.js'
import getters from './getters.js'
import counterModule from './counter/index.js'
const store = createStore({
    modules: {
        counter : counterModule,
    },
    state() {
        return  {
            
            isLoggedIn: false
        }
    },
    mutations:mutation,
    actions: action,
    getters: getters,
})

export default store;