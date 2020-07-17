import Vue from 'vue';
import App from './App.vue';
import store from './store';

// create an instance of a  vue object
new Vue({
    store,
    render: h => h(App)
}).$mount('#app');