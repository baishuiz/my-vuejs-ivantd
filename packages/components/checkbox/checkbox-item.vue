<template>
    <div @change="$emit('change', currentValue)">
        <v-list-item v-for="(option,index) in options" align="middle" :class="[`${prefixCls}-item`,{[`${prefixCls}-item-disabled`]: option.disabled||max <= currentValue.length}]" :key="index">
            <div v-text="option.label || option"></div>
            <div slot="extra">
                <label :class="`${prefixCls}-wrapper`" slot="title">
                    <span :class="[`${prefixCls}`,{[`${prefixCls}-disabled`]: option.disabled||max <= currentValue.length,[`${prefixCls}-checked`]: currentValue.includes(option.value || option)}]">
                        <span :class="`${prefixCls}-inner`"></span>
                        <input type="checkbox" :class="`${prefixCls}-input`" :disabled="option.disabled" :value="option.value || option" v-model="currentValue">
                    </span>
                </label>
            </div>
        </v-list-item>
    </div>
</template>

<script>
import { listItem as vListItem } from '../list';
export default {
    name: 'CheckboxItem',
    components: { vListItem },
    data: function() {
        return {
            prefixCls: 'am-checkbox',
            currentValue: this.value,
        }
    },
    props: {
        max: Number,
        options: {
            type: Array,
            required: true
        },
        value: Array
    },
    computed: {
        limit() {
            return this.max < this.currentValue.length;
        },
    },
    watch: {
        value(val) {
            this.currentValue = val;
        },
        currentValue(val) {
            if (this.limit) val.pop();
            this.$emit('input', val);
        }
    },
}
</script>