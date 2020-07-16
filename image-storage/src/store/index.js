import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

// connect vue with vuex
Vue.use(Vuex);
// create an instance of the store object
export default new Vuex.Store({
    modules: {
        auth
    }
})