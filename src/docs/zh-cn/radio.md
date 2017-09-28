# Radio 单选框

>单选框

## 代码演示
::: demo

<iframe>/demo.html#/radio</iframe>
<summary>
#### 基础演示
>基本
</summary>

```html
<template>
    <v-list>
        <div slot="header">Basic</div>
        <v-radio-item v-model="value" :options="['男士',{
                        label: '女士',
                        value: '女士'
                    }]" @change="change"></v-radio-item>
        <div slot="footer" v-if="value.length>0">{{value}}</div>
    </v-list>
</template>

<script>
export default {
    name: 'Radio',
    data: function() {
        return {
            value: '男士',
            value2: [],
            options: [
                {
                    label: 'radio1',
                    value: 'radio1',
                },
                {
                    label: 'radio2',
                    value: 'radio2',
                },
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

## Radio
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| options | 选项集合 | Array |  | - |

