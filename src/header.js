import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './scroll.css';
import './style.css';
// import "//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css";
// import "//code.jquery.com/ui/1.11.4/jquery-ui.js"

/*
<link href="css/bootstrap.css" rel="stylesheet">
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<link href="css/style.css" rel="stylesheet">
<link rel="stylesheet" href="css/scroll.css" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
*/

/*
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgHVAllyhnnvIHX0xqO9nSSJrFOR9EF70"></script>
<script src="//cdn.jsdelivr.net/rsvp/3.0.6/rsvp.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://cdn.rawgit.com/nnattawat/flip/master/dist/jquery.flip.min.js"></script>


<script src="js/include/parse-1.6.14.js"></script>

<script src="js/include/jquery.ui.touch-punch.min.js"></script>
<script src="js/include/jquery.validate.min.js"></script>

    <script src="js/bookup_1.js"></script>
*/

const Header = React.createClass({
   render() {
      return (
        <div id="wrap" className="bookup">
          <header id="header">
            <div className="container" id="header-cont">
              <div className="row" id="header-btns"><div className="col-md-2 col-sm-2"><a className="navbar-brand" href="index.php"><b>BOOKUP</b></a></div>
                <div className="col-md-10 col-sm-10">
                  <nav id="navigation" className="pull-right">
                    <div className="navbar-header"> <a href="#"></a>


                    <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>

                    </div>
                    <div className="navbar-collapse collapse" id="navbar">
                    <ul className="nav navbar-nav">
                    <li><a href="index.php" title="Home" id="Home">&nbsp;HOME</a></li>

  <li style={{display:'none',}}><a href='search-group.php' title='Search group' >&nbsp;NAVIGATOR</a></li>
  <li style={{display:'none',}}><a href='groups.php' title='View Group' >&nbsp;STUDY SESSIONS</a></li>
  <li style={{display:'none',}}><a href='matches.php' title='View Study Buddies' >&nbsp;MATCHES</a></li>
  <li id='logout' style={{display:'none',}}><a href='logout.php' title='Log out'>&nbsp;LOG OUT</a></li>

<li><a href='register.php' title='Register' >&nbsp;REGISTER</a></li>
<li><a href='login.php' title='Login' >&nbsp;LOGIN</a></li>

<li><a href="contact.php" title="Contact Us" >&nbsp;FEEDBACK</a></li>
                    </ul>

                    </div>
                  </nav>
                </div>
              </div>

            </div>
          </header>
          </div>

      );
    }
});

export default Header;
