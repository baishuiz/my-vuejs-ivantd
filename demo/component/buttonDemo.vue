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
                    <v-button>primary button</v-button>
                    <v-button disabled>disabled button</v-button>
                    <v-button loading>loading button</v-button>
                    <v-button icon="koubei-o">icon button</v-button>
                    <v-flex align="middle">
                    <v-button inline style="margin-right: 0.08rem;">inline</v-button>
                    <v-button ghost lnline size="small" style="margin-right: 0.08rem;">inline</v-button>
                    <v-button lnline size="small">inline</v-button>
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
    data: function() {
        return {}
    },
    methods: {}
}
</script>

<style scoped>
.btn-container .btn {
    margin: 0.16rem 0;
}
</style>