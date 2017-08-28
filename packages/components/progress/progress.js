import Vue from 'vue';
import vProgress from './progress.vue';

vProgress.newInstance = (properties) => {
    const vnp = properties || {};

    const Instance = new Vue({
        data: vnp,
        render(h) {
            return h(vProgress, {
                props: vnp,
            });
        },
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const icvp = Instance.$children[0];

    return {
        update(options) {
            if ('percent' in options) {
                icvp.percent = options.percent;
            }
            if (options.status) {
                icvp.status = options.status;
            }
            if ('show' in options) {
                icvp.show = options.show;
            }
        },
        component: icvp,
        destroy() {
            document.body.removeChild(document.getElementsByClassName('am-progress')[0]);
        },
    };
};

export default vProgress;
