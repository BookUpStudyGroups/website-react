import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './scroll.css';
import './style.css';
import Register from './register.js';

const Header = React.createClass({
   render() {
      return (
        <div id="wrap" className="bookup">
          <header id="header">
            <div className="container" id="header-cont">
              <div className="row" id="header-btns"><div className="col-md-2 col-sm-2"><a className="navbar-brand" style={{color:'white',}}href="index.php"><b>BOOKUP</b></a></div>
                <div className="col-md-10 col-sm-10">
                  <nav id="navigation" className="pull-right">
                    <div className="navbar-header"> <a href="#"></a>


                    <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>

                    </div>
                    <div className="navbar-collapse collapse" id="navbar">
                    <ul className="nav navbar-nav">
                    <li><a href="/" title="Home" id="Home">&nbsp;HOME</a></li>

  <li style={{display:'none',}}><a href='search-group.php' title='Search group' >&nbsp;NAVIGATOR</a></li>
  <li style={{display:'none',}}><a href='groups.php' title='View Group' >&nbsp;STUDY SESSIONS</a></li>
  <li style={{display:'none',}}><a href='matches.php' title='View Study Buddies' >&nbsp;MATCHES</a></li>
  <li id='logout' style={{display:'none',}}><a href='logout.php' title='Log out'>&nbsp;LOG OUT</a></li>

<li><a href='register' title='Register' >&nbsp;REGISTER</a></li>
<li><a href='/' title='Login' >&nbsp;LOGIN</a></li>

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
