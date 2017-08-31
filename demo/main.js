import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routerMap from './routers';
import iVantd from '../packages';
// import locale from '../packages/locale/lang/zh-CN';

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

window.router.beforeEach((to, from, next) => {
    // console.log(from);
    Vue.$progress.start();
    next();
});

window.router.afterEach(() => {
    // console.log(to);
    Vue.$progress.finish();
});

new Vue({
    el: '#app',
    router: window.router,
    render: h => h(App),
});
