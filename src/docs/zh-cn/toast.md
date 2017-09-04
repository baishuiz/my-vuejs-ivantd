# Toast 轻提示

>一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

#### 规则
- 一次只显示一个 toast。
- 有 Icon 的 Toast，字数为 4-6 个；没有 Icon 的 Toast，字数不宜超过 14 个。

## 代码演示
::: demo

<iframe>http://10.166.3.200:8080/demo.html#/toast</iframe>
<summary>
#### 基础演示
>基础演示
</summary>

```html
<template>
    <v-button @click="info">Info</v-button>
    <v-button @click="icon">Icon</v-button>
    <v-button @click="nomask">Nomask</v-button>
    <v-button @click="loading">Loading</v-button>
    <v-button @click="success">Success</v-button>
    <v-button @click="warning">Warning</v-button>
    <v-button @click="error">Error</v-button>
</template>
<script>
export default {
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
```
:::

## Api

适用平台：Web

## Toast
| 函数名      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| message | 消息 | {} | - | - |
## 使用
>$toast.message(content, duration, onClose, mask,iconTypes)
## 属性
| 属性      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| content | 提示内容 | String or El | - | - |
| duration | 自动关闭的延时，单位秒 | Number | - | 3 |
| onClose | 关闭后回调 | Function | - | - |
| mask | 是否显示透明蒙层，防止触摸穿透 | Boolean | - | true |
| iconTypes | 图标类型 | String | 可选 success、warning、error、loading | - |
