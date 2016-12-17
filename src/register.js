import React, { Component } from 'react';
// import './register.css';
import Parse from 'parse';

var styles = require('./style.css');

import JQuery from 'jquery';
import Header from './header.js';
import Footer from './footer.js';


class Register extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fullName: "",
      fname: "",
      lname: "",
      cpassword: "",
      username: "",
      totalClasses: [],
      classes: [],
    };


    this.validateRegister =  this.validateRegister.bind(this);
    this.handleChangeEmail =  this.handleChangeEmail.bind(this);
    this.handleChangePassword =  this.handleChangePassword.bind(this);
    this.handleChangeFname =  this.handleChangeFname.bind(this);
    this.handleChangeLname =  this.handleChangeLname.bind(this);
    this.handleChangeCheckPassword =  this.handleChangeCheckPassword.bind(this);
    this.handleChangeUsername =  this.handleChangeUsername.bind(this);

    this.loadRegForm = this.loadRegForm.bind(this);

  }

  componentDidMount() {
    this.loadRegForm().then((totalClasses) => {
      console.log(`lets seee the total classes: ${totalClasses}`);

      console.log(`LETS FIND THE STATE YAYYYYY ${JSON.stringify(this.state)}  `);
      this.setState({totalClasses: totalClasses});

// console.log(`AFTERWARDS: LETS FIND THE STATE YAYYYYY ${JSON.stringify(this.state)}  `);
    });
  }

  //populate the registration page
  loadRegForm() {
    let totalClasses1 = [];
    return new Promise((fulfill, reject) => {

      console.log('in loadREgForm');
        //Load in available classes to dropdown menus
    var classes = Parse.Object.extend("Class");
    var classQuery = new Parse.Query(classes);
    classQuery.ascending("department","number");
    classQuery.find({
        success: function(groups) {
          console.log('success in query!');
      for (let i = 0; i < groups.length; i++) {
          var prof=groups[i].get("prof");
          var dep=groups[i].get("department");
        var title=groups[i].get("title");
        var id=groups[i].id;
        var num=groups[i].get("number");
        var per=groups[i].get("period");
        console.log(`here's a bunch of data: ${prof} ${dep} ${title} ${id} ${num} ${per}`); //course-input
    //    React.createElement('option', null, 'value="+id+">"+"["+dep+num+"] "+title+" with Professor "+prof+"' );
    totalClasses1.push(
    //  'value="+id+">"+"["+dep+num+"] "+title+" with Professor "+prof+"'
  {  'id': id,
    'text': `[${dep}] ${title} with Professor ${prof}`,
  }
    );


  }  // for loop
  fulfill(totalClasses1);
        },
        error: function(object, error) {
          console.log('error in query');
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
            alert("Error: Courses could not be retrieved.");
            reject();
        }
    });


    //  console.log(`${document}`);
  //    document.getElementById('form-control').append("<option value="+id+">"+"["+dep+num+"] "+title+" with Professor "+prof+"</option>");
    //	$(".form-control").append("<option value="+id+">"+"["+dep+num+"] "+title+" with Professor "+prof+"</option>");

  /*
        var classesRow = $(".classesrow").html();

        if( ! $("#profilebody").length )
        {

          if( $(".classesrow").length == 1 )
          {
            console.log("insert row called on page load");
            $("#classesrow1").after('<div class="classesrow" id="classesrow2">'+classesRow+'</div>');
            $("#classesrow2 select").val('');
          }
        }
        */
    }); // promise

    }

    validateRegister(event){
      event.preventDefault();
      return true;
    }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangeFname(event) {
    this.setState({fname: event.target.value});
  }

  handleChangeLname(event) {
    this.setState({lname: event.target.value});
  }

  // change this later
  handleChangeClasses(event) {
    this.setState({classes: event.target.value});
  }

  handleChangeCheckPassword(event) {
    this.setState({cpassword: event.target.value});
  }

  checkRegForm() {

      const returnValue = this.validateRegister();
      if (returnValue == false) {
          return returnValue;
      } else {
          //form is validated
        //  let user = new Parse.User();
          const fullName = this.state.fname + ' ' + this.state.lname;
          const username = this.state.username;
          const password = this.state.password;

          // other fields can be set just like with Parse.Object

          //Check to see if username is already taken
          var query = new Parse.Query(Parse.User);
          query.equalTo("username", username.toLowerCase());
          query.find({

              //If username can be found, then don't allow creation

              success: function(existing_user) {
                  if (existing_user.length >= 1) {
                    //  alert(username);
                    //  alert(existing_user[9].get('username'));
                      alert("Your email is already associated with a BookUp account.");
                    //  $("#email").focus();
                      return false;
                  } else {

                      //Username isn't taken, so sign up!
                      var user = new Parse.User();
                      user.set("fullName", fullName);
                      user.set("username", username.toLowerCase());
                      user.set("password", password);
                      user.signUp(null, {
                          success: function(user) {
                              //now sign up for the different classes

/*
                              $(".classesrow select").each(function(index) {
                                  if ($(this).val() && $(this).val() != '') {

                                      var courseId = $(this).val();
                                      var classObj = Parse.Object.extend("Class");
                                      var classQuery = new Parse.Query(classObj);
                                      classQuery.get(courseId, {
                                          success: function(result) {
                                              // The object was retrieved successfully.

                                              //save relational data
                                              var relation1 = result.relation("students");
                                              relation1.add(user);
                                              result.save();

                                              var relation2 = user.relation("classes");
                                              relation2.add(result);
                                              user.save();
                                          },
                                          error: function(user, error) {
                                              // Show the error message somewhere and let the user try again.
                                              alert("Error: " + error.code + " " + error.message);
                                          }
                                      });

                                      //loop through all invites for that user and set to userExists to true
                                      var invites = Parse.Object.extend("PrivateInvite");
                                      var invitesQuery = new Parse.Query(invites);
                                      invitesQuery.equalTo("Email", username)

                                      invitesQuery.find({
                                          success: function(results) {
                                          	console.log(results);
                                              console.log(results.length);
                                              //chnage user exists to true for each invite
                                              for(i=0; i<results.length; i++){
                                              	results[i].set("userExists", true);
                                              	results[i].save();

                                              }

                                          },


                                          error: function(user, error) {
                                              // Show the error message somewhere and let the user try again.
                                              alert("Error: " + error.code + " " + error.message);
                                          }
                                      });

                                  }
                              }); //each
                              alert("Your BookUp account was registered successfully.");
                              window.location = "login.php";
                              return true;

*/

                          },
                          error: function(user, error) {
                              alert("Error: There was a problem with your registration.");
                              return false;
                          }
                      });

                  }


              },
              error: function(existing_user) {
                  alert("Error: Userbase could not be queried");
                  return false;
              }
          });
      }
      return false;
  }



  render() {
    console.log(`wowee in render the state is: ${JSON.stringify(this.state)}`);
    return (

      <div className="white_bg padding-page">
          <div className="container">
            {/*<div className="col-xs-12 col-md-6 col-sm-7 col-centered">*/}
            <div>

            <div className="reg-title">Register your BookUp account</div>
                <div className="login_box registration">

                <form method="post" action="login.php" id="registerform" enctype="multipart/form-data" onSubmit={this.checkRegForm}>
                  <div className="row">
                    <div className="col-md-4 col-sm-4">
                      <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" className="form-control" placeholder="First Name" name="fname" id="fname" onChange={this.handleChangeFname}/>
                      </div>
                    </div>

                    <div className="col-md-4 col-sm-4">
                      <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name" name="lname" id="lname" onChange={this.handleChangeLname} />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="form-control" placeholder="Email Address" name="email" id="email" onChange={this.handleChangeEmail}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password" name="password" id="password" onChange={this.handleChangePassword}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" name="cpassword" id="cpassword" onChange={this.handleChangeCheckPassword}/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Currently Registered Courses</label>

                    <div className="classesrow" id="classesrow1">
              <div className="row">
                     <div className="col-md-8 col-sm-8">
                        <select className="form-control" id="course-input">
                          <option value="" disabled selected>Select a Class</option>
                          {this.state.totalClasses.map((aClass) => {
                            return <option key={aClass.id} value={aClass.id}> {aClass.text} </option>
                          })}
                        </select>
                      </div>
              </div>
                    </div>

                    <div className="form-group">
                          <a className="btn btn-info" id="add-course-row">Add Course</a>
                          <a className="btn btn-warning" id="remove-course-row">Remove Course</a>
                    </div>
                  </div>

              <div className="form-group">
                <label htmlFor="class_year">`Don't see your class? Request we add it below!`</label>
                <input type="text" className="form-control" placeholder="Request class" name="class_name_custom" id="class_name_custom" value="" />
              </div>
                  <div className="form-group term">
                    {/*<input type="checkbox" class="form-control" placeholder="Email Address">*/}
                    <label>By clicking BookUp, you have read and agree to our <a href="terms-and-conditions.php" title="Terms and Conditions"><b>Terms and Conditions</b>.</a></label>
                  </div>
                  <div className="submit">
                    <button className="btn btn-default" title="BookUp" type="reg_submit" name="reg_submit" id="submit">Submit</button>
                  </div>
                </form>

                </div>

                </div> {/*cols and shit */}
            </div>


      {/*container */}  </div>

    );
  }  // render

} // component

export default Register;
