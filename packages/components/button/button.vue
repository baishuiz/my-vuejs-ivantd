<template>
    <a role="button" :class="[btnClassObj]" :disabled="disabled" @click="handleClick($event)" @touchstart="handleTouch" @touchend="handleTouch">
        <Icon v-if="loading" type='loading' />
        <Icon v-if="icon" :type='icon' />
        <span v-if="$slots && $slots.default">
                <slot></slot>
            </span>
    </a>
</template>
<script lang="babel">
    import Icon from '../icon';
    export default {
        name: 'Button',
        data: () => ({
            prefixCls: 'am-button',
            clicked: false
        }),
        components:{
            Icon
        },
        props: {
            type: {
                type: String,
                default: 'primary'
            },
            size: String, //按钮大小
            icon: String, //按钮带图标
            
            loading: { //是否载入状态
                type: Boolean,
                default: false
            },
            ghost: { //设置幽灵背景
                type: Boolean,
                default: false
            },
            disabled: { //是否禁用
                type: Boolean,
                default: false
            },
            active:{ //是否有点击效果
                type: Boolean,
                default: true
            },
            radius: { //圆角大小
                type: String,
                default: "xs"
            },
            inline: {
                type: Boolean,
                default: false
            }, //是否设置为行内按钮
            across: {
                type: Boolean,
                default: false
            }, //是否设置为通栏展示
            className:String //自定义样式名称
        },
        computed: {
            btnClassObj() {
                let {
                    prefixCls,
                    type,
                    size,
                    loading,
                    radius,
                    ghost,
                    icon,
                    disabled,
                    inline,
                    across,
                    clicked,
                    active,
                    className
                } = this;
                let classObj = {};
                classObj['btn ' + prefixCls] = true;
                if (disabled) {
                    classObj[prefixCls + '-disabled'] = disabled;
                } else {
                    if (loading) {
                        classObj[prefixCls + '-loading ' + prefixCls + '-icon'] = loading;
                    } else if (icon) {
                        classObj[prefixCls + '-icon'] = true;
                    } else {
                        classObj[prefixCls + '-' + type] = type;
                    }
                }
                if (size) {
                    classObj[prefixCls + '-' + size] = size;
                }
                classObj[prefixCls + '-ghost'] = ghost;
                classObj[prefixCls + '-inline'] = inline;
                classObj[prefixCls + '-across'] = across;
                if (radius) {
                    classObj[prefixCls + '-radius-' + radius] = radius;
                }
                if(active){
                    classObj[prefixCls + '-active'] = clicked;
                }
                classObj[className] = className;
                return classObj;
            }
        },
        methods: {
            handleClick(event) {
                this.$emit('click', event);
            },
            handleTouch() {
                if (!this.disabled) {
                    this.clicked = !this.clicked;
                }
            }
        }
    }
</script>