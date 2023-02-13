import React from 'react';
import { Link } from "react-router-dom";
import "./header.css";


import {
  Container, Row, Col, Navbar, Nav, NavItem, NavLink
} from 'reactstrap';



const Header = () => (
  <header>
    <Navbar  fixed="top" color="light" light expand="xs" className="border-bottom" style={{ height: 40 }}>
      <Container>
        <Row className="align-items-center">

          <Col  className="justify-content-start">

            <Nav className="mrx-auto" navbar>
                <ul>
                <li>

                <Link className="font-weight-bold" to="/">Home</Link>

              </li>
              <li>

                <Link className="font-weight-bold" to="bio-input">Input</Link>

                </li>
                <li>

                <Link className="font-weight-bold" to="table">ReactTable</Link>

                </li>
                </ul>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </header>
);

export default Header;