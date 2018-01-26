import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Styles from './header.scss';

export default class Header extends React.Component {

  render() {
    return (
      <Container className={Styles.wrapper}>
        <Row>
          <Col>
            <Navbar expand="xs">
              <Nav className="w-100 justify-content-between" navbar>
                <NavItem >
                  <NavLink tag={Link} to="/about" className={Styles.nav_link}>About</NavLink>
                </NavItem>
                <NavItem >
                  <NavLink tag={Link} to="/" className={Styles.nav_link}>Search </NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}

