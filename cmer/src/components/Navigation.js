import React, { Component } from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem,  } from 'react-bootstrap';

class Navigation extends Component {
    render() {
      return (
        <Navbar inverse collapseOnSelect className="Navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CMER Playlist</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="Nav">
            <NavItem eventKey={1} href="/">Home</NavItem>
            <NavItem eventKey={2} href="/about">About</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/play">Player</NavItem>
          </Nav> 
        </Navbar.Collapse>
      </Navbar>  
    );
  }
};

export default Navigation;