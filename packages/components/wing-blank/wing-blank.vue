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
            let className = {};
            className[prefixCls] = true;
            className[prefixCls + '-' + size] = size;
            return className;
        },
    },
}
</script>

<style scoped>

</style>