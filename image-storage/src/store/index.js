import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

// connect vue and vuex

Vue.use(Vuex);

// create an instance of Vuex object
export default new Vuex.Store({
    modules: {
        auth
    }
});