import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          <ul>
            <li>
              <a href="#">查看简版简历</a>
            </li>
            <li>
              <a href="">下载PDF版</a>
            </li>
            <li>
              <a href="">查看源码</a>
            </li>
          </ul>
        </aside>
        <main></main>
      </div>
    );
  }
}

export default App;