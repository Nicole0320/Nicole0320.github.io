import React, {Component} from 'react';
import './Project.css'
import todoIMG from './images/todoList.png'
import fmIMG from './images/musicFM.png'
import searchIMG from './images/search.png'
import lightBoardIMG from './images/light-board.png'
import crawlerIMG from './images/crawler.png'

export default class Project extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Project">
                <h1 className="title">项目作品</h1>
                <ul>
                    <li className="project-list">
                        <h2 className="project-title">TodoList - 单页在线todo应用</h2>
                        <img src={todoIMG}/>
                        <p>todoList 是一个轻量的在线单页待办事项管理应用，支持注册、登录、使用注册邮箱找回密码，可在线对待办事项进行分组、增删改查等管理操作，对分组也同样支持增删改查等管理操作，云同步。视觉样式借鉴了 Wunderlist 的 UI 设计。</p>
                        <p><strong>部署：</strong>LeanCloud</p>
                        <p  className="tech">
                            <strong>技术栈：</strong>
                            <ul>
                                <li>React</li>
                                <li>Webpack</li>
                                <li>JavaScript</li>
                                <li>CSS</li>
                            </ul>
                        </p>
                        <p className="more">了解更多详情请移步GitHub</p>
                        <footer>
                            <a target="_blank" href="https://github.com/Nicole0320/react-project-1">GitHub</a>
                            <a target="_blank" href="https://nicole0320.github.io/react-project-1/build/index.html">Try it</a>
                        </footer>
                    </li>
                    <li className="project-list">
                        <h2 className="project-title">musicFM - 在线音乐电台</h2>
                        <img src={fmIMG}/>
                        <p>musicFM 是一个在线音乐播放器，利用开放音乐API，可在线播放音乐，进行播放、暂停、下一曲、调节音量、跳转播放进度等操作，还可以将当前音乐添加到本地的“喜爱音乐”列表，也可切换播放频道，在播放音乐时歌词根据播放进度自动滚动。</p>
                        <p className="tech">
                            <strong>技术栈：</strong>
                            <ul>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Ajax</li>
                                <li>CSS</li>
                            </ul>
                        </p>
                        <p className="more">了解更多详情请移步GitHub</p>
                        <footer>
                            <a target="_blank" href="https://github.com/Nicole0320/Music-FM">GitHub</a>
                            <a target="_blank" href="https://nicole0320.github.io/Music-FM/index.html">Try it</a>
                        </footer>
                    </li>
                    <li className="project-list">
                        <h2 className="project-title">在线图片搜索页</h2>
                        <img src={searchIMG}/>
                        <p>在线图片搜索页是一个根据关键字获取图片搜索结果的应用，利用 pixabay.com 的开源 API ，将输入内容作为关键字发送检索请求，返回检索结果，并即时在页面展示。为了获得更好的用户体验，返回结果展示时实现了木桶布局，使页面看起来更整洁，另外还利用懒加载思想，当向下滚动到底部时实时加载更多搜索结果。</p>
                        <p className="tech">
                            <strong>技术栈：</strong>
                            <ul>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>CSS</li>
                                <li>Ajax</li>
                            </ul>
                        </p>
                        <p className="more">了解更多详情请移步GitHub</p>
                        <footer>
                            <a target="_blank" href="https://github.com/Nicole0320/search-image-demo">GitHub</a>
                            <a target="_blank" href="https://nicole0320.github.io/search-image-demo/index">Try it</a>
                        </footer>
                    </li>
                    <li className="project-list">
                        <h2 className="project-title">模拟灯牌效果</h2>
                        <img src={lightBoardIMG}/>
                        <p>模拟灯牌这个小应用可以模拟彩色灯牌效果，使用手机浏览器打开预览页，可编辑文字内容，字体会自动调整大小填满屏幕，左右滑动可以切换到背面查看介绍，可根据背面的设置按钮，控制是否打开摇一摇变色和自动变色。通过这个小应用将手边的屏幕变成灯牌，环保又方便！</p>
                        <p className="tech">
                            <strong>技术栈：</strong>
                            <ul>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>CSS</li>
                                <li>Ajax</li>
                            </ul>
                        </p>
                        <p className="more">了解更多详情请移步GitHub</p>
                        <footer>
                            <a target="_blank" href="https://github.com/Nicole0320/Light-Board">GitHub</a>
                            <a target="_blank" href="https://nicole0320.github.io/Light-Board/index.html">Try it</a>
                        </footer>
                    </li>
                    <li className="project-list">
                        <h2 className="project-title">豆瓣房源爬虫</h2>
                        <img src={crawlerIMG}/>
                        <p>利用 Node.js 实现爬虫，爬取了豆瓣西安租房小组最新回复的100条帖子的内容，从 HTML 中解析出有用数据，再通过express将数据传到前端，展示在页面上，省去一个一个点开筛选租房信息的时间。后台使用 express 搭建，前端通过Ajax 向后台请求数据。</p>
                        <p className="tech">
                            <strong>技术栈：</strong>
                            <ul>
                                <li>Node.js</li>
                                <li>express</li>
                                <li>superagent</li>
                                <li>cheerio</li>
                                <li>async</li>
                                <li>JQuery</li>
                                <li>Ajax</li>
                            </ul>
                        </p>
                        <p className="more">了解更多详情请移步GitHub</p>
                        <footer>
                            <a target="_blank" href="https://github.com/Nicole0320/douban-group-crawler">GitHub</a>
                        </footer>
                    </li>
                </ul>
            </div>
        );
    }
}