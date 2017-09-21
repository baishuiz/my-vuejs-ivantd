<template>
    <div v-transfer-dom :data-transfer="transfer">
        <transition :name="transitionNames[1]">
            <div :class="maskClasses" v-show="visible" @click="mask"></div>
        </transition>
        <div :class="wrapClasses" @click="handleWrapClick">
            <transition :name="transitionNames[0]" @after-leave="animationFinish">
                <div :class="classes" :style="mainStyles" v-show="visible">
                    <div :class="[prefixCls + '-content']">
                        <a :class="[prefixCls + '-close']" v-if="closable" @click="close">
                            <!-- <slot name="close"> -->
                            <span :class="[prefixCls + '-close-x']"></span>
                            <!-- </slot> -->
                        </a>
                        <div :class="[prefixCls + '-header']" v-if="title">
                            <!-- <slot name="header"> -->
                            <img :src="thumb" v-if="thumb" :style="thumbStyle">
                            <div :class="[prefixCls + '-title']" v-html="title"></div>
                            <!-- </slot> -->
                        </div>
                        <div :class="[prefixCls + '-body']">
                            <slot></slot>
                        </div>
                        <div :class="[prefixCls + '-footer']" v-if="buttons">
                            <!-- <slot name="footer"> -->
                            <!-- am-modal-button-group-v -->
                            <!-- am-modal-button-group-h -->
                            <div :class="footerClasses">
                                <a :class="[prefixCls + '-button']" @click="b.action" v-for="(b,index) in buttons" :key="index">{{b.text}}</a>
                                <!-- <a class="am-modal-button" @click="ok()">确认</a> -->
                            </div>
                            <!-- <v-button type="text" size="large" @click.native="cancel">{{ localeCancelText }}</i-button>
                                                                                                                <v-button type="primary" size="large" :loading="buttonLoading" @click.native="ok">{{ localeOkText }}</i-button> -->
                            <!-- </slot> -->
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import TransferDom from '../../directives/transfer-dom';
export default {
    name: 'Modal',
    directives: { TransferDom },
    data: function() {
        return {
            prefixCls: 'am-modal',
            wrapShow: false,
            visible: this.value
        }
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        closable: {
            type: Boolean,
            default: true
        },
        maskClosable: {
            type: Boolean,
            default: true
        },
        thumb: String,
        thumbStyle: String,
        title: {
            type: String
        },
        width: {
            type: [Number, String],
            default: 520
        },
        // okText: {
        //     type: String
        // },
        // cancelText: {
        //     type: String
        // },
        loading: {
            type: Boolean,
            default: false
        },
        // styles: {
        //     type: Object
        // },
        // className: {
        //     type: String
        // },
        // for instance
        // footerHide: {
        //     type: Boolean,
        //     default: false
        // },
        // scrollable: {
        //     type: Boolean,
        //     default: false
        // },
        buttons: {
            type: Array,
        },
        transitionNames: {
            type: Array,
            default() {
                return ['am-fade', 'am-fade'];
            }
        },
        transfer: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        wrapClasses() {
            return [
                `${this.prefixCls}-wrap`,
                {
                    [`${this.prefixCls}-hidden`]: !this.wrapShow,
                    // [`${this.className}`]: !!this.className
                }
            ];
        },
        maskClasses() {
            return `${this.prefixCls}-mask`;
        },
        classes() {
            return [
                `${this.prefixCls}`,
                `${this.prefixCls}-transparent`,
            ];
        },
        footerClasses() {
            if (this.buttons && this.buttons.length == 2) {
                return [
                    `${this.prefixCls}-button-group-h`,
                    `${this.prefixCls}-button-group-normal`,
                ];
            }
            return [
                `${this.prefixCls}-button-group-v`,
                `${this.prefixCls}-button-group-normal`,
            ];
        },
        mainStyles() {
            let style = {};
            const width = parseInt(this.width);
            const styleWidth = {
                width: width <= 100 ? `${width}%` : `${width}px`
            };
            const customStyle = this.styles ? this.styles : {};
            Object.assign(style, styleWidth, customStyle);
            return style;
        },
    },
    methods: {
        close() {
            this.visible = false;
            this.$emit('input', false);
            this.$emit('on-cancel');
            // console.log('on-cancel')
        },
        mask() {
            if (this.maskClosable) {
                this.close();
            }
        },
        handleWrapClick(event) {
            // use indexOf,do not use === ,because ivu-modal-wrap can have other custom className
            const className = event.target.getAttribute('class');
            if (className && className.indexOf(`${this.prefixCls}-wrap`) > -1) this.mask();
        },
        cancel() {
            this.close();
        },
        ok() {
            if (this.loading) {
                this.buttonLoading = true;
            } else {

                this.visible = false;
                this.$emit('input', false);
            }
            // console.log('on-ok')
            this.$emit('on-ok');
        },
        animationFinish() {
            this.$emit('on-hidden');
        },
    },
    mounted() {
        if (this.visible) {
            this.wrapShow = true;
        }
        // let showHead = true;
        // if (this.$slots.header === undefined && !this.title) {
        //     showHead = false;
        // }
        // this.showHead = showHead;
        // ESC close
        // document.addEventListener('keydown', this.EscClose);
    },
    watch: {
        value(val) {
            this.visible = val;
        },
        visible(val) {
            if (val === false) {
                //     this.buttonLoading = false;
                this.timer = setTimeout(() => {
                    this.wrapShow = false;
                    // this.removeScrollEffect();
                }, 300);
            } else {
                if (this.timer) clearTimeout(this.timer);
                this.wrapShow = true;
                //     if (!this.scrollable) {
                //         this.addScrollEffect();
                //     }
            }
            // this.broadcast('Table', 'on-visible-change', val);
        },
        // loading(val) {
        //     if (!val) {
        //         this.buttonLoading = false;
        //     }
        // },
        // scrollable(val) {
        //     if (!val) {
        //         this.addScrollEffect();
        //     } else {
        //         this.removeScrollEffect();
        //     }
        // },
        // title(val) {
        //     if (this.$slots.header === undefined) {
        //         this.showHead = !!val;
        //     }
        // }
    }
}
</script>

<style lang='less'>
@className: am-fade;
@keyframeName: amFade;

.motion-common() {
    animation-duration: .2s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(.55, 0, .55, .2);
}

.@{className}-enter-active,
.@{className}-appear {
    .motion-common();
    animation-play-state: paused;
}

.@{className}-leave-active {
    .motion-common();
    animation-play-state: paused;
}

.@{className}-enter-active,
.@{className}-appear {
    animation-name:~"@{keyframeName}In";
    animation-play-state: running;
}

.@{className}-leave-active {
    animation-name:~"@{keyframeName}Out";
    animation-play-state: running;
}

.@{className}-enter-active,
.@{className}-appear {
    opacity: 0;
    animation-timing-function: linear;
}

.@{className}-leave-active {
    animation-timing-function: linear;
}

@keyframes amFadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes amFadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

</style>