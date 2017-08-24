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
    // import vMenu from '../components/menu'
    export default {
        data: () => ({
            menuData: [{
                name: '设计指引',
                children: [{
                    name: '简单清晰',
                    link: {
                        path: 'easy'
                    },
                }, {
                    name: '高效贴心',
                    link: {
                        path: 'efficient'
                    },
                }, {
                    name: '安全可控',
                    link: {
                        path: 'safety'
                    },
                }],
            }, {
                name: 'Color 色彩',
                link: {
                    path: 'color'
                },
            }, {
                name: 'Font 字体',
                link: {
                    path: 'font'
                },
            }, {
                name: 'Icon 图标',
                link: {
                    path: 'icon'
                },
            }
            // , {
            //     name: 'Components',
            //     children: [{
            //         name: 'Navigation 导航',
            //         link: {
            //             name: '/start'
            //         },
            //     }],
            // }, {
            //     name: '行业组件',
            //     children: [{
            //         name: '金融-房金融',
            //         link: {
            //             name: 'start'
            //         },
            //     }, {
            //         name: '金融-星渔贷',
            //         link: {
            //             name: 'start'
            //         },
            //     }],
            // }, {
            //     name: '其它',
            //     children: [{
            //         name: '如何贡献',
            //         link: {
            //             name: 'start'
            //         },
            //     }, {
            //         name: '如何Issue',
            //         link: {
            //             name: 'css'
            //         },
            //     }, {
            //         name: '关于',
            //         link: {
            //             name: 'polyfill'
            //         },
            //     }],
            // }
            ],
        }),
        // components:{
        //     vMenu
        // }
    };
</script>

<style lang="less">
    
</style>
