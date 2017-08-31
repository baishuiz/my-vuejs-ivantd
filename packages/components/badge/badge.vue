<template>
    <span :class="badgeCls">
        <slot></slot>
        <template v-if="text||dot">
            <sup :class="scrollNumberCls" v-text="textv"></sup>
        </template>
    </span>
</template>

<script>
export default {
    name: 'Badge',
    data: function() {
        return {
            prefixCls: 'am-badge',
        }
    },
    props: {
        corner: Boolean, //置于角落
        dot: Boolean, //不展示数字，只有一个小红点
        text: String, //展示的数字或文案，当为数字时候，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏
        size: String, //大小，可选 large small
        overflowCount: {
            type: Number,
            default: 99,
        }, //展示封顶的数字值,
        hot: Boolean, //营销样式
    },
    computed: {

        textv() {
            let { text, overflowCount, dot } = this;
            if (dot) {
                return '';
            }
            let n;
            try {
                n = parseInt(text);
            } catch (er) { }
            if (n > 0) {
                if (n > overflowCount) {
                    return overflowCount + '+';
                } else {
                    return n;
                }
            } else { return text; }
        },
        badgeCls() {
            // console.log(this.$slots.default)
            let {
                prefixCls,
                size,
                corner,
                hot,
            } = this;
            console.log(corner)
            let classObj = {};
            classObj[prefixCls] = true;
            classObj[prefixCls + '-not-a-wrapper'] = !this.$slots.default;
            classObj[prefixCls + '-corner-wrapper'] = corner;
            classObj[prefixCls + '-hot'] = !!hot;
            classObj[prefixCls + '-corner-wrapper-large'] = corner && (size === 'lg'); //lg,sm
            return classObj;
        },
        scrollNumberCls() {
            let {
                prefixCls,
                dot,
                size,
                corner,
            } = this;
            let classObj = {};
            classObj[prefixCls + '-dot'] = dot;
            classObj[prefixCls + '-dot-large'] = dot && (size === 'lg');
            classObj[prefixCls + '-text'] = !dot && !corner;
            classObj[prefixCls + '-corner'] = corner;
            classObj[prefixCls + '-corner-large'] = corner && (size === 'lg');
            return classObj;
        },
    }
}
</script>