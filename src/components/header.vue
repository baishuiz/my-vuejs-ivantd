<template>
    <header id="header" class="clearfix">
        <div class="ant-row">
            <div class="ant-col-xs-24 ant-col-sm-7 ant-col-md-6 ant-col-lg-5">
                <a id="logo" href="javascript:;">
                    <img alt="logo" src="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png">
                    <span>ivantd mobile</span>
                </a>
            </div>
            <div class="nav  ant-col-xs-0 ant-col-sm-17 ant-col-md-18 ant-col-lg-19">
                <ul class="ant-menu ant-menu-horizontal ant-menu-light ant-menu-root" id="nav">
                    <li class="ant-menu-item" :class="{'ant-menu-item-selected':$route.path==item.path}" v-for="(item,index) in data" :key="index">
                        <router-link :to="item.path"><span v-text="item.name">设计指引</span></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    import main from '../main.json'
    export default {
        name: 'Header',
        data() {
            return {
                data: main.headerNav
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>