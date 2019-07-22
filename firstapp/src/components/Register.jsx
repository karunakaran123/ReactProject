import React, { Component } from 'react'
import {Bootstrap,Grid,Row,Col} from 'react-bootstrap';
import "../index.css";
export default class Register extends Component {
    constructor(){
        super();
        this.state={
            fields:{},
            errors:{}
        }
        this.handleChange=this.handleChange.bind(this);
        this.submitRegisterform=this.submitRegisterform.bind(this);
    };
    handleChange(e){
      let fields=this.state.fields;
      fields[e.target.name]=e.target.value;
      this.setState({
        fields
      });
    }
    submitRegisterform(e){
      e.preventDefault();
      if(this.validateForm()){
        let fields={};
        fields["username"]="";
        fields["email"]="";
        fields["phoneno"]="";
        fields["password"]="";
        this.setState({fields:fields});
        alert("Form Submited");
      }
    }
    validateForm(){
      let fields =this.state.fields;
      let errors={};
      let formIsValid=true;
      if(!fields["username"]){
        formIsValid=false;
        errors["username"]="*Please enter  your name.";
      }
      if( typeof fields["username"]!=="undefined"){
        if(!fields["username"].match(/^[a-zA-Z]*$/)){
          formIsValid=false;
          errors["username"]="*Please enter alphabates only.";
        }
      }
      if(!fields["email"]){
        formIsValid=false;
        errors["email"]="*Please enter email-ID";
      }
      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter valid email-ID.";
        }
      }
      if(!fields["phoneno"]){
        formIsValid=false;
        errors["phoneno"]="*Please enter mobile number";
      }
      if(typeof fields["phoneno"]!=="undefined"){
        if(!fields["phoneno"].match(/^[0-9]{10}$/)){
          formIsValid=false;
          errors["phoneno"]="*Please enter valid mobile number";
        }
      }
      this.setState({
        errors:errors
      });
      return formIsValid;
    }
  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
        <h3 align="center">Registration Page</h3>
            <form name="register" onSubmit={this.submitRegisterform}>
                <label>UserName :</label>
                <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange}></input>
                <div className="errmsg">{this.state.errors.username}</div>
                <label>UserEmail :</label>
                <input type="email" name="email" value={this.state.fields.email} onChange={this.handleChange}></input>
                <div className="errmsg">{this.state.errors.email}</div>
                <label>PhoneNo :</label>
                <input type="text" name="phoneno" value={this.state.fields.phoneno} onChange={this.handleChange}></input>
                <div className="errmsg">{this.state.errors.phoneno}</div>
                <label>Password :</label>
                <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange}></input>
                <div className="errmsg">{this.state.errors.password}</div>
                <input type="submit" className="button"  value="Register" ></input>
            </form>
        </div>
      </div>
    )
  }
}
