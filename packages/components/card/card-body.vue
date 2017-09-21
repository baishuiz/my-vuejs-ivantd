<template>
    <div :class="wrapCls">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CardBody',
    data: function() {
        return {
            prefixCls: 'am-card',
        }
    },
    props: {
        className: String,
    },
    computed: {
        wrapCls() {
            let {
                prefixCls,
                className
            } = this;
            let classObj = {};
            classObj[prefixCls + '-body'] = true;
            classObj[className] = !!className;
            return classObj;
        }
    },
}
</script>