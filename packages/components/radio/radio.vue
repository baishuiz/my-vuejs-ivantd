<template>
        <label :class="`${prefixCls}-wrapper` " @change="$emit('change', currentValue)">
            <span :class="[`${prefixCls}`,{[`${prefixCls}-disabled`]:disabled,[`${prefixCls}-checked`]: currentValue}]">
                <span :class="`${prefixCls}-inner`"></span>
                <input type="radio" :class="`${prefixCls}-input`" :disabled="disabled" :value="value" v-model="currentValue">
            </span>
            <slot></slot>
        </label>
</template>

<script>
export default {
    name: 'Radio',
    data: function() {
        return {
            prefixCls: 'am-radio',
            currentValue: this.value,
        }
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number, Boolean],
            default: false
        },
    },
    watch: {
        value(val) {
            this.currentValue = val;
        },
        currentValue(val) {
            this.$emit('input', val);
        }
    },

}
</script>