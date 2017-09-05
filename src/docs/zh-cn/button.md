# Button 按钮

>布局控件

## 代码演示
::: demo

<iframe>/demo.html#/button</iframe>
<summary>
#### 基础演示
>基础演示
</summary>

```html
<template>
    <v-button>基础按钮</v-button>
    <v-button disabled>禁用按钮</v-button>
    <v-button loading>加载中的按钮</v-button>
    <v-button icon="koubei-o" :active="false">带图标禁用点击效果</v-button>
    <v-button across>通栏展示</v-button>
    <v-button type="blue">蓝色按钮</v-button>
    <v-flex align="middle">
        <v-flex-item>
            <v-button radius="xl" :active="false"  className='am-button-shadow-a'>圆角按</v-button>
        </v-flex-item>
        <v-flex-item>
            <v-button radius="xl" :active="false" type="blue" className='am-button-shadow-b'>圆角按钮</v-button>
        </v-flex-item>
    </v-flex>
    <v-flex align="middle">
        <v-button inline>inline</v-button>
        <v-button inline ghost size="sm" radius="s">inline</v-button>
        <v-button inline size="md" radius="s" >inline</v-button>
        <v-button inline size="lg" radius="s">inline</v-button>
    </v-flex>
</template>
<style scoped>
.btn-container .btn {
    margin: 0.16rem 0;
}
.am-button-shadow-a{
    box-shadow: 0 .08rem .10rem 0 rgba(233,188,93,0.50);
}
.am-button-shadow-b{
    box-shadow: 0 .08rem .10rem 0 rgba(77,137,247,0.40);
}
</style>
```
:::

## Api

适用平台：Web

## Button
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| type | 按钮类型 | string | 可选 primary、ghost、blue | - |
| size | 按钮大小 | string | 可选值为 sm、md、lg | lg |
| disabled | 设置禁用 | boolean | 可选值为 true、false | false |
| inline | 是否设置为行内按钮 | boolean | 可选值为 true、false | false |
| across | 是否设置为通栏展示 | boolean | 可选值为 true、false | false |
| loading | 设置按钮载入状态 | boolean | 可选值为 true、false | false |
| icon | 可以是 Icon 组件里内置的某个 icon 的 type 值，也可以是 require 本地 svg 图标 (注意: loading设置后此项设置失效) | String | string/require(./local.svg) | - |
| radius | 圆角大小 | String | 可选值为 s、xl、circle | - |
