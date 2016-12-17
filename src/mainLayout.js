import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './scroll.css';
import './style.css';
import Header from './header.js';
import Footer from './footer.js';

const MainLayout = React.createClass({
   render() {
     // this part is so the footer doesn't end up halfway down the page.
     let h;
     if (window.innerHeight < 760) {
       h = 760;
     } else {
       h = window.innerHeight + 30;
     }
     const container = {
       width: window.innerWidth,
       height: h,
     };

      return (
        <div>
            <Header />
              <div style={container}>
                {this.props.children}
              </div>
            <Footer />
        </div>

);
}
});
export default MainLayout;
