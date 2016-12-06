import React, { Component } from 'react';
import './App.css';
import Parse from 'parse';
import './register.js';
import ReactDOM from 'react-dom';

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
    this.register =  this.register.bind(this);
  }

clickedSomething(event) {
   alert(`the value of email is:${this.state.email}`);
   event.preventDefault();
  }

register(event) {
  
  console.log('changing to register....');
  window.location = 'register.js';
  ReactDOM.render(
    <Register />,


    document.getElementById('root')
  );


}

handleChangeEmail(event) {
  this.setState({email: event.target.value});
}

handleChangePassword(event) {
  this.setState({password: event.target.value});
}

  validateLogin(event) {
    event.preventDefault();
    alert(`the email is: ${this.state.email}`);
    alert(`the pwis: ${this.state.password}`);
    console.log('validateLogin');


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

checkLoginForm(event){
//  event.preventDefault();
if (this.validateLogin(event)==false){
  alert('validateLogin failed');
return false;
}else{

var username=this.state.email;
var password=this.state.password;

if(1==1) {
//  return true;


  console.log('validateLogin succeeded');

  Parse.User.logIn(username, password, {
success: function(user) {
  // Do stuff after successful login.
// window.location = "profile.php";
 console.log('Lookee here you logged in!');
// return true;
},
error: function(user, error) {
  // The login failed. Check error to see why.
  console.log(JSON.stringify(user));
  console.log(JSON.stringify(error));
console.log("Error: User login failed. Please check your username and password.");
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
          <div className="dontac"><a onClick={this.register} href="register.js">Dont have an account?</a></div>


          </form>

              <button className="dontac"onClick={this.register}>Dont have an account?</button>
      </div>


      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
