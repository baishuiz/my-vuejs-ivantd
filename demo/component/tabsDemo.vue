<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>Tabs
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                <!-- <div class="am-tabs am-tabs-horizontal am-tabs-top"> -->
                <v-tabs v-model="selected">
                    <v-tab-item id="1">苹果</v-tab-item>
                    <v-tab-item id="2">西红柿</v-tab-item>
                    <v-tab-item id="3">麻瓜</v-tab-item>
                </v-tabs>
                <v-tab-pane v-model="selected">
                    <v-tab-pane-item id="1">
                        <div class="demoafs">Content of 苹果 Tab</div>
                    </v-tab-pane-item>
                    <v-tab-pane-item id="2">
                        <div class="demoafs">Content of 西红柿 Tab</div>
                    </v-tab-pane-item>
                    <v-tab-pane-item id="3">
                        <div class="demoafs">Content of 麻瓜 Tab</div>
                    </v-tab-pane-item>
                </v-tab-pane>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'name',
    data: function() {
        return {
            selected: '1',
        }
    },
    methods: {

    }
}
</script>

<style >
.demoafs {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    background-color: rgb(255, 255, 255);
}
</style>