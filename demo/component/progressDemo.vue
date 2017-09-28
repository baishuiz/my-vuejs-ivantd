<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>Progress
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                <v-wing-blank size="lg">
                    

                    <v-white-space size="lg" />
                    <v-progress :percent="30" position="fixed"></v-progress>
                    <v-white-space size="lg" />
                    <v-progress :percent="40" position="normal" :unfilled="false"></v-progress>
                    <v-white-space size="lg" />
                    <div class="show-info">
                        <div class="progress">
                            <v-progress :percent="percent" position="normal" />
                        </div>
                        <div aria-hidden="true">{{percent}}%</div>
                    </div>
                    <v-white-space size="lg" />
                    <v-button @click="add" style="width:200px;">(+-)10</v-button>
                    <!-- <Progress percent={40} position="normal" unfilled={false} appearTransition /> -->
                </v-wing-blank>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'name',
    data: function() {
        return {
            percent: 50,
        }
    },
    methods: {
        add() {
            let p = this.percent + 10;
            if (this.percent >= 100) {
                p = 0;
            }
            this.percent = p;
        }
    }
}
</script>

<style lang='less' scoped>
.show-info {
    margin-top: 0.36rem;
    display: flex;
    align-items: center;
}

.show-info .progress {
    margin-right: 0.1rem;
    width: 100%;
}
</style>