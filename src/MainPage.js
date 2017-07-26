import React, {Component} from 'react';
import Information from './Information.js';
import Project from './Project.js';
import Skills from './Skills.js';
import Exprience from './Exprience.js';
import './MainPage.css';

export default class MainPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let page= (function(){
            switch(this.props.currentPage){
                case 'myInfo':
                    return <Information />;
                case 'project':
                    return <Project />;
                case 'skills':
                    return <Skills />;
                case 'Exprience':
                    return <Exprience />;
                default:
                    return(
                        <div className="welcome">
                            <h1 className="title">Welcome !</h1>
                        </div>
                    );
                    // return <Project />; //调试用
            }
        }.bind(this))();

        return(
            <div className="MainPage">
                {page}
                <div className="nextPage" 
                    onClick={this.getNextPage.bind(this)}
                >下一页</div>
            </div>
        )
    }

    getNextPage(e){
        let newPage = (function(){
            switch(this.props.currentPage){
                case 'myInfo':
                    return 'project';
                case 'project':
                    return 'skills';
                case 'skills':
                    return 'Exprience';
                case 'Exprience':
                    return 'myInfo';
                default:
                    return 'project';
            }
        }.bind(this))();
        this.props.nextPage(newPage);
    }
}