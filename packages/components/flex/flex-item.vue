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
            let flexItemClass = {};
            flexItemClass[prefixCls + '-item'] = true;
            flexItemClass[className] = className;
            return flexItemClass;
        },
    },
    methods: {}
}
</script>