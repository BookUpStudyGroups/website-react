import React, { Component } from 'react';
import Parse from 'parse';
import './style.css'

class ForgotPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.validateForgotPassword = this.validateForgotPassword.bind(this);
    this.submitPasswordRequest = this.submitPasswordRequest.bind(this);
  }

  validateForgotPassword(event) {

    if(this.state.email == "" ) {
      alert("Please enter your email address.");
      return false;
    }

  	if( this.state.email.val().indexOf('@dartmouth.edu') == -1 ) {
  		alert("Please enter a valid Dartmouth email address.");
  		return false;
  	}

    return true;
  } //validateForgotPassword

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  //Form checker for forgot password
  submitPasswordRequest(event) {
    var returnVal = this.validateForgotPassword(event);
    if (returnVal == true) {
        var username = document.getElementById("fp_email").value;

        var User = Parse.Object.extend("_User");
        var query = new Parse.Query(User);
        query.equalTo("username", username.toLowerCase());
        query.find({
            success: function(results) {
                if (results.length == 0) {
                    alert('This email is not registered. Please enter a valid BookUp email.');
                } else {

                    Parse.User.requestPasswordReset(username, {
                        success: function() {
                            window.alert("Password reset link has been sent to " + username);
                            window.location = 'login.php';
                            return true;
                        },
                        error: function(error) {
                            window.alert(error.message);
                            return false;
                        }
                    });
                }


            },
            error: function(object, error) {
                // The object was not retrieved successfully.
                // error is a Parse.Error with an error code and message.
                alert("Error: Database is Down");
                return false;
            }
        });
        return false;
    } else {
        return false;
    }
  } //submitPasswordRequest


  render() {
    return (
      <div class="white_bg padding-page">
        <div class="container">
          <div class="col-xs-12 col-md-5 col-sm-7 col-centered">

            <div class="login_box">
              <div class="title">Enter your email</div>
              <form method="post" action="" id="forgotpasswordform" onsubmit="return submitPasswordRequest();">
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Enter your email" id="fp_email" name="fp_email" onClick={this.handleChangeEmail}/>
                </div>

                <div class="submit">
                  <button class="btn btn-default" title="Submit" type="submit" name="fp_submit" id="fp_submit">Submit</button>
                </div>
              </form>
              <div class="dontac"><a href="register">Don't have an account?</a></div>
              <div class="create_account"><a target="_blank" href="#">
              </a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }  // render
} // component

export default ForgotPassword;
