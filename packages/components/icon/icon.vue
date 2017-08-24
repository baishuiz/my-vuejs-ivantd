<template>
    <svg @click="handleIconClick($event)" :class="iconClassName" v-html="svg.use" :width="svg.width" :height="svg.height" :viewBox="svg.viewBox" :xmlns="svg.xmlns"></svg>
</template>

<script>
export default {
    name: 'Icon',
    data(){
        return {
            prefixCls: 'am-icon'
        }
    },
    props: {
        name: {
            type: String,
            required: true
        },
        size: {
            type: String,
            default: 'md',
        },
        className: String
    },
    computed:{
        iconClassName() {
            let {
                prefixCls,
                name,
                size,
                className
            } = this;
           
            let iconClass = {};
            iconClass[prefixCls] = true;
            iconClass[prefixCls + '-' + name] = name;
            iconClass[prefixCls + '-' + size] = size;
            iconClass[className] = className;
            return iconClass;
        },
        svg(){
             let html = require(`!html-loader?module.exports=!./style/assets/`+this.name+`.svg`);
             let obj = document.createElement('div');
             obj.innerHTML = html
             let svg = obj.getElementsByTagName('svg');
             return {
                 viewBox:svg[0].getAttribute('viewBox'),
                 xmlns:svg[0].getAttribute('xmlns'),
                 width:svg[0].getAttribute('width'),
                 height:svg[0].getAttribute('height'),
                 use:svg[0].innerHTML
             }
        }
    },
    methods: {
        handleIconClick(event) {
            this.$emit('click', event);
        }
    }
};
</script>

<style scoped>

</style>