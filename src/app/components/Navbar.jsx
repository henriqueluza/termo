"use client";

import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const GameNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      <Container>
        <Nav className="me-auto"></Nav>
        <Navbar.Brand className="game-title mx-auto">TERMO</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#" className="text-light">
            <i className="fas fa-question-circle"></i>
          </Nav.Link>
          <Nav.Link href="#" className="text-light">
            <i className="fas fa-chart-bar"></i>
          </Nav.Link>
          <Nav.Link href="#" className="text-light">
            <i className="fas fa-cog"></i>
          </Nav.Link>
          <Nav.Link href="#" className="text-light">
            <i className="fas fa-user"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default GameNavbar;
