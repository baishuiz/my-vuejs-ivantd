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
                <ul>
                    <li class="nav-item" v-for="(item,index) in menuData" :key="index">
                        <router-link :to="item.link.path" v-if="item.link" :class="['at',{'active':$route.path==item.link.path}]">{{item.name}}</router-link>
                        <a class="at" v-else-if="item.href" target="_blank">{{item.name}}</a>
                        <a v-else>{{item.name}}</a>
                        <template v-if="item.children">
                            <ul>
                                <li class="nav-sub-item" v-for="(child,c) in item.children" :key="c">
                                    <router-link :to="child.link.path">{{child.name}}</router-link>
                                </li>
                            </ul>
                        </template>
                        <template v-if="item.groups">
                            <div v-for="(group,g) in item.groups" :key="g">
                                <div class="nav-group-title">{{group.groupName}}</div>
                                <ul>
                                    <li class="nav-sub-item" v-for="(child,c) in group.list" :key="c">
                                        <router-link :to="child.link.path">{{child.name}}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </li>
                </ul>
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
                name: '科技金融-超越',
                link: {
                    path: 'safety1'
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
            name: '业务组合',
            groups: [{
                groupName: '金融',
                list: [{
                    name: '保险类',
                    link: { path: 'button1' },
                }, {
                    name: '理财类',
                    link: { path: 'icon2' },
                }, {
                    name: '征信类',
                    link: { path: 'icon3' },
                }],
            }, {
                groupName: '生活',
                list: [{
                    name: '购物',
                    link: { path: 'button4' },
                }, {
                    name: '运动',
                    link: { path: 'icon55' },
                }],
            }],
        }],
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
