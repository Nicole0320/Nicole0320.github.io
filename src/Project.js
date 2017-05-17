import React, {Component} from 'react';
import './Project.css'

export default class Project extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="MainPage Project">
                <h1 className="title">项目作品</h1>
                <ul className="projiect-list">
                    <li>
                        <h2>基于React的todoList</h2>
                        <p>可登录账号管理自己的待办事项，可添加事项、标记完成状态、删除已添加的事项等。</p>
                        <div className="cover">
                            <a href="#">Demo</a>
                            <a href="#">GitHub</a>
                        </div>
                    </li>
                    <li>
                        <h2>基于jQuery图片搜索页面</h2>
                        <p>可通过输入关键词搜索图片，在当前页面展示搜索结果，向下滚动到底后可加载更多搜索结果</p>
                        <div className="cover">
                            <a href="#">Demo</a>
                            <a href="#">GitHub</a>
                        </div>
                    </li>
                    <li>
                        <h2>我的个人简历</h2>
                        <p>基于React的个人简历页面</p>
                        <div className="cover">
                            <a href="#">Demo</a>
                            <a href="#">GitHub</a>
                        </div>
                    </li>
                    <li>
                        <h2>原生JS与jQuery实现的常见效果</h2>
                        <p>常见如轮播、懒加载等页面效果</p>
                        <div className="cover">
                            <a href="#">Demo</a>
                            <a href="#">GitHub</a>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}