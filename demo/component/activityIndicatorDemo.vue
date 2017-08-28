<template>
<div class="demo">
    <div class="demoName">
        <a class="icon" @click="$router.push({path:'/'})"></a>ActivityIndicator
    </div>
    <div class="demo-preview-item" id="button-demo-0">
        <div class="demoTitle">基础</div>
        <div class="demoContainer">
            <v-wing-blank size="sm">
                <!-- <v-activity-indicator></v-activity-indicator>
                <v-white-space/>
                <v-activity-indicator toast></v-activity-indicator>
                <v-white-space/> -->
                <v-activity-indicator text="正在加载中"></v-activity-indicator>
                <v-white-space/>
                <v-activity-indicator size="lg" text="正在加载中"></v-activity-indicator>
                <v-white-space/>
                <!-- <v-activity-indicator toast text="正在加载中"></v-activity-indicator>
                <v-white-space/> -->
                <v-activity-indicator toast text="Loading" :animating="animating"></v-activity-indicator>
                <v-button @click="show">点击</v-button>
                <v-white-space/>
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
            animating:false
        }
    },
    methods: {
        show(){
            this.animating = !this.animating;

            setTimeout(() => {
                this.animating = false;
            },3000);
        }
    }
}
</script>

<style scoped>

</style>