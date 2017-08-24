export default [
    {
        path: '/',
        name: 'index',
        component: resolve => require(['./views/index.vue'], resolve),
    }, {
        path: '/demo',
        name: 'demo',
        redirect: '/',
    }, {
        path: '/guide',
        name: 'guide',
        component: resolve => require(['./views/guide.vue'], resolve),
        children: [
            {
                path: 'easy',
                name: 'easy',
                component: resolve => require(['./docs/zh-cn/easy.md'], resolve),
            }, {
                path: 'efficient',
                name: 'efficient',
                component: resolve => require(['./docs/zh-cn/efficient.md'], resolve),
            }, {
                path: 'safety',
                name: 'safety',
                component: resolve => require(['./docs/zh-cn/safety.md'], resolve),
            }, {
                path: 'color',
                name: 'color',
                component: resolve => require(['./docs/zh-cn/start.md'], resolve),
            }, {
                path: 'font',
                name: 'font',
                component: resolve => require(['./docs/zh-cn/start.md'], resolve),
            }, {
                path: 'icon',
                name: 'icon',
                component: resolve => require(['./docs/zh-cn/start.md'], resolve),
            },
        ],
    }, {
        path: '/components',
        name: 'components',
        component: resolve => require(['./views/components.vue'], resolve),
        children: [{
            path: 'start',
            name: 'start',
            component: resolve => require(['./docs/zh-cn/start.md'], resolve),
        }, {
            path: 'button',
            name: 'button',
            component: resolve => require(['./docs/zh-cn/button.md'], resolve),
        }],
    }];
