<template>
    <div :style="`width:${$parent.barWidth}%;`" class="am-tabs-default-bar-tab" @click="click" :class="{ 'am-tabs-default-bar-tab-active': $parent.value === id }">
        <slot></slot>
        {{$parent.value}} - {{id}}
    </div>
</template>
<script>
export default {
    name: 'TabItem',
    props: ['id'],
    methods: {
        click() {
            this.$parent.$emit('input', this.id)
            this.$parent.updateLine();
        }
    }
};
</script>