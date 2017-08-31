import Vue from 'vue';
import VueRouter from 'vue-router';
import 'highlight.js/styles/solarized-light.css';
import App from './App';
import routerMap from './routers';
// import iVantd from '../packages';
// import '../package/style/ivantd.css';
// import iVantd from '../package/ivantd';
import components from './components';
// import locale from '../packages/locale/lang/en';
// import locale from '../packages/locale/lang/zh-CN';

Vue.use(VueRouter);
// Vue.use(iVantd, { locale });
Vue.use(components);

window.Vue = Vue;

Vue.config.productionTip = false;

window.router = new VueRouter({
    // mode: 'hash',
    mode: 'history',
    base: __dirname,
    routes: routerMap,
});

new Vue({
    el: '#app',
    router: window.router,
    render: h => h(App),
});
