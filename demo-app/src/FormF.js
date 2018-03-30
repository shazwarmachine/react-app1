import React, { Component } from 'react';
import './Form.css' ;
import Input from './Input';
import Summary from './Summary';
import Profilepic from "./Profilepic";
import ButtonS from './ButtonS'
class FormF extends Component{

    constructor(){
        super();
        this.state={
            inputName:'',
            inputTitle:'',
            inputSummary:'',
            isClicked:false,
            errValueName:'',
            errValueTitle:''
        };

        this.recieveDataForName=this.recieveDataForName.bind(this);
        this.recieveDataForTitle=this.recieveDataForTitle.bind(this);
        this.recieveDataForSummary=this.recieveDataForSummary.bind(this);
        this.isClickedOrNot= this.isClickedOrNot.bind(this);
        this.isBlurOrNotName=this.isBlurOrNotName.bind(this);
        this.isBlurOrNotTitle=this.isBlurOrNotTitle.bind(this);
        this.isBlurOrNotSummary=this.isBlurOrNotSummary.bind(this);
    }


    recieveDataForName(data){
        this.setState({inputName:data},()=>{console.log(this.state.inputName,"Name")});

    }

    recieveDataForTitle(data){
        this.setState({inputTitle:data},()=>{console.log(this.state.inputTitle,"Title")});

    }

    recieveDataForSummary(data){
        this.setState({inputSummary:data},()=>{console.log(this.state.inputSummary,"Summary")});

    }

    isClickedOrNot(e){
    console.log("i AM CLICKED");
        this.setState({isClicked:!this.state.isClicked},()=>{
            if(this.state.inputName==="" || this.state.inputTitle===""){
                this.setState({isClicked:false,errValueSubmit:"Mandatory Fields not Filled"});

                if(this.state.inputName==="") {
                    this.setState({errValueName: "* This Field is Mandatory"});
                }

                if(this.state.inputTitle==="") {
                    this.setState({errValueTitle: "* This Field is Mandatory"});
                }


            }


        });



    }

    isBlurOrNotName(){

        if(this.state.inputName===""){
            this.setState({errValueName:"* This Field is Mandatory"});
        }
        else if(this.state.inputName!==""){
            this.setState({errValueName:''});
        }


    }

    isBlurOrNotTitle(){

        if(this.state.inputTitle==="" ){
            this.setState({errValueTitle:"* This Field is Mandatory"});
            if(this.state.inputName===""){
                this.setState({errValueName:"* This Field is Mandatory"});
            }
        }
        else if(this.state.inputTitle!==""){
            this.setState({errValueTitle:''});
            if(this.state.inputName===""){
                this.setState({errValueName:"* This Field is Mandatory"});
            }

        }


    }

    isBlurOrNotSummary(){

        if(this.state.inputTitle==="" ){
            this.setState({errValueTitle:"* This Field is Mandatory"});
            if(this.state.inputName===""){
                this.setState({errValueName:"* This Field is Mandatory"});
            }
        }
        // else if(this.state.inputTitle!==""){
        //     this.setState({errValueTitle:''});
        // }


    }


    render(){
        if(!this.state.isClicked) {
            return (

                <div className="f">
                    <div id="pp"><Profilepic/></div>
                    <div id="inp1">
                        <Input name="Name" recieveInputData={this.recieveDataForName} recieveBlurData={this.isBlurOrNotName} defaultValue={this.state.inputName}/>
                        <div className="errName"><h6>{this.state.errValueName}</h6></div>
                        <Input name="Title" recieveInputData={this.recieveDataForTitle} recieveBlurData={this.isBlurOrNotTitle} recieveFocusData={this.isBlurOrNotName} defaultValue={this.state.inputTitle}/>
                        <div className="errTitle"><h6>{this.state.errValueTitle}</h6></div>
                    </div>
                    <div id="sum">
                        <Summary id="sum" recieveInputData={this.recieveDataForSummary} recieveBlurData={this.isBlurOrNotSummary} recieveFocusData={this.isBlurOrNotSummary} defaultValue={this.state.inputSummary}/>
                    </div>
                    <div className="btn">
                        <ButtonS value="Submit" detectClick={this.isClickedOrNot} v={this.state.inputTitle}/>


                    </div>
                    <div className="err"> <p>{this.state.errValueSubmit}</p></div>
                </div>
            );
        }
        else{
            return(
                <div className="f">
                    <div id="pp"><Profilepic/></div>
                    <div id="inp1">
                       <p className="ch1">{this.state.inputName}</p>
                        <p className="ch1">{this.state.inputTitle}</p>
                        {/*<Input name="Name" recieveInputData={this.recieveDataForName}/>*/}
                        {/*<Input name="Title" recieveInputData={this.recieveDataForTitle}/>*/}
                    </div>
                    <div id="sum">
                        <h4>Your Summary:</h4>
                        <p className="ch1" >{this.state.inputSummary}</p>
                        {/*<Summary id="sum" recieveInputData={this.recieveDataForSummary}/>*/}
                    </div>

                </div>
            );
        }
    }
}

export default FormF;