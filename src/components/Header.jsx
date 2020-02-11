import React from "react";
import { Navbar, Nav, NavDropdown }from 'react-bootstrap';


function Header(){
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Avery's Organics</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#schedule">Schedule</Nav.Link>
      <Nav.Link href="#seasonal">Seasonal Produce</Nav.Link>
    </Nav>
  </Navbar>
  </>
  );
}

export default Header;
