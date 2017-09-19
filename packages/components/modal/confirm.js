import Vue from 'vue';
import vModal from './modal';

vModal.newInstance = (properties) => {
    const vnp = properties || {};
    const Instance = new Vue({
        data: Object.assign({}, vnp, {
            visible: false,
            closable: false,
            maskClosable: false,
            thumb: '',
            thumbStyle: '',
            title: '',
            body: '',
            buttons: [],
            loading: false,
        }),
        render(h) {
            return h(vModal, {
                props: {
                    closable: this.closable,
                    maskClosable: this.maskClosable,
                    thumb: this.thumb,
                    thumbStyle: this.thumbStyle,
                    title: this.title,
                    buttons: this.buttons,
                    loading: this.loading,
                },
                domProps: {
                    value: this.visible,
                },
                on: {
                    input: (status) => {
                        this.visible = status;
                    },
                },
            }, [h('div', { domProps: { innerHTML: this.body } })]);
        },
        methods: {
            cancel() {
                this.$children[0].visible = false;
                this.onCancel();
                this.remove();
            },
            ok() {
                this.$children[0].visible = false;
                this.remove();
                this.onOk();
            },
            remove() {
                setTimeout(() => {
                    this.destroy();
                }, 300);
            },
            destroy() {
                this.$destroy();
                document.body.removeChild(this.$el);
                this.onRemove();
            },
            onOk() { },
            onCancel() { },
            onRemove() { },
        },
    });
    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const modal = Instance.$children[0];
    return {
        show(props) {
            if ('closable' in props) {
                modal.$parent.closable = props.closable;
            }
            if ('maskClosable' in props) {
                modal.$parent.maskClosable = props.maskClosable;
            }
            if ('thumb' in props) {
                modal.$parent.thumb = props.thumb;
            }
            if ('thumbStyle' in props) {
                modal.$parent.thumbStyle = props.thumbStyle;
            }
            if ('title' in props) {
                modal.$parent.title = props.title;
            }
            if ('content' in props) {
                modal.$parent.body = props.content;
            }
            if ('buttons' in props) {
                modal.$parent.buttons = props.buttons;
            }
            if ('loading' in props) {
                modal.$parent.loading = props.loading;
            }
            modal.$parent.onRemove = props.onRemove;
            modal.visible = true;
        },
        component: modal,
        remove() {
            modal.visible = false;
            // modal.$parent.buttonLoading = false;
            modal.$parent.remove();
        },
    };
};

export default vModal;
