import React from 'react';


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

// React icons
import {FaShoppingCart} from 'react-icons/fa'; 

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home" style={{marginRight: '40px'}}>Shoe-La-La</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Store">
                            <Nav.Link>Shop</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/MyAccount">
                            <Nav.Link>My Account</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Checkout">
                            <Nav.Link><FaShoppingCart size="1.5em" color="gray"/></Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
