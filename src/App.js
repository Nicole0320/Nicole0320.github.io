import React, { Component } from 'react';
import './App.css';
import './../public/iconfont/iconfont.css';
import MainPage from './MainPage.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: 'welcome'
    }
  }

  render() {
    return (
      <div className="App">
        <aside>
          <h1 className="title">狄璠</h1>
          <h3>Di Fan</h3>
          <h2>前端开发工程师</h2>
          <ul id="navigator">
            <li>
              <button onClick={this.switchMainPage.bind(this, 'myInfo')}
                className={this.state.currentPage === 'myInfo' ? 'clicked' : ''}
              >个人信息</button>
            </li>
            <li>
              <button onClick={this.switchMainPage.bind(this, 'project')}
                className={this.state.currentPage === 'project' ? 'clicked' : ''}
              >项目作品</button>
            </li>
            <li>
              <button onClick={this.switchMainPage.bind(this, 'skills')}
                className={this.state.currentPage === 'skills' ? 'clicked' : ''}
              >个人技能</button>
            </li>
            <li>
              <button onClick={this.switchMainPage.bind(this, 'education')}
                className={this.state.currentPage === 'education' ? 'clicked' : ''}
              >教育经历</button>
            </li>
            <li>
              <button onClick={this.switchMainPage.bind(this, 'workExp')}
                className={this.state.currentPage === 'workExp' ? 'clicked' : ''}
              >工作经历</button>
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
        <MainPage className='main' currentPage={this.state.currentPage}></MainPage>
      </div>
    );
  }

  switchMainPage(pageName, e){
    this.setState({
      currentPage: pageName
    });
  }
}

export default App;