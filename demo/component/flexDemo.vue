<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>Flex
            <span class="ch">Flex布局</span>
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                <div class="flex-container">
                    <div class="sub-title">基本</div>
                    <v-flex align="middle">
                        <v-flex-item>
                            <div style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        </v-flex-item>
                        <v-flex-item>
                            <div style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        </v-flex-item>
                    </v-flex>
                    <v-white-space />
                    <v-flex align="middle">
                        <v-flex-item>
                            <div style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        </v-flex-item>
                        <v-flex-item>
                            <div style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        </v-flex-item>
                        <v-flex-item>
                            <div style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        </v-flex-item>
                    </v-flex>
                    <v-white-space />
                    <v-flex align="middle">
                        <v-flex-item>
                            <div style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        </v-flex-item>
                        <v-flex-item>
                            <div style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        </v-flex-item>
                        <v-flex-item>
                            <div style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        </v-flex-item>
                        <v-flex-item>
                            <div style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        </v-flex-item>
                    </v-flex>
                    <div class="sub-title">wrap 换行</div>
                    <v-flex align="middle" wrap="wrap">
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                    </v-flex>
                    <div class="sub-title">轴对齐方式</div>
                    <v-flex align="middle" justify="center">
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                    </v-flex>
                    <v-white-space />
                    <v-flex align="middle" justify="end">
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                    </v-flex>
                     <v-white-space />
                    <v-flex align="middle" justify="between">
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                    </v-flex>
                    <v-white-space />
                    <v-flex align="top">
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline small" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                    </v-flex>
                    <v-white-space />
                    <v-flex align="bottom">
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline small" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                    </v-flex>
                    <v-white-space />
                    <v-flex align="baseline">
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline small" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                        <div class="inline" style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Item</div>
                    </v-flex>
                </div>
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
.flex-container {
    margin: 0 0.30rem;
}

.flex-container .inline {
    width: 1.6rem!important;
    margin: 0.18rem 0.18rem 0.18rem 0;
}

.flex-container .small {
    height: 0.4rem!important;
    line-height: 0.4rem!important;
}

.sub-title {
    color: #888;
    font-size: .28rem;
    padding: 30px 0 18px 0;
}

</style>