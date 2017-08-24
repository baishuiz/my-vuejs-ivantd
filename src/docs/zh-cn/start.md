# ivantd

ivantd 是一套基于 vue.js 和 antd-mobile样式 的移动端 UI 组件库，旨在帮助开发者提升产品体验和开发效率、降低维护成本。

## 特性
- 丰富的组件，涵盖常用场景
- 基于vue组件化开发，数据驱动视图
- 封装复杂性，提供简单友好的api
- 基于antd-mobile样式

## 引入
使用npm
````javascript
    npm install ivantd  -save

    import Vue from 'vue'

    //import css
    import 'vantd/package/style/ivantd.min.css'

    //import components
    import iVantd from 'ivantd'
    Vue.use(iVantd)

    //OR
    import {button} from 'ivantd'
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
        <v-button>按钮</v-button>
    </template>

````
效果
<v-button size='small'>按钮</v-button>
## 版本
<br>
<a href="https://www.npmjs.com/package/ivantd" target="_blank"> 
    <img src="http://img.shields.io/npm/v/ivantd.svg"> 
</a> 
<br><br>

## 相关开源项目
ivantd 部分代码参考了以下项目：
- <a href="https://github.com/ant-design/ant-design/" target="_blank">Ant Design</a>
- <a href="https://github.com/ant-design/mobile-ant-design/" target="_blank">Ant Design Mobile</a>
## 谁在使用
- <a href="http://www.fomoney.com/" target="_blank">复星金服</a>
- <a href="http://www.fomoney.com/" target="_blank">掌星宝</a>
- <a href="http://www.fosunling.com/" target="_blank">星灵资产</a>