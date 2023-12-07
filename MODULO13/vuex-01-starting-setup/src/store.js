import { createStore} from 'vuex'



const counterModule = {
    namespaced: true,
    state() {
        return{
            counter: 0,
        }
       
    },
    mutations: { addOne(state) {
        state.counter = state.counter + 2
    },
    increase(state,payload) {
        state.counter = state.counter + payload.value;
    },},
    actions: { addOne(context) {
        setTimeout(() => {
            context.commit('addOne');
        },2000)
       
    },
    increase(context,payload) {
        context.commit('increase', payload)
    },},
    getters: { finalCounter(state) {
        return state.counter * 2;
    },
    normalizeCounter(state, getters) {
        const finalCounter = getters.finalCounter;
        if(finalCounter < 0) {
            return 0;
        }
        if(finalCounter > 100) {
            return 100
        }
        return finalCounter
    },},
}




const store = createStore({
    modules: {
        counter : counterModule,
    },
    state() {
        return  {
            
            isLoggedIn: false
        }
    },
    mutations: {
       
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {
       
        login(context) {
            context.commit('setAuth', {isAuth: true})
        },
        logout(context) {
            context.commit('setAuth', {isAuth: false})
        }
    },
    getters: {
       
        userIsAuth(state) {
            return state.isLoggedIn
        }
    }
})

export default store;