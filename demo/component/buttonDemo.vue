<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>Button
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">配色、类型、尺寸</div>
            <div class="demoContainer">
                <v-wing-blank>
                    <div class="btn-container">
                        <!-- <a role="button" class="btn am-button am-button-primary" ><span>primary button</span></a> -->
                        <v-button>基础按钮</v-button>
                        <v-button disabled>禁用按钮</v-button>
                        <v-button loading>加载中的按钮</v-button>
                        <v-button icon="koubei-o" :active="false">带图标禁用点击效果</v-button>
                        <v-button across>通栏展示</v-button>
                        <v-button type="blue">蓝色按钮</v-button>
                        <v-flex align="middle">
                            <v-flex-item>
                                <v-button radius="xl" :active="false"  className='am-button-shadow-a'>圆角按钮</v-button>
                            </v-flex-item>
                            <v-flex-item>
                                <v-button radius="xl" :active="false" type="blue" className='am-button-shadow-b'>圆角按钮</v-button>
                            </v-flex-item>
                        </v-flex>
                        <v-flex align="middle">
                            <v-button inline style="margin-right: 0.08rem;">inline</v-button>
                            <v-button lnline ghost size="sm" style="margin-right: 0.08rem;"  radius="s">inline</v-button>
                            <v-button lnline size="md" radius="s" style="margin-right: 0.08rem;" >inline</v-button>
                            <v-button lnline size="lg" radius="s">inline</v-button>
                        </v-flex>
                        <!-- <v-button loading>primary button</v-button> -->
                        <!-- <v-button loading>primary button</v-button> -->
                    </div>
                </v-wing-blank>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'name',
    data: function () {
        return {}
    },
    methods: {}
}
</script>

<style scoped>
.btn-container .btn {
    margin: 0.16rem 0;
}
.am-button-shadow-a{
    box-shadow: 0 .08rem .10rem 0 rgba(233,188,93,0.50);
}
.am-button-shadow-b{
    box-shadow: 0 .08rem .10rem 0 rgba(77,137,247,0.40);
}
</style>