import React, {Component} from 'react';
import Information from './Information.js';
import Project from './Project.js';
import Skills from './Skills.js';
import Education from './Education.js';
import WorkExp from './WorkExp.js'

export default class MainPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        switch(this.props.currentPage){
            case 'myInfo':
                return <Information />;
            case 'project':
                return <Project />;
            case 'skills':
                return <Skills />;
            case 'education':
                return <Education />;
            case 'workExp':
                return <WorkExp />;
            default:
                return(
                    <div>Welcome</div>
                );
        }
    }
}