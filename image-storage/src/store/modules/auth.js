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
    logout: ({ commit }) => {
        commit('setToken',null);
    }
};

// mutatations object
const mutatations = {
    setToken: (state,token) => {
        state.token = token;
    }
};