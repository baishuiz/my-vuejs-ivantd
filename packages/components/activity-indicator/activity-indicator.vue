<template>
    <transition name="fade">
        <div v-show="animating">
            <div v-if="toast">
                <div :class="wrapClass">
                    <div :class="prefixCls+'-content'">
                        <span :class="spinnerClass" />
                        <span v-if="text" :class="prefixCls+'-toast'"  v-text="text"></span>
                    </div>
                </div>
            </div>
            <div v-else>
                <div :class="wrapClass">
                    <span :class="spinnerClass" />
                    <span v-if="text" :class="prefixCls+'-tip'" v-text="text"></span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ActivityIndicator',
    data: function() {
        return {
            prefixCls: 'am-activity-indicator',
            panelColor: 'rgba(34,34,34,0.6)',
        }
    },
    props: {
        animating: {
            type: Boolean,
            default: true,
        },
        size: {
            type: String,
            default: 'sm',
        },
        toast: Boolean,
        text: String,
    },
    computed: {
        wrapClass() {
            let {
                prefixCls,
                size,
                toast,
            } = this;
            let classObj = {};
            classObj[prefixCls] = true;
            classObj[prefixCls + '-' + size] = size; //lg,sm
            classObj[prefixCls + '-toast'] = !!toast;
            return classObj;
        },
        spinnerClass() {
            let {
                prefixCls,
                size,
                toast,
            } = this;
            let classObj = {};
            classObj[prefixCls + '-spinner'] = true;
            if (!!toast || size == 'lg') {
                classObj[prefixCls + '-spinner-lg'] = true;
            }
            return classObj;
        },
    }
}
</script>
<style lang="less">
// @import url('./style/index.less');
</style>