import React, { Component } from 'react';
import './Profilepic.css' ;
import pic from './profile_pic.jpg';
class Profilepic extends Component{
    constructor(){
        super();
        this.state={
            path:pic
        };
        // this.handleChange=this.handleChange.bind(this);
    }


    // handleChange(e){
    //     this.setState({path:e.target.value});
    //     console.log(this);
    // }
    render(){
        return (
            <div className="pic_box">
                {/*<input type="file" name="" id="camerainput1" accept="image/*" capture onChange={this.handleChange}/>*/}
                <img src={this.state.path} alt="" className="resize"/>
            </div>
        );
    }
}
export default Profilepic;