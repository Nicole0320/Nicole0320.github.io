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
                <ul className="tags">
                    <li>&rArr; 熟悉 W3C 规范，熟练掌握 HTML(5)和常用 CSS(3)，能结合 JavaScript 以及 jQuery 做出对设计稿像素级还原的静态页面。</li>
                    <li>&rArr; 熟悉原生 JavaScript，掌握如：原型、闭包、作用域链、面向对象、异步流程控制等重要概念，熟练使用ES6新特性。</li>
                    <li>&rArr; 掌握面向对象思想，能根据面向对象思想封装常用插件。</li>
                    <li>&rArr; 熟悉 React 框架，理解生命周期、异步更新、虚拟DOM 等重要概念，可基于 React 实现web应用，并有独立完成的项目实践（todoList，以及本简历展示应用）。</li>
                    <li>&rArr; 了解 AJAX 的原理及应用，了解 JSONP、CORS 等跨域解决方案，能与后端程序员配合实现动态页面。</li>
                    <li>&rArr; 熟悉 HTTP 协议以及浏览器渲染机制。</li>
                    <li>&rArr; 了解 npm&amp;Git，有相关使用经验，能使用Git工具对代码进行版本管理。</li>
                    <li>&rArr; 了解算法、数据结构等基本知识，可以解决开发过程中常见的逻辑问题。</li>
                    <li>&rArr; 有 C/C++/C# 等C系语言使用经验，了解计算机系统知识，可以与后端开发人员无障碍沟通。</li>
                    <li>&rArr; 追求优雅规范的代码风格。</li>
                </ul>
            </div>
        );
    }
}