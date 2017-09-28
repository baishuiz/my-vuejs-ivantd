<template>
    <div>
        <label :class="wrapCls">
            <input :name="name" type="checkbox" :class="[prefixCls + '-checkbox']" :disabled="disabled" :checked="checked" :value="checked" @click="handleClick($event)" />
            <div :class="fackInputCls" />
        </label>
    </div>
</template>

<script>
export default {
    name: 'Switch',
    data: function() {
        return {
            prefixCls: 'am-switch',
            checked: this.value,
        }
    },
    props: {
        name: {
            type: String,
            require: true
        },
        value: Boolean,
        disabled: { //是否禁用
            type: Boolean,
            default: false
        },
        platform: String,
        color: String,
    },
    computed: {
        wrapCls() {
            let {
                prefixCls,
                platform,
                } = this;
            let classObj = {};
            classObj[prefixCls] = true;
            if (platform === 'android')
                classObj[prefixCls + '-android'] = true
            return classObj;
        },
        fackInputCls() {
            let {
                disabled
                } = this;
            let classObj = {};
            classObj[`checkbox`] = true;
            classObj[`checkbox-disabled`] = disabled;
            return classObj;
        }
    },
    methods: {
        handleClick(event) {
            if (this.disabled) return;
            this.checked = !this.checked;
        }
    },
    watch:{
        checked(val){
            this.$emit('change', val);
        }
    }
}
</script>
