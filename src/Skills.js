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
                    <li>&rArr; 熟悉 W3C 规范，能使用 HTML、CSS 和 JavaScript 以及 jQuery 做出像素级还原的静态页面</li>
                    <li>&rArr; 了解 AJAX、JSONP 等，能与后端程序员配合实现动态页面</li>
                    <li>&rArr; 了解算法、数据结构等基本知识，可以解决开发过程中常见的简单逻辑问题</li>
                    <li>&rArr; 了解 React 框架，可基于 React 实现web应用</li>
                </ul>
            </div>
        );
    }
}