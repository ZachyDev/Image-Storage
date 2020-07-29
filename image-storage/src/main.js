import Vue from 'vue';
import App from './App';
import store from './store';
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler';
import About from './components/About';
import Services from './components/Services';

// connect vue with vue-router
Vue.use(VueRouter);

// create an instance of vue-router
const router  = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/oauth2/callback',component: AuthHandler },
        { path: '/about',component: About },
        { path: '/services',component: Services }
    ]
});
// vue instance
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');