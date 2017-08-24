export default [{
    path: '/',
    name: 'demo',
    component: resolve => require(['./component/indexDemo.vue'], resolve),
}, {
    path: '/flex',
    name: 'flex',
    component: resolve => require(['./component/flexDemo.vue'], resolve),
}, {
    path: '/whiteSpace',
    name: 'whiteSpace',
    component: resolve => require(['./component/whiteSpaceDemo.vue'], resolve),
}, {
    path: '/wingBlank',
    name: 'wingBlank',
    component: resolve => require(['./component/wingBlankDemo.vue'], resolve),
}, {
    path: '/button',
    name: 'button',
    component: resolve => require(['./component/buttonDemo.vue'], resolve),
}, {
    path: '/grid',
    name: 'grid',
    component: resolve => require(['./component/gridDemo.vue'], resolve),
}, {
    path: '/icon',
    name: 'icon',
    component: resolve => require(['./component/iconDemo.vue'], resolve),
}];
