import React, { Component } from 'react';
import './Summary.css' ;
import {  Form,TextArea } from 'semantic-ui-react';

class Summary extends Component{
    constructor(props){
        super(props);
        this.state= {
            value: this.props.defaultValue
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({value:e.target.value},() => {
            this.props.recieveInputData(this.state.value)});


    }
    render(){
        return(
            <div className="s">
             <Form>
                <Form.Field control={TextArea} label='Summary' placeholder='Tell us more about you...' onChange={this.handleChange} onBlur={this.props.recieveBlurData} onFocus={this.props.recieveFocusData} value={this.state.value}/>
                 {/*<Form.Field>*/}
                     {/*<label>Summary</label>*/}
                     {/*<textarea placeholder='Tell us About You' onChange={this.handleChange} onBlur={this.props.recieveBlurData}></textarea>*/}
                 {/*</Form.Field>*/}
             </Form>
            </div>
        );
    }
}

export default Summary;
