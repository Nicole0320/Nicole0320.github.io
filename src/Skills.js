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
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Ajax</li>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>算法</li>
                    <li>计算机操作系统基础</li>
                    <li>数据结构</li>
                </ul>
            </div>
        );
    }
}