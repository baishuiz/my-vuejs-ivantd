import Vue from 'vue';
import vProgress from '../progress';

vProgress.newInstance = (properties) => {
    const vnp = properties || {};
    const Instance = new Vue({
        name: 'LoadingBar',
        data: {
            percent: 0,
            show: false,
        },
        render(h) {
            return h(vProgress, {
                props: Object.assign({}, vnp, {
                    unfilled: false,
                    percent: this.percent,
                    show: this.show,
                }),
            });
        },
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const LoadingBar = Instance.$children[0];

    return {
        update(options) {
            if ('show' in options) {
                LoadingBar.$parent.show = options.show;
            }
            if ('percent' in options) {
                LoadingBar.$parent.percent = options.percent;
            }
        },
        component: LoadingBar,
        destroy() {
            document.body.removeChild(document.getElementsByClassName('am-progress')[0]);
        },
    };
};

export default vProgress;
