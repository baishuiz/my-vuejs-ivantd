# List 列表

>单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

#### 规则
- 一般由主要信息、主要操作、次要信息、次要操作组成。
- 主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。

## 代码演示
::: demo

<iframe>/demo.html#/list</iframe>
<summary>
#### 基础演示
>基础演示
</summary>

```html
<template>
    <v-list>
        <div slot="header">Basic</div>
        <v-list-item align="middle">
        <div>这能干啥呀</div>
        <div slot="extra">这又是干啥的</div>
        </v-list-item>
    </v-list>
    <v-list>
        <div slot="header">Basic</div>
        <v-list-item align="middle" arrow="horizontal">
        <div slot="thumb" ><img src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"></div>
        <div>这能干啥呀</div>
        <div slot="extra">这又是干啥的</div>
        </v-list-item>
        <div slot="footer">这是个尾巴</div>
    </v-list>
    <v-list>
        <div slot="header">Basic</div>
        <v-list-item align="middle" line="multiple" arrow="horizontal">
        <div slot="thumb" ><img src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"></div>
        <div>这能干啥呀<div class="am-list-brief">subtitle</div></div>
        <!-- <div slot="extra">这又是干啥的</div> -->
        </v-list-item>
    </v-list>
    <v-list>
        <div slot="header">Basic</div>
        <v-list-item align="middle" arrow="horizontal">
        <div slot="thumb" >
            <v-icon name="loading"></v-icon>
        </div>
        <div>这能干啥呀</div>
        <div slot="extra">这又是干啥的</div>
        </v-list-item>
        <v-list-item align="middle" arrow="horizontal">
        <div slot="thumb" ><img src="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"></div>
        <div>这能干啥呀</div>
        <div slot="extra">这又是干啥的</div>
        </v-list-item>
        <div slot="footer">这是个尾巴</div>
    </v-list>
    <v-list>
        <div slot="header">好多蚊子呀</div>
        <v-list-item align="middle">
        <div>好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀</div>
        </v-list-item>
        <v-list-item align="middle" line="wrap">
        <div>好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀</div>
        </v-list-item>
        <v-list-item align="top" line="wrap">
        <div>好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀</div>
        <div slot="extra">这又是干啥的</div>
        </v-list-item>
    </v-list>
</template>
```
:::

## Api

适用平台：Web

## List
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| slot="header" | Header内容  | string | - | - |
| slot="footer" | Footer内容  | string | - | - |
## List.Item
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| thumb | 缩略图(当为 string 类型时作为 img src)  | String Or El | - | - |
| extra | 右边内容  | string | String Or El | - |
| align | Flex 子元素垂直对齐  | string | 可选top,middle,bottom | middle |
| multipleLine | 多行  | Boolean | - | false |
| wrap | 是否换行，默认情况下，文字超长会被隐藏  | Boolean | - | false |
## List.Item.Brief
>辅助说明
