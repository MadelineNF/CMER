import React, { Component } from 'react';
import '../App.css';
import Nav from './Navigation';
import Hero from './Hero';
import Footer from './Footer';
import About from './About.jsx';

class Landing extends Component {
  render() {
    return (
      <div id="Landing">
        <Nav />
        <Hero />
        <hr/>
        <About />
        <Footer />
      </div>
    );
  }
}

export default Landing;