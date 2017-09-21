<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>Modal 窗口
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                <v-wing-blank size="lg">
                    <v-button ghost @click="info">基本</v-button>
                    <v-white-space size="xl" />
                    <v-button ghost @click="confirm">确认</v-button>
                    <v-white-space size="xl" />
                    <v-button ghost @click="info2">带缩略图</v-button>
                    <v-white-space size="xl" />
                    <v-button ghost @click="info3">三个以上按钮</v-button>
                    <v-white-space size="xl" />
                    <v-button ghost @click="confirm2">确认加载中</v-button>

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
            img: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png'
        }
    },
    methods: {
        info() {
            this.$modal.alert({
                title: '标题单行',
                content: '说明当前状态、提示解决方案。',
                ok: function() {
                    console.log('ok')
                }
            });
        },
        info2() {
            this.$modal.alert({
                thumb: this.img,
                thumbStyle: 'width:3rem;margin:0.25rem',
                title: '标题单行',
                content: '说明当前状态、提示解决方案。',
            });
        },
        info3() {
            this.$modal.info({
                thumb: this.img,
                thumbStyle: 'width:3rem;margin:0.25rem',
                title: '标题单行',
                content: '说明当前状态、提示解决方案。',
                buttons: [
                    {
                        text: '按钮1',
                        action: () => {
                            console.log('a1')
                            this.$modal.remove();
                        },
                    },
                    {
                        text: '按钮2',
                        action: () => {
                            console.log('a2')
                            this.$modal.remove();
                        },
                    },
                    {
                        text: '按钮3',
                        action: () => {
                            console.log('a3')
                            this.$modal.remove();
                        },
                    },
                ]
            });
        },
        confirm() {
            this.$modal.confirm({
                // maskClosable: true,
                // closable: true,
                title: '标题单行',
                content: '说明当前状态、提示解决方案。',
                // content: '说明当前状态、提示解决方案<br/>尽量不要超过两行提醒。',
                // content: '说明当前状态、提示解决方案<br/>尽量不要超过两行提醒<br/>尽量不要超过两行提醒<br/>尽量不要超过两行提醒<br/>尽量不要超过两行提醒。',
                ok: function() {
                    console.log('ok')
                },
                cancel: function() {
                    console.log('cancel')
                }
            });
        },
        confirm2() {
            this.$modal.confirm({
                // maskClosable: true,
                // closable: true,
                loading: true,
                title: '标题单行',
                content: '说明当前状态、提示解决方案。',
                // content: '说明当前状态、提示解决方案<br/>尽量不要超过两行提醒。',
                // content: '说明当前状态、提示解决方案<br/>尽量不要超过两行提醒<br/>尽量不要超过两行提醒<br/>尽量不要超过两行提醒<br/>尽量不要超过两行提醒。',
                buttons: [
                    {
                        text: '取消',
                        action: () => {
                            this.$modal.remove();
                        },
                    },
                    {
                        text: '提交',
                        action: () => {
                            setTimeout(() => {
                                this.$toast.message('提交预申请成功！', 3, () => {
                                    this.$modal.remove();
                                    console.log('success');
                                }, true, 'success')
                            }, 1500);

                        },
                    },

                ]
            });
        }
    }
}
</script>

<style scoped>

</style>