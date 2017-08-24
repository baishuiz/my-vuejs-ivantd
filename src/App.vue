<template>
    <div class="page-wrapper">
        <v-header></v-header>
        <router-view keep-alive></router-view>
        <v-footer></v-footer>
    </div>
</template>

<script>
    // import vHeader from './components/header'
    // import vFooter from './components/footer'
    export default {
        // components: {
        //     vHeader,
        //     vFooter
        // }
    }
</script>
<style lang="less">
    @import 'assets/desktop.less';
</style>
