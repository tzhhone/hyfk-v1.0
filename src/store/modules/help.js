export default {
    namespaced:true,
    state: {

        helpData: [],

    },
    mutations: {
        addHelpData(state, n) {
            state.helpData = n
        }
    },
    actions: {
    },
    modules: {
    }
}