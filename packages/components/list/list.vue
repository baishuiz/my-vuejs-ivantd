<template>
<div :class="listClassName">
    <div v-if="$slots.header || header" :class="prefixCls+'-header'">
        <slot name="header">{{header}}</slot>
    </div>
    <div :class="prefixCls+'-body'">
        <slot></slot>
    </div>
    <div v-if="$slots.footer || footer" :class="prefixCls+'-footer'">
        <slot name="footer">{{footer}}</slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'List',
    data: function() {
        return {
            prefixCls: 'am-list',
        }
    },
    props: {
        className: String,
        header: Object,
        footer: Object,
    },
    computed: {
        listClassName() {
            let {
                prefixCls,
                className
            } = this;
            let classObj = {};
            classObj[prefixCls] = true;
            classObj[className] = className;
            return classObj;
        },
    },
}
</script>