<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>LoadingBar
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                <v-wing-blank size="lg">
                    <a @click="start">开始加载</a>
                    <v-white-space size="lg" />
                    <a @click="finish">加载结束</a>
                </v-wing-blank>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'name',
    data: function() {
        return {
            percent: 50,
        }
    },
    methods: {
        start() {
            this.$loadingBar.start();
        },
        finish() {
            this.$loadingBar.finish();
            // this.$loadingBar.destroy();
        },
    }
}
</script>