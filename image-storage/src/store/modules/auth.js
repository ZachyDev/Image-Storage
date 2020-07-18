import api from '../../imgur/imgur';
// state object
const state = {
    token: null
};

// getters object
const getters = {
    isLoggedIn: state => !!state.token
};

// actions object
const actions = {
    login: () => {
        api.loginUser();
    },
    logout: ({ commit }) => {
        commit('setToken',null);
    }
};

// mutations object
const mutations = {
    setToken: (state,token) => {
        state.token = token;
    }
}

export default { state,getters,actions,mutations };