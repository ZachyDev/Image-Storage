import Vue from 'vue';
import App from './App.vue';
import store from './store';
import AuthHandler from './components/AuthHandler';
import About from './components/About';
import Services from './components/Services';
import VueRouter from 'vue-router';

// connect vue with vue-router
Vue.use(VueRouter);

// create an instance of the vue
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/oauth2/callback',component: AuthHandler},
        { path: '/about',component: About },
        { path: '/services',component: Services }
    ]
});
new Vue({
    router,
    store,
     render: h => h(App)
}).$mount('#app');