import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="xs">
          <Nav className="w-100 justify-content-between" navbar>
            <NavItem >
              <NavLink tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavbarBrand tag={Link} to="/" className="mr-0">OE</NavbarBrand>
            <NavItem >
              <NavLink tag={Link} to="/">Search</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div >
    );
  }
}

