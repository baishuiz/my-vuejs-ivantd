<template>
<div class="demo">
    <div class="demoName">
        <a class="icon" @click="$router.push({path:'/'})"></a>Progress
    </div>
    <div class="demo-preview-item" id="button-demo-0">
        <div class="demoTitle">基础</div>
        <div class="demoContainer">
            <!-- <v-progress :percent="30" ></v-progress>
            <v-progress :percent="p" position="normal" show></v-progress> -->
            
            <!-- <v-progress :percent="80" position="normal" unfilled show></v-progress> -->
            <a  @click="start">开始加载</a>
            <v-white-space size="lg" />
            <a  @click="finish">加载结束</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'name',
    data: function() {
        return {
            p:10
        }
    },
    methods: {
        start(){
        //    this.p = this.p+10;
            this.$progress.start();
            // console.log(this.$progress)
        },
        finish(){
            this.$progress.finish();
        }
    }
}
</script>

<style scoped>

</style>