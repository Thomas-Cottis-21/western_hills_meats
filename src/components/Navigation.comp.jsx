import React from "react";
import { Navbar, Nav, NavbarBrand, NavDropdown, Form, FormControl, Button, NavbarCollapse, NavLink, NavbarToggle, NavbarText } from "react-bootstrap";

const Navigation = () => {
    return (
			<Navbar expand="lg" data-bs-theme="dark" fixed="top" id="navbar">
				<NavbarBrand>Western Hills Meats</NavbarBrand>
				<NavbarToggle aria-controls="basic-navbar-nav" />
				<NavbarCollapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<NavLink>Home</NavLink>
						<NavLink>Link</NavLink>
						<NavDropdown id="basic-nav-dropdown"
                        title="Dropdown">
							<NavDropdown.Item>Action</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<NavbarText>Address</NavbarText>
				</NavbarCollapse>
			</Navbar>
		);
}

export default Navigation;