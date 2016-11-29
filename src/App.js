import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="white_bg padding-page">
          <div className="container">
            <div className="col-xs-12 col-md-5 col-sm-7 col-centered">

      <div className="login_box">
        <div className="title">Login to your BookUp account</div>
          <form>
            <label>
              <div className="form-group">
                <input type="text" className="form-control" name="email" placeholder="Enter email" />
              </div>
            </label>

            <label>
              <div className="form-group">
                <input type="password" className="form-control" name="password" placeholder="Enter password"/>
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
