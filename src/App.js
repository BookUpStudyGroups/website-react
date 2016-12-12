import React, { Component } from 'react';
// import './App.css';
import Parse from 'parse';
import Register from './register.js';
import ReactDOM from 'react-dom';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
// var styles = require('./style.css');
import './style.css';
import Header from './header.js';

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
  //  this.register =  this.register.bind(this);  // previous rerouting
  }


clickedSomething(event) {
   alert(`the value of email is:${this.state.email}`);
   event.preventDefault();
  }

// used in the previous version of rerouting.
/*
register(event) {

  console.log('changing to register....');
  window.location = '/register.js';
  ReactDOM.render(
    <Register />,
    document.getElementById('root')
  );
}
*/

handleChangeEmail(event) {
  this.setState({email: event.target.value});
}

handleChangePassword(event) {
  this.setState({password: event.target.value});
}

  validateLogin(event) {
    event.preventDefault();
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

const username=this.state.email;
const password=this.state.password;

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

      const mundo = {
        font: 'Mundo',
      };
    return (
      <div className="App">
      <div>
      <Header />
      </div>
        <div className="white_bg padding-page">
          <div className="container" style={{width: 500, height: 330,}}>


            {/*<div className="col-xs-12 col-md-5 col-sm-7 col-centered">*/}

      <div className="login_box" style={{margin:'auto',}}>
        <div className="title" style={mundo}>Login to your BookUp account</div>
          <form onSubmit={this.checkLoginForm}>

              <div className="form-group">
                <input type="text" className="form-control" name="email" placeholder="Enter email" onChange={this.handleChangeEmail}/>
              </div>



              <div className="form-group">
                <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={this.handleChangePassword}/>
              </div>

            <div className="submit">
              <button className="btn btn-default" title="Login" type="submit" name="si_submit" id="si_submit">Login</button>

            </div>

            <div className="forgot_password"><a title="Forgot your password?" href="forgot-password.php">Forgot your password?</a></div>
          <div className="dontac"><a href="register">Dont have an account?</a></div>

          </form>

      </div>

      {/*</div>*/}
      </div>
      </div>

      </div>
    );
  }

/*
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
  */
}



export default App;
