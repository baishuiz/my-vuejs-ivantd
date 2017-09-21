<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>Checkbox 复选框
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                <v-white-space size="xs" />
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
            </div>
        </div>
    </div>
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

<style scoped>

</style>