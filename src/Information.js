import React, {Component} from 'react';
import './iconfont/iconfont.css';
import './Information.css';
export default class Information extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Information">
                <h1 className="title">狄璠</h1>
                <h3>应聘职位：前端开发工程师</h3>
                <p>只因兴趣，所以选择；只因热爱，所以为每一像素执着</p>
                <ul className="contact">
                    <li><i className="iconfont icon-address"></i> | 当前坐标：西安</li>
                    {/*<li><i className="iconfont icon-mudedi"></i> | 目标城市：杭州、北京、西安</li>*/}
                    <li><i className="iconfont icon-tele"></i> | 联系电话：18740456705</li>
                    <li><i className="iconfont icon-youxiang"></i> | 电子邮箱：difan0320@126.com</li>
                    <li><i className="iconfont icon-github"></i> | <a href="https://github.com/Nicole0320" target="_blank">GitHub：点击进入</a></li>
                </ul>
            </div>
        );
    }
}