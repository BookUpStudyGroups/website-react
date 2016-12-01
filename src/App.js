import React, { Component } from 'react';
import './App.css';
 import Parse from 'parse';
 //var Parse = require('parse');
// global.Parse = require('parse-1.6.14').Parse;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.clickedSomething =  this.clickedSomething.bind(this);
    this.checkLoginForm =  this.checkLoginForm.bind(this);
    this.handleChangeEmail =  this.handleChangeEmail.bind(this);
    this.handleChangePassword =  this.handleChangePassword.bind(this);
  }

clickedSomething(event) {
   alert(`the value of email is:${this.state.email}`);
   event.preventDefault();
  }

handleChangeEmail(event) {
  this.setState({email: event.target.value});
}

handleChangePassword(event) {
  this.setState({password: event.target.value});
}

  validateLogin(event) {
    alert(`the email is: ${this.state.email}`);
    alert(`the pwis: ${this.state.password}`);


  if( this.state.email == "" )
  {
    alert("Please enter email address.");
  //  $("#si_email").focus();
    return false;
  }

  /*
  if( this.state.email.indexOf('@dartmouth.edu') == -1 ){
    alert("Please enter a valid dartmouth email id.");
  //  $("#si_email").focus();
    return false;
  }
  */

  if( this.state.password == "" )
  {
    alert("Please enter password.");
  //  $("#si_password").focus();
    return false;
  }


  return true;

  } //validateLogin

checkLoginForm(){
if (this.validateLogin()==false){
return false;
}else{

var username=this.state.email;
var password=this.state.password;

if(1==1) {
  return true;




  Parse.User.logIn(username, password, {
success: function(user) {
  // Do stuff after successful login.
// window.location = "profile.php";
 alert('Lookee here you logged in!');
return true;
},
error: function(user, error) {
  // The login failed. Check error to see why.
alert("Error: User login failed. Please check your username and password.");
return false;
}
});
}else{
alert("Sorry! Site is currently undergoing development. We'll be back up soon!");
}

}
return false;
}


  render() {
    return (
      <div className="App">

        <div className="white_bg padding-page">
          <div className="container">
            <div className="col-xs-12 col-md-5 col-sm-7 col-centered">

      <div className="login_box">
        <div className="title">Login to your BookUp account</div>
          <form onSubmit={this.checkLoginForm}>
            <label>
              <div className="form-group">
                <input type="text" className="form-control" name="email" placeholder="Enter email" onChange={this.handleChangeEmail}/>
              </div>
            </label>

            <label>
              <div className="form-group">
                <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={this.handleChangePassword}/>
              </div>
            </label>
            <div className="submit">
              <button className="btn btn-default" title="Login" type="submit" name="si_submit" id="si_submit">Login</button>

            </div>

            <div className="forgot_password"><a title="Forgot your password?" href="forgot-password.php">Forgot your password?</a></div>
          <div className="dontac"><a href="register.php">Dont have an account?</a></div>

          </form>
      </div>


      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
