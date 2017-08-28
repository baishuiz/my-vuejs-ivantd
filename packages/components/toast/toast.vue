<template>
    <transition name="am-fade">
        <div :class="wrapClass">
            <div v-if="icon" :class="prefixCls+'-notice-content'">
                <div :class="prefixCls+'-text '+prefixCls+'-text-icon'">
                    <v-icon :name="icon" size="lg" />
                    <div :class="prefixCls+'-text-info'" v-if="content" v-html="content"></div>
                </div>
            </div>
            <div v-else :class="prefixCls+'-notice-content'">
                <div :class="prefixCls+'-text'">
                    <div  v-if="content" v-html="content"></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Icon from '../icon';
export default {
    name: 'Toast',
    data: function() {
        return {
            prefixCls: 'am-toast',
            icon: '',
            content: '',//提示的内容
            mask: true,//是否显示透明蒙层，防止触摸穿透
        }
    },
    components: {
        Icon
    },
    computed: {
        wrapClass() {
            let {
                prefixCls,
                mask
            } = this;
            let classObj = {};
            classObj[prefixCls] = true;
            classObj[prefixCls + '-mask'] = mask;
            classObj[prefixCls + '-nomask'] = !mask;
            return classObj;
        },
    }
}
</script>