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
}, {
    path: '/list',
    name: 'list',
    component: resolve => require(['./component/listDemo.vue'], resolve),
}, {
    path: '/progress',
    name: 'progress',
    component: resolve => require(['./component/progressDemo.vue'], resolve),
}, {
    path: '/activityIndicator',
    name: 'activityIndicator',
    component: resolve => require(['./component/activityIndicatorDemo.vue'], resolve),
}, {
    path: '/toast',
    name: 'toast',
    component: resolve => require(['./component/toastDemo.vue'], resolve),
}, {
    path: '/badge',
    name: 'badge',
    component: resolve => require(['./component/badgeDemo.vue'], resolve),
}, {
    path: '/card',
    name: 'card',
    component: resolve => require(['./component/cardDemo.vue'], resolve),
}, {
    path: '/modal',
    name: 'modal',
    component: resolve => require(['./component/modalDemo.vue'], resolve),
}, {
    path: '/checkbox',
    name: 'checkbox',
    component: resolve => require(['./component/checkboxDemo.vue'], resolve),
}, {
    path: '/loadingBar',
    name: 'loadingBar',
    component: resolve => require(['./component/loadingBarDemo.vue'], resolve),
}, {
    path: '/tabs',
    name: 'tabs',
    component: resolve => require(['./component/tabsDemo.vue'], resolve),
}, {
    path: '/tabbar',
    name: 'tabbar',
    component: resolve => require(['./component/tabBarDemo.vue'], resolve),
}, {
    path: '/imagePicker',
    name: 'imagePicker',
    component: resolve => require(['./component/imagePickerDemo.vue'], resolve),
}, {
    path: '/pickerView',
    name: 'pickerView',
    component: resolve => require(['./component/pickerViewDemo.vue'], resolve),
}, {
    path: '/popup',
    name: 'popup',
    component: resolve => require(['./component/popupDemo.vue'], resolve),
}];
