import React, {Component} from 'react';
import './Exprience.css';

export default class Exprience extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="MainPage Exprience">
                <h1 className="title">个人经历</h1>
                <h2>西安电子科技大学 <span className="time">2011-2015</span></h2>
                <p>软件学院 | 软件工程 | 本科</p>
                <h2>西安侏罗纪软件科技有限公司 <span className="time">2016-2017</span></h2>
                <p>C++程序员，负责软件开发、日常维护及用户认证相关工作</p>
            </div>
        );
    }
}