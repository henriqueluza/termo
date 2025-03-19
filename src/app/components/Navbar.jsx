"use client";

import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const GameNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* Espaço vazio à esquerda para balancear */}
          <div className="invisible-spacer" style={{ width: "120px" }}></div>

          {/* Título centralizado */}
          <Navbar.Brand className="game-title mx-auto">TERMO</Navbar.Brand>

          {/* Ícones à direita */}
          <Nav
            className="d-flex justify-content-end"
            style={{ width: "120px" }}
          >
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
        </div>
      </Container>
    </Navbar>
  );
};

export default GameNavbar;
