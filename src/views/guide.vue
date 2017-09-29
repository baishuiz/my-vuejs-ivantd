<template>
    <div class="doc-content-wrapper" ref='doc'>
        <div class="doc-content-row">
            <div class="doc-content-aside">
                <!-- <ul>
                                    <li class="nav-item">
                                        <a>设计原则</a>
                                        <ul>
                                            <li class="nav-sub-item">
                                                <a class="active">引导清晰-易懂</a>
                                            </li>
                                            <li class="nav-sub-item">
                                                <a>流程简洁-易用</a>
                                            </li>
                                            <li class="nav-sub-item">
                                                <a>安全可控-可靠</a>
                                            </li>
                                            <li class="nav-sub-item">
                                                <a>科技金融-超越</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="at active">颜色</a>
                                    <li>
                                    <li class="nav-item">
                                        <a class="at">文字</a>
                                    <li>
                                    <li class="nav-item">
                                        <a class="at">图标</a>
                                    <li>
                                    <li class="nav-item">
                                        <a class="at">按钮</a>
                                    <li>
                                    <li class="nav-item">
                                        <a>行业组件</a>
                                        <div class="nav-group-title">金融</div>
                                        <ul>
                                            <li class="nav-sub-item">
                                                <a>设计规范</a>
                                            </li>
                                            <li class="nav-sub-item">
                                                <a class="active">颜色</a>
                                            </li>
                                        </ul>
                                        <div class="nav-group-title">医疗</div>
                                        <ul>
                                            <li class="nav-sub-item">
                                                <a>设计规范</a>
                                            </li>
                                            <li class="nav-sub-item">
                                                <a class="active">颜色</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul> -->
                <v-nav :data="menuData"></v-nav>
            </div>
            <div class="doc-content">
                <router-view keep-alive class="markdown"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        style: {},
        menuData: [{
            name: '设计原则',
            children: [{
                name: '引导清晰-易懂',
                link: {
                    path: 'easy'
                },
            }, {
                name: '流程简洁-易用',
                link: {
                    path: 'efficient'
                },
            }, {
                name: '安全可控-可靠',
                link: {
                    path: 'safety'
                },
            }, {
                name: '科技金融-超前',
                link: {
                    path: 'tech'
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
        }, {
            name: 'Button 按钮',
            link: {
                path: 'buttonDoc'
            },
        }, {
            name: '常用控件',
            link: {
                path: 'biz05'
            },
        }, {
            name: '组合样式',
            link: {
                path: 'biz06'
            },
        }, {
            name: '业务组合',
            link: {
                path: 'biz07'
            },
        }
        // , {
            // name: '业务组合',
            // groups: [{
            //     groupName: '基础',
            //     list: [{
            //         name: '常用控件',
            //         link: { path: 'biz05' },
            //     }, {
            //         name: '组合样式',
            //         link: { path: 'biz06' },
            //     }, {
            //         name: '业务组合',
            //         link: { path: 'biz07' },
            //     }],
            // }]
            // , {
            //     groupName: '生活',
            //     list: [{
            //         name: '购物',
            //         link: { path: 'button4' },
            //     }, {
            //         name: '运动',
            //         link: { path: 'icon55' },
            //     }],
            // }],
        // }
        ],
    }),
    mounted: function() {
        this.$nextTick(function() {
            // window.addEventListener('resize', this.handleScroll)
            // window.addEventListener('scroll', this.handleScroll)
        })
    },
    methods: {
        handleScroll() {

        }
    },

};
</script>

<style lang="less">

</style>
