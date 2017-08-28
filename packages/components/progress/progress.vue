<template>
    <transition name="fade">
        <div :class="wrapCls" v-show="show">
            <div ref="bar" :class="prefixCls+'-bar'" :style="'width:'+percent+'%;height:0px;'"></div>
        </div>
    </transition>
</template>

<script>
export default {
    // name: 'Progress',
    data: function() {
        return {
            prefixCls: 'am-progress',
            show: false,
            percent: 0,
            status: 'success',
            position:'fixed', //进度条的位置,可选: `fixed` `normal` | string | `fixed`
            unfilled: true //是否隐藏未填充轨道 | boolean | true
        }
    },
    computed: {
        wrapCls() {
            let {
                prefixCls,
                // percent,
                position,
                unfilled
            } = this;
            let classObj = {};
            classObj[prefixCls + '-outer'] = true;
            if (position === 'fixed') {
                classObj[prefixCls + '-fixed-outer'] = true;
            }
            classObj[prefixCls + '-hide-outer'] = unfilled;
            return classObj;
        },
    }
}
</script>