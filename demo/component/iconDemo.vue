<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>Icon
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                <v-grid :data="data" :columnNum="3"/>
                <!-- <v-wing-blank size="lg">
                    <v-icon type="search"/>
                </v-wing-blank> -->
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
                let svgs = [
                    'check-circle-o',
                    'check-circle',
                    'check',
                    'cross-circle-o',
                    'cross-circle',
                    'cross',
                    'ellipsis-circle',
                    'ellipsis',
                    'exclamation-circle',
                    'info-circle',
                    'koubei-o',
                    'koubei',
                    'left',
                    'loading',
                    'question-circle',
                    'right',
                    'search',
                    'up'
                ]
                let data = Array();
                for (var index = 0; index < svgs.length; index++) {
                    var element = {
                        text: svgs[index],
                        svg: svgs[index]
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