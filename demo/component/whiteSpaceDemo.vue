<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>WhiteSpace
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                <v-white-space size="xs" />
                <div style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Block</div>
                <v-white-space size="sm" />
                <div style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Block</div>
                <v-white-space size="md" />
                <div style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Block</div>
                <v-white-space size="lg" />
                <div style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Block</div>
                <v-white-space size="xl" />
                <div style="background-color: rgb(235, 235, 239); color: rgb(187, 187, 187); text-align: center; height: 0.6rem; line-height: 0.6rem; width: 100%;">Block</div>
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