import React, {Component} from 'react';

export default class Education extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="MainPage Education">
                <h1 className="title">教育经历</h1>
                <h2>西安电子科技大学</h2>
                <p>软件工程 | 本科 | 2015年毕业</p>
            </div>
        );
    }
}