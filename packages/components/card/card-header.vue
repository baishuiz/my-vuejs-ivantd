<template>
    <div :class="wrapCls">
        <div :class="`${prefixCls}-header-content`">
            <template v-if="$slots.thumb || thumb">
                <slot name="thumb">{{thumb}}</slot>
            </template>
            {{title}}
        </div>
        <template v-if="$slots.extra || extra">
            <div :class="`${prefixCls}-header-extra`"><slot name="extra">{{extra}}</slot></div>
        </template>
        <div v-if="arrow" :class="arrowCls" />
    </div>
</template>

<script>
export default {
    name: 'CardHeader',
    data: function() {
        return {
            prefixCls: 'am-card',
        }
    },
    props: {
        title: String,
        className: String,
        thumb: Object,
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
            classObj[prefixCls + '-header'] = true;
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