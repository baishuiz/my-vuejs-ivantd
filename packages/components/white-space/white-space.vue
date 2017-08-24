<template>
    <div :class="whiteSpaceClassName" />
</template>

<script>
    export default {
        name: 'WhiteSpace',
        data: function() {
            return {
                prefixCls: 'am-whitespace',
            }
        },
        props: {
            size: {
                type: String,
                default: 'md'
            }
        },
        computed: {
            whiteSpaceClassName() {
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