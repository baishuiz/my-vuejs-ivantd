# ivantd

> Ant Design components built with Vue.js

## 特性
- 丰富的组件，涵盖常用场景
- 基于vue组件化开发，数据驱动视图
- 封装复杂性，提供简单友好的api
- 基于ant design样式优化

## 引入
使用npm
```
npm install ivantd -S

import Vue from 'vue'
//import css
import 'ivantd/package/style/ivantd.min.css'

//import components
import ivantd from 'ivantd'
Vue.use(ivantd)

//OR
import {alert} from 'ivantd'
Vue.use(alert)
```
或使用 &lt;script&gt; 全局引用
```
<link rel="stylesheet" href="ivantd.min.css"> 
<script type="text/javascript" src="ivantd.min.js"></script> 
```
更多说明，请查看我们的[在线文档](https://github.com/ruyangit/ivantd)。