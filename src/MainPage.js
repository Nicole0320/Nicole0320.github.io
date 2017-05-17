import React, {Component} from 'react';
import Information from './Information.js';
import Project from './Project.js';
import Skills from './Skills.js';
import Exprience from './Exprience.js';
import WorkExp from './WorkExp.js'
import './MainPage.css';

export default class MainPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
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
                // return(
                //     <div>Welcome</div>
                // );
                return <Project />;
        }
    }
}