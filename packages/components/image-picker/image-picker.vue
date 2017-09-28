<template>
    <div :class="`${prefixCls}`">
        <div :class="`${prefixCls}-list`" role="group">
            <v-wing-blank size="md">
                <!-- {renderEl} -->
            </v-wing-blank>
        </div>
    </div>
</template>

<script>
import vWingBlank from '../wing-blank';
import { flex as vFlex, flexItem as vFlexItem } from '../flex';
export default {
    name: 'ImagePicker',
    components: { vWingBlank, vFlex, vFlexItem },
    data: function() {
        return {
            prefixCls: 'am-image-picker'
        }
    },
    props: {
        files: Array,
        // onChange:()=>{},
        // onImageClick:()=>{},
        selectable: {
            type: Number,
            default: 5,
        }
    },
    computed: {

    },
}
</script>

<style scoped>

</style>