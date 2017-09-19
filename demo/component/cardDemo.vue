<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>Card 卡片
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                <v-wing-blank size="lg">
                    <v-card>
                        <v-card-header title="This is title">
                            <div slot='thumb'>
                                <img :src="img" />
                            </div>
                            <div slot='extra'>
                                this is extra
                            </div>
                        </v-card-header>
                        <v-card-body>
                            This is content of `Card`
                        </v-card-body>
                        <v-card-footer>
                            footer | sss | 666
                            <div slot='extra'>
                                查看更多
                            </div>
                        </v-card-footer>
                    </v-card>
                    <v-white-space size="xl" />

                </v-wing-blank>
                <v-card :full="true">
                    <v-card-header title="This is title" arrow="horizontal">
                        <div slot='extra'>
                            扩展
                        </div>
                    </v-card-header>
                    <v-card-body>
                        This is content of `Card`
                    </v-card-body>
                    <v-card-footer arrow="horizontal">
                        footer | sss | 666
                        <div slot='extra'>
                            查看更多
                        </div>
                    </v-card-footer>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'name',
    data: function() {
        return {
            img: 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png'
        }
    },
    methods: {}
}
</script>

<style scoped>

</style>