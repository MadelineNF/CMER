import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,  } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Footer from './components/Footer';
import About from './components/About';
import Player from './components/Player';
import Landing from './components/Landing';



class App extends Component {
  

  render() {
    return (
    <Router>
      <div className="App">
        <Navbar inverse collapseOnSelect className="Navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CMER Playlist</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="Nav">
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem eventKey={2} ><Link to="/about">About</Link></NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem><Link to="/play">Player</Link></NavItem>
          </Nav> 
        </Navbar.Collapse>
      </Navbar>  

          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/play" component={Player} />
            <Route path="/about" component={About} />
          </main>
     
        
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;