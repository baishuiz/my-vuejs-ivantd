# LoadingBar 加载进度条

>位于 APP 底部，方便用户在不同功能模块之间进行快速切换。

#### 规则
- 用作 APP 的一级分类，数量控制在 3-5 个之间。
- 即使某个 Tab 不可用，也不要禁用或者移除该 Tab。
- 使用 Badge 进行提示，足不出户也能知道有内容更新。

## 代码演示
::: demo

<iframe>/demo.html#/loadingBar</iframe>
<summary>
#### 基础演示
>基础演示B
</summary>

```html
<template>
    <v-wing-blank size="lg">
        <a @click="start">开始加载</a>
        <v-white-space size="lg" />
        <a @click="finish">加载结束</a>
    </v-wing-blank>
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
```
:::

## Api

适用平台：Web

## LoadingBar
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |

