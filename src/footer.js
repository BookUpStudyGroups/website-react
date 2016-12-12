import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './scroll.css';
import './style.css';

const Footer = React.createClass({
   render() {
      return (
<div className="copyrite">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <div className="social-icon">
            <a href="https://www.facebook.com/bookupnow/">
              <img src="../images/facebook.png" alt="Facebook"></img></a>
              <a href="#"><img src="../images/googleplus.png" alt="Google Plus"></img></a>
              <a href="#"><img src="../images/twitter.png" alt="Twitter"></img></a>
              <a href="#"><img src="../images/rss.png" alt="RSS"></img></a> </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="text">&copy; 2016 BOOKUP LLC. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </div>
  </div>
);
}
});
export default Footer;
