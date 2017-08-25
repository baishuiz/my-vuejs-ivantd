<template>
    <div :class="flexClassName">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Flex',
        data: function() {
            return {
                prefixCls: 'am-flexbox',
            }
        },
        props: {
            direction: String,
            wrap: String,
            justify: String,
            align: {
                type: String,
                default: 'center'
            }
        },
        computed: {
            flexClassName() {
                let {
                    prefixCls,
                    direction,
                    wrap,
                    justify,
                    align,
                    alignContent,
                    style,
                } = this;
                let classObj = {};
                classObj[prefixCls] = true;
                classObj[prefixCls + '-dir-' + direction] = direction;
                classObj[prefixCls + '-' + wrap] = wrap;
                classObj[prefixCls + '-justify-' + justify] = justify;
                classObj[prefixCls + '-align-' + align] = align;
                classObj[prefixCls + '-align-content-' + align] = alignContent;
                return classObj;
            },
        },
        methods: {}
    }
</script>