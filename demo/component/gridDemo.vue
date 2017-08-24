<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>Grid
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                <v-grid :data="data" :columnNum="3"/>
                <v-white-space size="md" />
                <v-grid :data="data1" :hasLine="false" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'name',
        data: function() {
            return {}
        },
        computed: {
            data() {
                let data = Array();
                for (var index = 0; index < 9; index++) {
                    var element = {
                        text: 'text' + (index + 1),
                        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
                        // svg: 'search'
                    };
                    data.push(element)
                }
                return data
            },
            data1() {
                let data = Array();
                for (var index = 0; index < 9; index++) {
                    var element = {
                        text: 'text' + (index + 1),
                        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
                        // svg: 'search'
                    };
                    data.push(element)
                }
                return data
            }
        }
    }
</script>

<style scoped>

</style>