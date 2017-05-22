import React, { Component } from 'react';
import './App.css';
import './../public/iconfont/iconfont.css';
import MainPage from './MainPage.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: 'welcome',
      showMenu: true
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
              <button onClick={this.switchMainPage.bind(this, 'project')}
                className={this.state.currentPage === 'project' ? 'clicked' : ''}
              >项目作品</button>
            </li>
            <li>
              <button onClick={this.switchMainPage.bind(this, 'skills')}
                className={this.state.currentPage === 'skills' ? 'clicked' : ''}
              >专业技能</button>
            </li>
            <li>
              <button onClick={this.switchMainPage.bind(this, 'Exprience')}
                className={this.state.currentPage === 'Exprience' ? 'clicked' : ''}
              >个人经历</button>
            </li>
            <li>
              <button onClick={this.switchMainPage.bind(this, 'myInfo')}
                className={this.state.currentPage === 'myInfo' ? 'clicked' : ''}
              >个人信息</button>
            </li>
          </ul>
          <ul className="more">
            <li>
              <a href="https://nicole0320.github.io/public/simple-resume.html" className="iconfont icon-jianli" target="_blank"></a>
              <p>在新窗口查看简版简历</p>
            </li>
            <li>
              <a href="https://nicole0320.github.io/public/resume.pdf" className="iconfont icon-pdf" target="_blank"></a>
              <p>下载PDF版简历</p>
            </li>
            <li>
              <a href="https://github.com/Nicole0320/Nicole0320.github.io" className="iconfont icon-daima"  target="_blank"></a>
              <p>查看本站源代码</p>
            </li>
          </ul>
          <div className="iconfont icon-caidan-copy menu"
            onClick={this.showMenu.bind(this)}
          ></div>
        </aside>
        <MainPage className='main' currentPage={this.state.currentPage}
          nextPage={this.getNextPage.bind(this)}
        ></MainPage>
      </div>
    );
  }

  getNextPage(newPage){
    this.setState({
      currentPage: newPage
    });
  }

  switchMainPage(pageName, e){
    this.setState({
      currentPage: pageName
    });
  }

//点击菜单按钮隐藏或展示左侧边栏
  showMenu(e){
    if(this.state.showMenu){
      e.target.parentElement.setAttribute('class', 'showMenu');
      this.setState({
        showMenu: false
      });
    }
    else{
      e.target.parentElement.removeAttribute('class', 'showMenu');
      this.setState({
        showMenu: true
      });
    }
  }
}

export default App;