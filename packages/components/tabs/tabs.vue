<template>
    <div class="am-tabs am-tabs-horizontal am-tabs-top">
        <div class="am-tabs-tab-bar-wrap">
            <div class="am-tabs-default-bar am-tabs-default-bar-top" style="background:#fff;">
                <div class="am-tabs-default-bar-content">
                    <slot></slot>
                    <div class="am-tabs-default-bar-underline" :style="`width: ${barWidth}%; left: ${barOffset}%; transform: translate3d(${barOffset}, 0, 0); transitionDuration: 0.5s`"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    data() {
        return {
            size: 0,
            barOffset: 0,
        }
    },
    props: {
        value: {},
    },
    computed: {
        barWidth() {
            return 100 / this.size;
        },
    },
    methods: {
        getTabItems() {
            return this.$children.filter(item => item.$options.name === 'TabItem');
        },
        updateLine() {
            this.$nextTick(() => {
                this.getTabItems().map((item, index) => {
                    if (item.id === this.value) {
                        this.barOffset = this.barWidth * index;
                        return;
                    }
                });
            });
        }

    },
    mounted() {
        this.size = this.getTabItems().length;
        this.updateLine();
    }
}
</script>