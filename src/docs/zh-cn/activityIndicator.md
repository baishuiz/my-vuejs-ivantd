# ActivityIndicator 活动指示器

>活动指示器。 表明某个任务正在进行中。

#### 规则
- 不要让活动指示器静止，用户会以为该任务停滞了。
- 在某些特定场景下，提供有意义的文案，帮助用户明白哪个任务正在进行中，eg：正在上传照片。
- 如果能知道用户的等待时间，可以使用组件 Progress 来替代。

## 代码演示
::: demo

<iframe>http://10.166.3.200:8080/demo.html#/activityIndicator</iframe>
<summary>
#### 基础演示
>基础演示
</summary>

```html
<template>
    <v-activity-indicator text="正在加载中"></v-activity-indicator>
    <v-activity-indicator size="lg" text="正在加载中"></v-activity-indicator>
    <v-activity-indicator toast text="Loading" :animating="animating"></v-activity-indicator>
    <v-button @click="show">点击</v-button>
</template>
<script>
    export default {
        data: function() {
            return {
                animating:false
            }
        },
        methods: {
            show(){
                this.animating = !this.animating;
                setTimeout(() => {
                    this.animating = false;
                },3000);
            }
        }
    }
</script>
```
:::

## Api

适用平台：Web

## ActivityIndicator
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| animating | 显隐状态 | Boolean | - | true |
| size | spinner大小 | String | 可选 sm、lg | sm |
| toast | loading样式类型 | Boolean | - | false |
| text | loading文本 | String | - | - |