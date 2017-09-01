import 'normalize.css/normalize.css';
import './style/index.less';
import config from './utils/config';

import button from './components/button';
import icon from './components/icon';
import flex from './components/flex';
import whiteSpace from './components/white-space';
import wingBlank from './components/wing-blank';

import grid from './components/grid';

import list from './components/list';
import progress from './components/progress';
import toast from './components/toast';
import activityIndicator from './components/activity-indicator';
import badge from './components/badge';

// import locale from './locale';
import { version } from '../package.json';

const components = {
    button,
    icon,
    flex,
    flexItem: flex.item,
    whiteSpace,
    wingBlank,
    grid,
    list,
    listItem: list.item,
    progress,
    toast,
    activityIndicator,
    badge,
};


// 注册全局
progress.install = function (Vue) {
    Vue.$progress = Vue.prototype.$progress = progress;
};

toast.install = function (Vue) {
    Vue.$toast = Vue.prototype.$toast = toast;
};

for (const item of Object.values(components)) {
    if (!item.install && item.name) {
        item.install = function (Vue, prefix = config.componentNamePrefix) {
            Vue.component(prefix + item.name, item);
        };
    }
}

const install = function (Vue, opts = {}) {
    if (install.installed) return;
    // locale.use(opts.locale);
    // locale.i18n(opts.i18n);

    for (const item of Object.values(components)) {
        if (item.install) {
            Vue.use(item, opts.prefix);
        }
    }
};


// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default { install, version, ...components }