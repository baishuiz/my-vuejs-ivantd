<template>
    <div>
        <v-header></v-header>
        <router-view keep-alive></router-view>
        <v-footer></v-footer>
    </div>
</template>

<script>
import qrcode from './components/qrcode.js';
export default {
    data() {
        return {
            qrcodeValue: 'http://10.166.3.200:8080/demo.html',
            qrcodeOptions: {
                size: 164
            }
        }
    },
    components: {
        qrcode
    }
}
</script>
<style lang="less">
@import url('./assets/common.less');
</style>
