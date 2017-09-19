<template>
    <div :class="wrapCls">
        <div :class="`${prefixCls}-footer-content`">
            <slot></slot>
        </div>
        <template v-if="$slots.extra || extra">
            <div :class="`${prefixCls}-footer-extra`"><slot name="extra">{{extra}}</slot></div>
        </template>
        <div v-if="arrow" :class="arrowCls" />
    </div>
</template>

<script>
export default {
    name: 'CardFooter',
    data: function() {
        return {
            prefixCls: 'am-card',
        }
    },
    props: {
        className: String,
        extra: Object,
        arrow: String,
    },
    computed: {
        wrapCls() {
            let {
                prefixCls,
                className
            } = this;
            let classObj = {};
            classObj[prefixCls + '-footer'] = true;
            classObj[className] = !!className;
            return classObj;
        },
        arrowCls() {
            let {
                prefixCls,
                arrow
            } = this;
            let classObj = {};
            classObj[prefixCls + '-arrow'] = true;
            classObj[prefixCls + '-arrow-' + arrow] = arrow;//horizontal,vertical,vertical-up
            return classObj;
        },
    },
}
</script>