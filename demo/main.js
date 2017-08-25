import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routerMap from './routers';
import iVantd from '../packages';
// import locale from '../packages/locale/lang/zh-CN';
import './static/common.css';

Vue.use(VueRouter);
Vue.use(iVantd);

window.Vue = Vue;

Vue.config.productionTip = false;

window.router = new VueRouter({
    mode: 'hash',
    // mode: 'history',
    base: __dirname,
    routes: routerMap,
});

new Vue({
    el: '#app',
    router: window.router,
    render: h => h(App),
});
