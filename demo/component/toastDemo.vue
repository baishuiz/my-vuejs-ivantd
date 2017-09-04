<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>Toast 轻提示
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                <v-wing-blank size="lg">
                    <v-button type='blue'  @click="info">Info</v-button>
                    <v-white-space/>
                    <v-button ghost  @click="icon">Icon</v-button>
                    <v-white-space/>
                    <v-button  @click="nomask">Nomask</v-button>
                    <v-white-space/>
                    <v-button ghost  @click="loading">Loading</v-button>
                    <v-white-space/>
                    <v-button ghost  @click="success">Success</v-button>
                    <v-white-space/>
                    <v-button type='blue'  @click="warning">Warning</v-button>
                    <v-white-space/>
                    <v-button ghost  @click="error">Error</v-button>
                    <v-white-space/>

                </v-wing-blank>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'name',
    data: function() {
        return {}
    },
    methods: {
        info() {
            this.$toast.message('This is a toast tips !!!', 2, null, true, null)
        },
        icon() {
            this.$toast.message(null, 3, null, true, 'loading')
        },
        nomask() {
            this.$toast.message('This is a toast tips !!!', 0, null, false, null)
        },
        loading() {
            this.$toast.message('This is a toast loading !!!', 3, () => {
                console.log('close loading!!!');
            }, true, 'loading')
        },
        success() {
            this.$toast.message('操作成功', 3, () => {
                console.log('success');
            }, true, 'success')
        },
        error() {
            this.$toast.message('服务器异常', 3, () => {
                console.log('error');
            }, true, 'error')
        },
        warning() {
            this.$toast.message('操作警告', 3, () => {
                console.log('warning');
            }, true, 'warning')
        },

    }
}
</script>

<style scoped>

</style>