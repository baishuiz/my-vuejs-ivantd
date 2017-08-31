<template>
    <svg @click="handleIconClick($event)" :class="iconClassName" v-html="svg.use" :width="svg.width" :height="svg.height" :viewBox="svg.viewBox" :xmlns="svg.xmlns"></svg>
    <!-- <svg :class="iconClassName" xmlns="http://www.w3.org/2000/svg" width="59.75" height="60.25" viewBox="0 -2 59.75 60.25"><path fill="#ccc" d="M29.691-.527c-15.648 0-28.333 12.685-28.333 28.333s12.685 28.333 28.333 28.333c15.648 0 28.333-12.685 28.333-28.333S45.339-.527 29.691-.527zm.184 53.75c-14.037 0-25.417-11.379-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.379 25.417 25.417-11.38 25.416-25.417 25.416z"/><path fill="none" stroke="#CDA76E" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="M56.587 29.766c.369-7.438-1.658-14.699-6.393-19.552"/></svg> -->
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