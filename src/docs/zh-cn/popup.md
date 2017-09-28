# Popup 弹出

>用于对层的弹出效果

## 代码演示
::: demo

<iframe>/demo.html#/popup</iframe>
<summary>
#### 基础演示
>基础演示
</summary>

```html
<template>
    <v-wing-blank size="lg">
        <v-button @click="popupShow1 = true">从中间弹出popup</v-button>
        <v-popup v-model="popupShow1" style="width:3rem;height:1.5rem;" :lock-on-scroll="true">
            从中间弹出popup
        </v-popup>
        <v-white-space/>
        <v-button @click="popupShow2 = true;">从下方弹出popup</v-button>
        <v-popup v-model="popupShow2" position="bottom" style="height:5rem;">
            下方弹出popup 倒计时2s
        </v-popup>
        <v-white-space/>
        <v-button @click="popupShow3 = true">从上方弹出popup</v-button>
        <v-popup v-model="popupShow3" position="top" style="height:3rem;">
            <a @click="popupShow3= false">关闭 popup</a>
        </v-popup>
        <v-white-space/>
        <v-button @click="popupShow4 = true">从右方弹出popup</v-button>
        <v-popup v-model="popupShow4" position="right" style="height:100%;width:80%;">
            <a @click="popupShow4 = false">关闭 popup</a>
        </v-popup>
        <v-white-space/>
        <v-button @click="popupShow5 = true">从左方弹出popup</v-button>
        <v-popup v-model="popupShow5" position="left"  style="height:100%;width:80%;">
            <a @click="popupShow5 = false">关闭 popup</a>
        </v-popup>
    </v-wing-blank>
</template>
<script>
export default {
    name: 'name',
    data: function() {
        return {
            popupShow1: false,
            popupShow2: false,
            popupShow3: false,
            popupShow4: false,
            popupShow5: false
        }
    },
    methods: {},
    watch: {
        popupShow2(val) {
            if (val) {
                setTimeout(() => {
                    this.popupShow2 = false;
                }, 2000);
            }
        }
    }
}
</script>
```
:::

## Api

适用平台：Web

## Popup
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |

