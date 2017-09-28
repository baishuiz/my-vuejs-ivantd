<template>
    <div class="am-tabs-content-wrap">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'TabPane',
    data() {
        return {
            activeItems: [],
            pageWidth: 0,
            currentActive: this.value
        };
    },
    props: {
        value: {},
    },
    watch: {
        value(val) {
            this.currentActive = val;
        },
        currentActive(val, oldValue) {
            this.$emit('input', val);
        }
    }
};
</script>