const state = {
  action: 1
}

const mutations = {
  SET_ACTION: (state, action) => {
    state.action = action
  }
}

export default {
    namespaced: true,
    state,
    mutations
  }
