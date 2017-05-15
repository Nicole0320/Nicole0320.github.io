import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './../public/iconfont/iconfont.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside>
          <h1>狄璠</h1>
          <h3>Di Fan</h3>
          <h2>前端开发工程师</h2>
          <ul id="navigator">
            <li>
              <button>个人信息</button>
            </li>
            <li>
              <button>项目作品</button>
            </li>
            <li>
              <button>个人技能</button>
            </li>
            <li>
              <button>教育经历</button>
            </li>
            <li>
              <button>工作经历</button>
            </li>
          </ul>
          <ul className="more">
            <li>
              <a href="#" className="iconfont icon-jianli" target="_blank"></a>
              <p>在新窗口查看简版简历</p>
            </li>
            <li>
              <a href="#" className="iconfont icon-pdf" target="_blank"></a>
              <p>下载PDF版简历</p>
            </li>
            <li>
              <a href="#" className="iconfont icon-daima"  target="_blank"></a>
              <p>查看本站源代码</p>
            </li>
          </ul>
        </aside>
        <main>

        </main>
      </div>
    );
  }
}

export default App;