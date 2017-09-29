# ivantd

>ivantd 是一套基于 vue.js 和 Ant Design Mobile 样式 的移动端 UI 组件库，旨在帮助开发者提升产品体验和开发效率、降低维护成本。

## 特性
- 丰富的组件，涵盖常用场景
- 基于vue组件化开发，数据驱动视图
- 封装复杂性，提供简单友好的api
- 基于 Ant Design Mobile 样式

## 引入
使用 npm
````javascript
//安装组件
npm install ivantd  -save
//引入样式文件
import 'vantd/package/style/ivantd.min.css'
//引入全量组件
import iVantd from 'ivantd'
Vue.use(iVantd)

//或者部分引用
import { button } from 'ivantd'
Vue.use(button)
````
或使用  \<script\> 全局引用
````javascript
<link rel="stylesheet" href="ivantd.min.css"> 
<script type="text/javascript" src="ivantd.min.js"></script> 
````
示例
````javascript
<template>
    <v-button>基础按钮</v-button>
</template>
````
## 版本
<a href="https://www.npmjs.com/package/ivantd" target="_blank"> 
    <img src="http://img.shields.io/npm/v/ivantd.svg"> 
</a>
