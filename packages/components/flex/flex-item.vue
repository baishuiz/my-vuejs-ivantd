<template>
<div :class="flexItemClassName">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'FlexItem',
    data: function() {
        return {
            prefixCls: 'am-flexbox',
        }
    },
    props: {
        className: String
    },
    computed: {
        flexItemClassName() {
            let {
                prefixCls,
                className
            } = this;
            let classObj = {};
            classObj[prefixCls + '-item'] = true;
            classObj[className] = className;
            return classObj;
        },
    },
    methods: {}
}
</script>