import Vue from 'vue';
import App from './App';
import store from './store';

// create a vue instance
new Vue({
    store,
    render: h => h(App)
}).$mount("#app")