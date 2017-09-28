# Checkbox 复选框

>复选框

## 代码演示
::: demo

<iframe>/demo.html#/checkbox</iframe>
<summary>
#### 基础演示
>基础演示
</summary>

```html
<template>
    <v-checkbox v-model="sgv">{{sgv}}</v-checkbox>
    <v-white-space size="xs" />
    <v-checkbox v-model="sgv" disabled>《阅读借款协议》</v-checkbox>
    <v-white-space size="xs" />
    <v-list>
        <div slot="header">Basic</div>
        <v-checkbox-item v-model="value" :options="['麻瓜',{
                        label: '苹果',
                        value: 'apple',
                        disabled: true
                    },'西红柿','香蕉','牛奶']" @change="change"></v-checkbox-item>
        <div slot="footer" v-if="value.length>0">{{value}}</div>
    </v-list>
    <v-list>
        <div slot="header">最多选择2个</div>
        <v-checkbox-item :max="2" v-model="value2" :options="['麻瓜','苹果','西红柿','香蕉','牛奶']"></v-checkbox-item>
        <div slot="footer" v-if="value2.length>0">{{value2}}</div>
    </v-list>
</template>
<script>
export default {
    name: 'name',
    data: function() {
        return {
            sgv: false,
            value: ['apple'],
            value2: [],
            options: [
                {
                    label: 'disabled option',
                    value: 'valueF',
                    // disabled: true
                },
                {
                    label: 'checked disabled',
                    value: 'valueE',
                },
                {
                    label: 'optionA',
                    value: 'valueA'
                },
                {
                    label: 'optionB',
                    value: 'valueB'
                }
            ]
        }
    },
    methods: {
        change(v) {
            console.log(v)
        }
    }
}
</script>
```
:::

## Api

适用平台：Web

## Checkbox
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
|disabled |是否禁用 |Boolean |- |false |

## CheckboxItem
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
|options |数据集 |Array[] |- |- |
|max |最大选取数量 |Number |- |- |

>基于List.Item对Checkbox进行封装,List.Item的thumb属性固定传入Checkbox,其他属性和List.Item一致。 其他 API 和 Checkbox 相同。

## CheckboxAgreeItem

>用于同意协议这种场景的复选框

