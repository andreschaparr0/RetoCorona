import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './Header.css';

function Header({ isLoggedIn, onLogout, onShowLogin }) {
  return (
    <Navbar expand="lg" bg="white" className="corona-header border-bottom">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_YEzODoSxRozawOBZFmxQeHMFcy7yHoKS-w&s"
            height="40"
            className="d-inline-block align-top"
            alt="Corona Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto corona-nav-links">
            <Nav.Link href="#">Productos</Nav.Link>
            <Nav.Link href="#">Ambientes</Nav.Link>
            <Nav.Link href="#">Servicios</Nav.Link>
            <Nav.Link href="#">Planifica tu proyecto</Nav.Link>
            <Nav.Link href="#">Inspírame</Nav.Link>
            <Nav.Link href="#">Ofertas</Nav.Link>
          </Nav>
          <Nav className="corona-nav-icons">
            <Nav.Link href="#">🔍</Nav.Link>
            <Nav.Link href="#">📍 Bogotá</Nav.Link>
            {isLoggedIn ? (
                <Button variant="link" onClick={onLogout} className="nav-link">Cerrar Sesión</Button>
            ) : (
                <Button variant="link" onClick={onShowLogin} className="nav-link">Ingresa/Regístrate</Button>
            )}
            <Nav.Link href="#">🛒</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;