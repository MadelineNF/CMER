import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,  } from 'react-bootstrap';

class Navigation extends Component {
    render() {
      return (
        <Navbar inverse collapseOnSelect className="Navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">CMER Playlist</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="Nav">

            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>

            <NavItem eventKey={1}><Link to="/play">Play</Link></NavItem>
            <NavItem eventKey={2}><Link to="/about">About</Link></NavItem>
            <NavItem eventKey={3}><Link to="/about">Contact</Link></NavItem>
            <NavDropdown eventKey={4} title="More" id="nav-dropdown">
              <MenuItem eventKey={4.1}>Profile</MenuItem>
              <MenuItem eventKey={4.2}>Settings</MenuItem>

              <MenuItem divider />
              <MenuItem eventKey={4.3}>API</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>  
    );
  }
};

export default Navigation;