import React, { Component } from 'react';
import './Input.css' ;
import {  Form } from 'semantic-ui-react';


class Input extends Component{

    constructor(props){
         super(props);
        this.state={
          value:this.props.defaultValue
        };
        this.handleChange=this.handleChange.bind(this);

    }

    handleChange(e){
        this.setState({value:e.target.value},() => {
            this.props.recieveInputData(this.state.value)});


    }




    render(){

        return(
            <div className="inputBox">
                <Form>
                    <Form.Field>
                        <label>{this.props.name}</label>
                        <input placeholder={this.props.name} onChange={this.handleChange} value={this.state.value} onBlur={this.props.recieveBlurData} onFocus={this.props.recieveFocusData}/>
                    </Form.Field>
                </Form>
                {/*<Try stateOfInput={this.state.value}/>*/}
            </div>
        );
    }
}

export default Input;