import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler';
// connect vue with vue-router
Vue.use(VueRouter);
// create an instance of a  vue object
const router = new VueRouter({
    mode: 'history',
    routes: [
        // oauth2/callback route
        { path: '/oauth2/callback',component: AuthHandler}
    ]
})
new Vue({
    router,
    store,
     render: h => h(App)
}).$mount('#app');