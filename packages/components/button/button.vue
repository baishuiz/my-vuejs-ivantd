<template>
    <a role="button" :class="[btnClassObj]" :disabled="disabled" @click="handleClick($event)" @touchstart="handleTouch" @touchend="handleTouch">
        <v-icon v-if="loading" name='loading' />
        <v-icon v-if="icon" :name='icon' />
        <span v-if="$slots && $slots.default">
            <slot></slot>
        </span>
    </a>
</template>
<script lang="babel">
export default {
    name: 'Button',
    data: () => ({
        prefixCls: 'am-button',
        clicked: false
    }),
    props: {
        type: {
            type: String,
            default: 'primary'
        }, //按钮类型
        icon: String, //按钮带图标
        inline: {
            type: Boolean,
            default: false
        }, //是否设置为行内按钮
        across: {
            type: Boolean,
            default: false
        }, //是否设置为通栏展示
        size: String, //按钮大小
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
        }
    },
    computed: {
        btnClassObj() {
            let {
                prefixCls,
                type,
                size,
                loading,
                ghost,
                icon,
                disabled,
                inline,
                across,
                clicked
            } = this;
            let btnClass = {};
            btnClass['btn ' + prefixCls] = true;
            if (disabled) {
                btnClass[prefixCls + '-disabled'] = disabled;
            } else {
                if (loading) {
                    btnClass[prefixCls + '-loading ' + prefixCls + '-icon'] = loading;
                } else if (icon) {
                    btnClass[prefixCls + '-icon'] = true;
                } else {
                    btnClass[prefixCls + '-' + type] = type;
                }
            }
            if (size) {
                btnClass[prefixCls + '-' + size] = size;
            }
            btnClass[prefixCls + '-ghost'] = ghost;
            btnClass[prefixCls + '-inline'] = inline;
            btnClass[prefixCls + '-across'] = across;

            btnClass[prefixCls + '-active'] = clicked;

            return btnClass;
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