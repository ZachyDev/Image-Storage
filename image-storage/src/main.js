import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler';
import About from './components/About';
// connect vue with vue-router
Vue.use(VueRouter);
// create a new instance of vue router object

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/oauth2/callback',component: AuthHandler },
        { path: '/about',component: About }
    ]
})
new Vue({
    router,
    store,
     render: h => h(App)
}).$mount('#app');