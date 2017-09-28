# Tabs 标签页

>用于让用户在不同的视图中进行切换。

#### 规则
- 标签数量，一般 2-4 个；其中，标签中的文案需要精简，一般 2-4 个字。
- 在 iOS 端的次级页面中，不建议使用左右滑动来切换 Tab，这个和 iOS 的左滑返回存在冲突，eg：详情页中 Tabs。

## 代码演示
::: demo

<iframe>/demo.html#/tabs</iframe>
<summary>
#### 基础演示
>基础演示
</summary>

```html
<template>
    <v-tabs v-model="selected">
        <v-tab-item id="1">苹果</v-tab-item>
        <v-tab-item id="2">西红柿</v-tab-item>
        <v-tab-item id="3">麻瓜</v-tab-item>
    </v-tabs>
    <v-tab-pane v-model="selected">
        <v-tab-pane-item id="1">
            <div class="demoafs">Content of 苹果 Tab</div>
        </v-tab-pane-item>
        <v-tab-pane-item id="2">
            <div class="demoafs">Content of 西红柿 Tab</div>
        </v-tab-pane-item>
        <v-tab-pane-item id="3">
            <div class="demoafs">Content of 麻瓜 Tab</div>
        </v-tab-pane-item>
    </v-tab-pane>
</template>
<script>
export default {
    name: 'name',
    data: function() {
        return {
            selected: '1',
        }
    },
    methods: {

    }
}
</script>
```
:::

## Api

适用平台：Web

## Tabs
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |

## TabItem
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |

## TabPane
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |

## TabPaneItem
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |

