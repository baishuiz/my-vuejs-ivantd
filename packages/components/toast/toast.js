import Vue from 'vue';
import vToast from './toast.vue';

vToast.newInstance = (properties) => {
    const vnp = properties || {};

    const Instance = new Vue({
        data: vnp,
        render(h) {
            return h(vToast, {
                props: vnp,
            });
        },
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const icvp = Instance.$children[0];

    return {
        update(options) {
            if ('mask' in options) {
                icvp.mask = options.mask;
            }
            if ('content' in options) {
                icvp.content = options.content;
            }
            const iconTypes = ({
                'info': null,
                'success': 'check-circle-o',
                'warning': 'exclamation-circle',
                'error': 'cross-circle',
                'loading': 'loading',
            })[options.type];
            if (iconTypes) {
                icvp.icon = iconTypes;
            }
        },
        component: icvp,
        destroy() {
            document.body.removeChild(document.getElementsByClassName('am-toast')[0]);
        },
    };
};

export default vToast;
