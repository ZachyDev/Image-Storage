import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler';
// connect vue with vue-router
Vue.use(VueRouter);
// create a vue-router instance
const router = new VueRouter({
    routes: [
        { path: 'oauth2/callback',component: AuthHandler },
    ]
})
// create an instance of a  vue object
new Vue({
    router,
    store,
     render: h => h(App)
}).$mount('#app');