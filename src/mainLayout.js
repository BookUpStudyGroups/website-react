import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './scroll.css';
import './style.css';
import Header from './header.js';
import Footer from './footer.js';

const MainLayout = React.createClass({
   render() {
     const container = {
       width: window.innerWidth,
       height: window.innerHeight,
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
