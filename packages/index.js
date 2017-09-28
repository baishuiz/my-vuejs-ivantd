import 'normalize.css/normalize.css';

import config from './utils/config';

import button from './components/button';
import icon from './components/icon';
import { flex, flexItem } from './components/flex';
import whiteSpace from './components/white-space';
import wingBlank from './components/wing-blank';

import grid from './components/grid';

import { list, listItem } from './components/list';
import { card, cardHeader, cardBody, cardFooter } from './components/card';
import progress from './components/progress';
import loadingBar from './components/loading-bar';
import toast from './components/toast';
import activityIndicator from './components/activity-indicator';
import badge from './components/badge';
import modal from './components/modal';
import { checkbox, checkboxItem } from './components/checkbox';

import { radioItem } from './components/radio';
import vSwitch from './components/switch';
import { tabs, tabItem, tabPane, tabPaneItem } from './components/tabs';
import imagePicker from './components/image-picker';
import pickerView from './components/picker-view';
import popup from './components/popup';

// import locale from './locale';
import { version } from '../package.json';

const components = {
    button,
    icon,
    flex,
    flexItem,
    whiteSpace,
    wingBlank,
    grid,
    list,
    listItem,
    progress,
    toast,
    activityIndicator,
    badge,
    card,
    cardHeader,
    cardBody,
    cardFooter,
    modal,
    checkbox,
    checkboxItem,
    radioItem,
    vSwitch,
    loadingBar,
    tabs,
    tabItem,
    tabPane,
    tabPaneItem,
    imagePicker,
    pickerView,
    popup,
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

    // 注册全局
    Vue.$loadingBar = Vue.prototype.$loadingBar = loadingBar;
    Vue.$toast = Vue.prototype.$toast = toast;
    Vue.$modal = Vue.prototype.$modal = modal;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    button,
    icon,
    flex,
    flexItem,
    whiteSpace,
    wingBlank,
    grid,
    list,
    listItem,
    progress,
    toast,
    activityIndicator,
    badge,
    card,
    cardHeader,
    cardBody,
    cardFooter,
    modal,
    checkbox,
    checkboxItem,
    radioItem,
    vSwitch,
    loadingBar,
    tabs,
    tabItem,
    tabPane,
    tabPaneItem,
    imagePicker,
    pickerView,
    popup,
};

export default {
    version,
    install,
};
