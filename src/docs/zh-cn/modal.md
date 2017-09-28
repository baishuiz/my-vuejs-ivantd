# Modal 对话框

>用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

#### 规则
- 尽可能少用。Modal 会打断用户操作，只用在重要的时候。
- 标题应该简明，不能超过 1 行；描述内容应该简明、完整，一般不多于 2 行。
- 操作按钮最多到 3 个（竖排），一般为 1-2 个（横排）；3 个以上建议使用组件 ActionSheet 来完成。
- 一般将用户最可能点击的按钮，放在右侧。另外，取消按钮应当始终放在左侧。

## 代码演示
::: demo

<iframe>/demo.html#/modal</iframe>
<summary>
#### 基础演示
>基础演示
</summary>

```html
<template>
    <v-button ghost @click="info">基本</v-button>
    <v-white-space size="xl" />
    <v-button ghost @click="confirm">确认</v-button>
    <v-white-space size="xl" />
    <v-button ghost @click="info2">带缩略图</v-button>
    <v-white-space size="xl" />
    <v-button ghost @click="info3">三个以上按钮</v-button>
    <v-white-space size="xl" />
    <v-button ghost @click="confirm2">确认加载中</v-button>
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
```
:::

## Api

适用平台：Web

## Modal
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |

