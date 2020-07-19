import api from '../../imgur/imgur';
import qs from 'qs';
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
    finalizeLogin({ commit }, hash) {
        const query= qs.parse(hash.replace('#',''));
        commit('setToken',query.access_token);
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