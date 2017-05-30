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
        
        <Hero />
        <About />
        
      </div>
    );
  }
}

export default Landing;