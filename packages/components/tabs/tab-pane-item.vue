<template>
    <div v-show="id === $parent.currentActive" class="am-tabs-pane-wrap">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'TabPaneItem',
    props: ['id']
};
</script>