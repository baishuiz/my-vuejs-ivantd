# Layout 基础布局

>Layout 是 CSS flex 布局的一个封装。

## 代码演示
::: demo

<iframe>http://10.166.3.200:8080/demo.html#/flex</iframe>
<summary>
#### 代码演示，这是一个布局案例
>基础演示
</summary>

```html
<v-flex align="middle">
    <v-flex-item>
        
    </v-flex-item>
    <v-flex-item>
        
    </v-flex-item>
</v-flex>

<v-flex align="middle">
    <v-flex-item>
        
    </v-flex-item>
    <v-flex-item>
        
    </v-flex-item>
    <v-flex-item>
        
    </v-flex-item>
</v-flex>

<v-flex align="middle">
    <v-flex-item>
        
    </v-flex-item>
    <v-flex-item>
        
    </v-flex-item>
    <v-flex-item>
        
    </v-flex-item>
    <v-flex-item>
        
    </v-flex-item>
</v-flex>

<v-flex align="middle" wrap="wrap">
    
</v-flex>

<v-flex align="middle" justify="center">
    
</v-flex>

<v-flex align="middle" justify="end">
    
</v-flex>

<v-flex align="middle" justify="between">
    
</v-flex>

<v-flex align="top">
    
</v-flex>

<v-flex align="bottom">
    
</v-flex>

<v-flex align="baseline">
    
</v-flex>
```
:::

## Api

适用平台：Web

## Flex
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| direction | 参考Flex | string | row,row-reverse,column,column-reverse | row |
| wrap | 子元素的换行方式 | string | 可选nowrap,wrap,wrap-reverse | nowrap |
| justify | 子元素在主轴上的对齐方式 | string | 可选start,end,center,between,around | start |
| align | 子元素在交叉轴上的对齐方式 | string | 可选start,center,end,baseline,stretch | center |

## Flex.Item
Flex.Item 组件默认加上了样式flex:1,保证所有 item 平均分宽度, Flex 容器的 children 不一定是 Flex.Item。