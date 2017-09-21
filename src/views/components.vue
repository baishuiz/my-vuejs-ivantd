<template>
    <div class="doc-content-wrapper" ref='doc'>
        <div class="doc-content-row">
            <div class="doc-content-aside">
                <v-nav :data="menuData"></v-nav>
            </div>
            <div class="doc-content">
                <router-view keep-alive class="markdown"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import v from '../../package.json'
    export default {
        data: () => ({
            menuData: [{
                name: '开发指南',
                children: [{
                    name: '起步',
                    link: {
                        path: 'start'
                    },
                }, {
                    name: '快速上手',
                    link: {
                        path: 'css'
                    },
                }, {
                    name: '国际化',
                    link: {
                        path: 'polyfill'
                    },
                }, {
                    name: '组件预览',
                    link: {
                        path: 'contribute'
                    },
                }, {
                    name: '参与贡献',
                    link: {
                        path: 'contribute'
                    },
                }],
            }, {
                name: '更新日志',
                href: 'https://github.com/ruyangit/ivantd/releases',
                update: true,
                version: v.version
            }, {
                name: '组件',
                groups: [{
                    groupName: '布局 Layout',
                    list: [{
                        name: 'Layout 基础布局',
                        link: {
                            path: 'layout'
                        },
                    },{
                        name: 'WhiteSpace 上下留白',
                        link: {
                            path: 'whiteSpace'
                        },
                    },{
                        name: 'WingBlank 两翼留白',
                        link: {
                            path: 'wingBlank'
                        },
                    }],
                }, {
                    groupName: '导航 Navigation',
                    list: [{
                        name: 'TabBar 标签栏',
                        link: {
                            path: 'tabbar'
                        },
                    }],
                }, {
                    groupName: '数据录入 Data Entry',
                    list: [{
                        name: 'Button 按钮',
                        link: {
                            path: 'button'
                        },
                    }],
                }, {
                    groupName: '数据展示 Data Display',
                    list: [{
                        name: 'Badge 微标数',
                        link: {
                            path: 'badge'
                        },
                    },{
                        name: 'Grid 宫格',
                        link: {
                            path: 'grid'
                        },
                    },{
                        name: 'Icon 图标',
                        link: {
                            path: 'icon'
                        },
                    },{
                        name: 'List 列表',
                        link: {
                            path: 'list'
                        },
                    },{
                        name: 'Card 卡片',
                        link: {
                            path: 'card'
                        },
                    }],
                }, {
                    groupName: '操作反馈 Feedback',
                    list: [{
                        name: 'Progress 进度条',
                        link: {
                            path: 'progress'
                        },
                    },{
                        name: 'ActivityIndicator 活动指示器',
                        link: {
                            path: 'activityIndicator'
                        },
                    },{
                        name: 'Toast 轻提示',
                        link: {
                            path: 'toast'
                        },
                    }],
                }],
            }],
        }),
    };
</script>

<style lang="less">
    
</style>
