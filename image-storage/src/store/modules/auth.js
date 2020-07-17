import api from '../../api/imgur';
// state object
const state = {
    token: null
}

// getter object
const getter = {
   isLoggedIn: state => !!state.token
};

// actions object
const actions = {
    login: () => {
        api.login()
    },
    logout: ({ commit }) => {
        commit('setToken',null)
    }
};

// mutations object
const mutations = {
    setToken: (state,token) => {
        state.token = token
    }
};

export default { state,actions,getter,mutations };