import React, { Component } from 'react'
class Login extends Component {
  constructor(){
    super();
    this.state={
        fields:{},
        errors:{}
    }
    //this.handleChange=this.handleChange.bind(this);

};
  render() {
    console.log("login component");
    return (
      <div id="main-registration-container">
        <div id="register">
        <h3 align="center">Login Page</h3>
            <form>
                <label>UserName :</label>
                <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange}></input>
                <div className="errmsg"></div>
                <label>Password :</label>
                <input type="password" name="password"></input>
                <div className="errmsg"></div>
                <input type="submit" className="button"  value="Login"></input>
            </form>
        </div>
      </div>
    )
  }
}
export default Login;
