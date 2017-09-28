<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>Switch 滑动开关
        </div>
        <div class="demo-preview-item">
            <div class="demoTitle">基本</div>
            <div class="demoContainer">
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
            </div>
        </div>
    </div>
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