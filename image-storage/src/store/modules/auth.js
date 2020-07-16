// import the imgur helper file
import api from '../../api/imgur';
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
        api.login();
    },
    logout: ({ commit }) => {
        commit('setToken',null);
    }
};

// mutatations object
const mutations = {
    setToken: (state,token) => {
        state.token = token;
    }
};
export default { 
    state,
    getters,
    actions,
    mutations
 }