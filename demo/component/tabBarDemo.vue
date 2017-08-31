<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>TabBar
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'name',
    data: function() {
        return {
            animating: false
        }
    },
    methods: {
        show() {
            this.animating = !this.animating;

            setTimeout(() => {
                this.animating = false;
            }, 3000);
        }
    }
}
</script>

<style >

.special-badge .am-list-line {
  padding-right: 0;
}
.special-badge .am-list-line .am-list-extra {
  padding: 0;
  height: 100%;
}
.special-badge .am-badge {
  transform: rotate(45deg);
  transform-origin: right bottom;
  right: 0;
  top: 0.26rem;
  width: 1rem;
}
.special-badge .am-badge-text {
  border-radius: 0.02rem;
}
</style>