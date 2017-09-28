<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>Radio 单选框
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                <v-radio v-model="sgv" >你好</v-radio>
                
                <v-white-space size="xs" />
                <v-list>
                    <div slot="header">Basic</div>
                    <v-radio-item v-model="value" :options="['男士',{
                                    label: '女士',
                                    value: '女士'
                                },'未知']" @change="change"></v-radio-item>
                    <div slot="footer" v-if="value.length>0">{{value}}</div>
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

<style scoped>

</style>