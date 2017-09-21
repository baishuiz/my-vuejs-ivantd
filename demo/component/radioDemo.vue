<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>Radio
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">                
                 <v-list>
                     <div slot="header">RadioItem Demo</div>
                     <v-list-item align="middle">
                        <div>男士</div>
                        <radio></radio>
                     </v-list-item>
                     <v-list-item align="middle">
                        <div>女士</div>
                        <radio></radio>
                     </v-list-item>
                 </v-list>                 
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

</style>