import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/">ePets</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-end">
                        <Nav.Link as="span">
                            <Link to="/newListing">Add Listing</Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link to="/manageListings">Manage Listings</Link>
                        </Nav.Link>
                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/login">Login</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/register">Register</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/profile">Profile</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}