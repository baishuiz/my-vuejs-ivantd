# switch 滑动开关

>数据录入控件

## 代码演示
::: demo

<iframe>/demo.html#/switch</iframe> 
<summary>
### 代码演示
>基本
</summary>  

```html
<template>
    <v-list>
        <v-list-item align="middle">
            On
            <div slot="extra">
                <v-switch name="demo1" :value="value"></v-switch>
            </div>
        </v-list-item>
        <v-list-item align="middle">
            Off
            <div slot="extra">
                <v-switch name="demo2" :value="!value"></v-switch>
            </div>
        </v-list-item>
        <v-list-item align="middle">
            Disabled off
            <div slot="extra">
                <v-switch name="demo3" :value="!value" disabled></v-switch>
            </div>
        </v-list-item>
        <v-list-item align="middle">
            Disabled on
            <div slot="extra">
                <v-switch name="demo4" :value="value" disabled></v-switch>
            </div>
        </v-list-item>
        <v-list-item align="middle">
            Style for Android
            <div slot="extra">
                <v-switch name="demo5" :value="!value" platform="android"></v-switch>
            </div>
        </v-list-item>
        <v-list-item align="middle">
            change
            <div slot="extra">
                <v-switch name="demo6" @change="testChange"></v-switch>
            </div>
        </v-list-item>
    </v-list>  
</template>

<script>
export default {
    name: 'name',
    data: function() {
        return {
            value: true
        }
    },
    methods: {
        testChange(val) {
           if(val){
                this.$toast.message('操作成功', 3, () => {
                console.log('success');
            }, true, 'success')
           }
        }
    }
}
</script>

<style scoped>

</style>
``` 

:::

## API

适用平台： web

|参数      |说明      |类型      |可选值      |默认值      |
|----------|----------|----------|----------|----------|
|name      |      |String      |      |      |
|value      |      |Boolean      |可选值为true、false      |      |
|disabled      |      |Boolean      |可选值为true、false      |false      |
|platform      |      |String      |可选值为ios、andriod      |      |
|color      |      |String      |      |      |