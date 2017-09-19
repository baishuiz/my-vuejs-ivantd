# Card 卡片

>用于组织信息和操作，通常也作为详细信息的入口。

#### 规则
- 形状为矩形。
- 可包含多种类型的元素，eg：图片、文字、按钮等。


## 代码演示
::: demo

<iframe>/demo.html#/card</iframe>
<summary>
#### 基础演示
>基础演示
</summary>

```html
<v-card>
    <v-card-header title="This is title" arrow="horizontal">
        <div slot='thumb'>
            <img :src="img" />
        </div>
    </v-card-header>
</v-card>
<v-card :full="true">
    <v-card-header title="This is title">
        <div slot='extra'>
            扩展
        </div>
    </v-card-header>
    <v-card-body>
        body
    </v-card-body>
    <v-card-footer arrow="horizontal">
        footer | sss | 666
        <div slot='extra'>
            查看更多
        </div>
    </v-card-footer>
</v-card>
```
:::

## Api

适用平台：Web

## Card
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| full | 是否通栏 | string | - | false |

## CardHeader
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| title | 卡片标题 | string | - | - |
| thumb | 卡片标题图片 | El | - | - |
| extra | 卡片标题辅助内容 | El | - | - |
| arrow | 箭头 | String | 可选，horizontal,vertical,vertical-up | - |

## CardBody
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| - | 分发内容 | - | - | - |

## CardFooter
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| - | 分发内容 | - | - | - |
| extra | 卡片标题辅助内容 | El | - | - |
| arrow | 箭头 | String | 可选，horizontal,vertical,vertical-up | - |
