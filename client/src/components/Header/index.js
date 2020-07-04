import React from "react";
import { Jumbotron, Navbar, Nav } from "react-bootstrap";
import "./style.css";

function Header() {
  return (
    <header>
      <Jumbotron>
        <h1>React Google Books Search</h1>
        <Navbar>
          <Nav>
            <Nav.Link href="/">Search</Nav.Link>
            <Nav.Link href="/saved">Saved</Nav.Link>
          </Nav>
        </Navbar>
      </Jumbotron>
    </header>
  );
}

export default Header;
