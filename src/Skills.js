import React, {Component} from 'react';
import './Skills.css';

export default class Skills extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Skills">
                <h1 className="title">专业技能</h1>
                <ul className="items">
                    <li><div>&rArr;</div><p> 熟悉 W3C 规范，熟练掌握<span className="highlight-1">HTML(5)</span>和常用<span className="highlight-1">CSS(3)</span>，能结合 JavaScript 以及 jQuery 做出对设计稿像素级还原的静态页面。</p></li>
                    <li><div>&rArr;</div><p> 熟悉<span className="highlight-1">原生JavaScript</span>，掌握如：原型、闭包、作用域链、面向对象、异步流程控制等重要概念，熟练使用ES6新特性。</p></li>
                    <li><div>&rArr;</div><p> 掌握<span className="highlight-2">面向对象思想</span>，能根据面向对象思想封装常用组件。</p></li>
                    <li><div>&rArr;</div><p> 熟悉<span className="highlight-1">React框架</span>，理解生命周期、异步更新、虚拟DOM 等重要概念，可基于 React 实现web应用，并有独立完成的项目实践（todoList，以及本简历展示应用）。</p></li>
                    <li><div>&rArr;</div><p> 了解<span className="highlight-1">AJAX</span>的原理及应用，了解 JSONP、CORS 等<span className="highlight-2">跨域</span>解决方案，能与后端程序员配合实现动态页面。</p></li>
                    <li><div>&rArr;</div><p> 熟悉<span className="highlight-1">HTTP 协议</span>以及浏览器渲染机制。</p></li>
                    <li><div>&rArr;</div><p> 了解<span className="highlight-2">npm&amp;Git</span>,，有相关使用经验，能使用Git工具对代码进行版本管理。</p></li>
                    <li><div>&rArr;</div><p> 了解<span className="highlight-2">算法</span>、数据结构等基本知识，可以解决开发过程中常见的逻辑问题。</p></li>
                    <li><div>&rArr;</div><p> 有 C/C++/C# 等C系语言使用经验，了解计算机系统知识，可以与后端开发人员无障碍沟通。</p></li>
                    <li><div>&rArr;</div><p> 追求优雅规范的代码风格。</p></li>
                </ul>
            </div>
        );
    }
}