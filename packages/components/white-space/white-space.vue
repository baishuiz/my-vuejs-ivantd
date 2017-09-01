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
                let classObj = {};
                classObj[prefixCls] = true;
                classObj[prefixCls + '-' + size] = size;
                return classObj;
            },
        },
    }
</script>