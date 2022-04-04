export default {
    namespaced: true,
    state: {
      id: undefined,
    },
    mutations: {
      setId (state, id) {
        state.id = id
      },
    }
  }
  