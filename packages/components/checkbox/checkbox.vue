<template>
    <div :class="`${prefixCls}-agree`" @change="$emit('change', currentValue)">
        <label :class="`${prefixCls}-wrapper ${prefixCls}-agree-label` ">
            <span :class="[`${prefixCls}`,{[`${prefixCls}-disabled`]:disabled,[`${prefixCls}-checked`]: currentValue}]">
                <span :class="`${prefixCls}-inner`"></span>
                <input type="checkbox" :class="`${prefixCls}-input`" :disabled="disabled" :value="value" v-model="currentValue">
            </span>
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
    name: 'Checkbox',
    data: function() {
        return {
            prefixCls: 'am-checkbox',
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
        label: {
            type: [String, Number, Boolean]
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