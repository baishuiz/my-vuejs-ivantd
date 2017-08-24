<template lang="html">
    <div class="main-wrapper page-container">
        <div class="ant-row">
            <div class="aside-container ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-4">
                <v-menu mode="inline" :data="menuData" :expand="true">
                    <template scope="{data}">
                            <a v-if="data.href" :href="data.href" style="display:inline" :target="data.target">{{data.name}}</a>
                            <router-link v-else :to="data.link" style="display:inline" :target="data.target">{{data.name}}</router-link>
</template>
                </v-menu>
            </div>
            <div class="main-container ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-20">
                <router-view keep-alive class="markdown"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            menuData: [{
                name: '开发指南',
                children: [{
                    name: '起步',
                    link: {
                        name: 'start'
                    },
                }, {
                    name: '全局CSS样式',
                    link: {
                        name: 'css'
                    },
                }, {
                    name: 'Polyfill',
                    link: {
                        name: 'polyfill'
                    },
                }, {
                    name: '参与贡献',
                    link: {
                        name: 'contribute'
                    },
                }],
            }, {
                name: '更新日志',
                href: 'https://github.com/FE-Driver/vantd/releases',
                target: '_blank',
            }, {
                name: 'Components',
                groups: [{
                    groupName: 'General',
                    list: [{
                        name: 'Button 按钮',
                        link: {
                            name: 'button'
                        },
                    }, {
                        name: 'Icon 图标',
                        link: {
                            name: 'icon'
                        },
                    }],
                }, {
                    groupName: 'Layout',
                    list: [{
                        name: 'Grid 栅格',
                        link: {
                            name: 'grid'
                        },
                    }, {
                        name: 'Layout 布局',
                        link: {
                            name: 'layout'
                        },
                    }, {
                        name: 'MorePanel 更多条件',
                        link: {
                            name: 'morePanel'
                        },
                    }],
                }],
            }],
        }),
    };
</script>

<style lang="less">
    
</style>
