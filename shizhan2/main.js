import Vue from 'vue'	
/*
1.import Vue from 'vue' 解析为 const Vue = require('vue')。
2.require 判断 vue 是否为 nodejs 核心包，是则直接导入，否则继续往下走。
3.vue 非 nodejs 核心包，判断 vue 是否为 '/' 根目录开头，显然不是，继续往下走。
4.vue 是否为 './'、'/' 或者 '../' 开头，显然不是，继续往下走。
5.以上条件都不符合，读取项目目录下 node_modules 包里的包。
6.require查找 package.json 下是否定义了 main 字段，是则读取 main 字段下定义的入口。
7.如果没有 package.json 文件，则读取文件夹下的 index.js 或者 index.node。
8.如果都 package.json、index.js、index.node 都找不到，抛出错误 Error: Cannot find module 'some-library'。
*/
import App from './App' 
/*实际上是import App from './App.vue';引入之后作为组件展示的*/
Vue.config.productionTip = false
/*用于阻止 vue 在启动时生成生产提示。*/
App.mpType = 'app'
/*设置了一个mpType的属性值，其值为app。这个值是为了与后面要讲的小程序页面组件所区分开来*/
const app = new Vue({
    ...App/* ES6的对象扩展，相当于把App这个对象里注入了一个同名属性*/
})
app.$mount()
/*$mount挂载的方法将实例化的内容和他对HTML的关联分开，可以更直观的展现。*/

