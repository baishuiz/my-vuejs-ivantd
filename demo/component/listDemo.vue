<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>List
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                 <v-list>
                     <div slot="header">Basic</div>
                     <v-list-item align="middle">
                        <div>这能干啥呀</div>
                        <div slot="extra">这又是干啥的</div>
                     </v-list-item>
                 </v-list>
                 <v-list>
                     <div slot="header">Basic</div>
                     <v-list-item align="middle" arrow="horizontal">
                        <div slot="thumb" ><img src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"></div>
                        <div>这能干啥呀</div>
                        <div slot="extra">这又是干啥的</div>
                     </v-list-item>
                     <div slot="footer">这是个尾巴</div>
                 </v-list>
                 <v-list>
                     <div slot="header">Basic</div>
                     <v-list-item align="middle" line="multiple" arrow="horizontal">
                        <div slot="thumb" ><img src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"></div>
                        <div>这能干啥呀<div class="am-list-brief">subtitle</div></div>
                        <!-- <div slot="extra">这又是干啥的</div> -->
                     </v-list-item>
                 </v-list>
                 <v-list>
                     <div slot="header">Basic</div>
                     <v-list-item align="middle" arrow="horizontal">
                        <div slot="thumb" >
                            <v-icon name="loading"></v-icon>
                        </div>
                        <div>这能干啥呀</div>
                        <div slot="extra">这又是干啥的</div>
                     </v-list-item>
                     <v-list-item align="middle" arrow="horizontal">
                        <div slot="thumb" ><img src="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"></div>
                        <div>这能干啥呀</div>
                        <div slot="extra">这又是干啥的</div>
                     </v-list-item>
                     <div slot="footer">这是个尾巴</div>
                 </v-list>
                 <v-list>
                     <div slot="header">好多蚊子呀</div>
                     <v-list-item align="middle">
                        <div>好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀</div>
                     </v-list-item>
                     <v-list-item align="middle" line="wrap">
                        <div>好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀</div>
                     </v-list-item>
                     <v-list-item align="top" line="wrap">
                        <div>好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀好多蚊子呀</div>
                        <div slot="extra">这又是干啥的</div>
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