<template>
    <div :class="wingBlankClassName">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'WingBlank',
    data: function () {
        return {
            prefixCls: 'am-wingblank',
        }
    },
    props: {
        size: {
            type: String,
            default: 'md'
        }
    },
    computed: {
        wingBlankClassName() {
            let {
                prefixCls,
                size
            } = this;
            let classObj = {};
            classObj[prefixCls] = true;
            classObj[prefixCls + '-' + size] = size;
            return classObj;
        },
    },
}
</script>