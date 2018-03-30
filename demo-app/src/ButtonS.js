import React, { Component } from 'react';
import './Button.css' ;
import { Button } from 'semantic-ui-react';


class ButtonS extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.props.detectClick();
        console.log(this.props.v);
    }

    render(){
        return(
            <Button onClick={this.handleClick}>{this.props.value}</Button>

        );
    }
}

export default ButtonS;