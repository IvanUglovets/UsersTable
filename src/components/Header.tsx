import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

import { Navbar, Container, Nav } from "react-bootstrap";
const Header: React.FC = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo__title">
              Users Table
            </Link>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Link className="nav__link" to="/">
              Home
            </Link>
            <Link className="nav__link" to="/table">
              Table
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
