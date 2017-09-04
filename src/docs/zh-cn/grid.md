# Grid 宫格

>在水平和垂直方向，将布局切分成若干等大的区块。

#### 规则
- 区块中的内容应该是同类元素，eg：都是图片，或者都是图标+文字。

## 代码演示
::: demo

<iframe>http://10.166.3.200:8080/demo.html#/grid</iframe>
<summary>
#### 基础演示
>基础演示
</summary>

```html
<template>
    <v-grid :data="data" :columnNum="3"/>
    <v-white-space size="md" />
    <v-grid :data="data1" :hasLine="false" />
</template>
<script>
    export default {
        computed: {
            data() {
                let data = Array();
                for (var index = 0; index < 9; index++) {
                    var element = {
                        text: 'text' + (index + 1),
                        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
                    };
                    data.push(element)
                }
                return data
            },
            data1() {
                let data = Array();
                for (var index = 0; index < 9; index++) {
                    var element = {
                        text: 'text' + (index + 1),
                        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
                    };
                    data.push(element)
                }
                return data
            }
        }
    }
</script>
```
:::

## Api

适用平台：Web

## Grid
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| data | 传入的菜单数据 | Array<{icon, text}> | - | [] |
| columnNum | 列数 | number | 3-5 | 4 |
| hasLine | 是否有边框 | boolean | - | true |
