import React from 'react'
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// React icons
import { FaShoppingCart} from 'react-icons/fa'


const NavBar = () => {
    return ( 

      <Navbar  bg="light" expand="lg">
  <Navbar.Brand href="#home">Shoe-La-La</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="Shop" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Office Fit</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Glamour Fit</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Leisure Fit</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Sports Fit</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link">Checkout</Nav.Link>
      <Nav.Link href="#link"><FaShoppingCart size="1.5em" color="gray"/></Nav.Link>
      
      
    </Nav>
  </Navbar.Collapse>
</Navbar>


     );
}
 
export default NavBar;
