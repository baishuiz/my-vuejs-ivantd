import code from './code';
import footer from './footer';
import header from './header';
import nav from './nav';

const componentNamePrefix = 'v';

const compnents = {
  code,
  footer,
  header,
  nav
}

for (let item of Object.values(compnents)) {
  if (!item.install && item.name) {
    item.install = function (Vue, prefix = componentNamePrefix) {
      Vue.component(prefix + item.name, item);
    };
  }
}

const install = function (Vue, opts = {}) {
  if (install.installed) return;

  for (let item of Object.values(compnents)) {
    if (item.install) {
      Vue.use(item, opts.prefix);
    }
  }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  ...compnents
}