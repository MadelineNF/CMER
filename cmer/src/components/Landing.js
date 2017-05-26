import React, { Component } from 'react';
import '../App.css';
import Nav from './Navigation';
import Hero from './Hero';
import Footer from './Footer';
import About from './About';

class Landing extends Component {
  render() {
    return (
      <div id="Landing">
        <Nav />
        <Hero />
        <About />
        <Footer />
      </div>
    );
  }
}

export default Landing;