# Badge 徽标数

>图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。

#### 规则
- 当用户只需知道大致有内容更新时，应该使用红点型，如：社交中的群消息通知。
- 当用户有必要知晓每条更新时，应该使用数字型。如：社交中的一对一的消息通知。

## 代码演示
::: demo

<iframe>http://10.166.3.200:8080/demo.html#/badge</iframe>
<summary>
#### 基础演示
>基础演示
</summary>

```html
<template>
    <v-list>
        <v-list-item align="middle" arrow="horizontal">
            <v-badge dot>
                哈哈
            </v-badge>
            <span>Dot Badge</span>
            <div slot="extra">小红帽</div>
        </v-list-item>
        <v-list-item align="middle" arrow="horizontal">
            <span>Dot Badge</span>
            <div slot="extra">
                <v-badge text="166" ></v-badge>
            </div>
        </v-list-item>
        <v-list-item align="middle" class="special-badge">
            <span>Use corner pro</span>
            <div slot="extra">
                <v-badge text="促" :corner="false"></v-badge>
            </div>
        </v-list-item>
        <v-list-item align="middle">
            <v-badge text="促" hot></v-badge>
            <v-badge text="减" hot></v-badge>
            <v-badge text="满" hot></v-badge>
            <v-badge text="反" hot></v-badge>
            <v-badge text="HOT" hot></v-badge>
        </v-list-item>
        <v-list-item align="middle">
            <v-badge text="500">
                <img src="https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png">
            </v-badge>
            <div slot="extra">带数字</div>
        </v-list-item>
    </v-list>
</template>
<style scoped>
.special-badge .am-list-line {
  padding-right: 0;
}
.special-badge .am-list-line .am-list-extra {
  padding: 0;
  height: 100%;
}
.special-badge .am-badge {
  transform: rotate(45deg);
  transform-origin: right bottom;
  right: 0;
  top: 0.26rem;
  width: 1rem;
}
.special-badge .am-badge-text {
  border-radius: 0.02rem;
}
</style>
```
:::

## Api

适用平台：Web

## Badge
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| size | 大小 | string | 可选 lg、sm | sm |
| text | 展示的数字或文案，当为数字时候，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏 | string or number | - | - |
| corner | 置于角落 | boolean | - | false |
| dot | 不展示数字，只有一个小红点 | boolean | - | false |
| overflowCount | 展示封顶的数字值 | Number | - | 99 |
| hot | 营销样式 | boolean | - | false |
