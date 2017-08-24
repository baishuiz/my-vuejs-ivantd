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
                let flexClass = {};
                flexClass[prefixCls] = true;
                flexClass[prefixCls + '-dir-' + direction] = direction;
                flexClass[prefixCls + '-' + wrap] = wrap;
                flexClass[prefixCls + '-justify-' + justify] = justify;
                flexClass[prefixCls + '-align-' + align] = align;
                flexClass[prefixCls + '-align-content-' + align] = alignContent;
                return flexClass;
            },
        },
        methods: {}
    }
</script>