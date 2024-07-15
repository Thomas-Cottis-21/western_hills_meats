import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, NavbarBrand, NavDropdown, NavbarCollapse, NavLink, NavbarToggle, NavbarText } from "react-bootstrap";

const Navigation = () => {
    const [scrollY, setScrollY] = useState(0);
    const [effectValue, setEffectValue] = useState(0);
    const [backdropFilter, setBackdropFilter] = useState("");
    const navbarRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setScrollY(Math.trunc(currentScrollY));
    };

    useEffect(() => {
        calculateBlurEffect();
    }, [scrollY]);

    const calculateBlurEffect = () => {
        const effectValue = scrollY / 20;
        setEffectValue(Math.trunc(effectValue));
    }

    useEffect(() => {
        //set backdrop blur value to effect value
        if (effectValue <= 25) {
            setBackdropFilter(`blur(${effectValue}px)`);
            navbarRef.current.style.backgroundColor = "";
        } else {
            setBackdropFilter("");
            navbarRef.current.style.backgroundColor = "#393939";
        }
    }, [effectValue]);

    return (
			<Navbar ref={navbarRef} expand="md" data-bs-theme="dark" fixed="top" id="navbar" style={{ backdropFilter: backdropFilter }}>
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
                        <NavbarText>Scroll Y: {scrollY}</NavbarText>
                        <NavbarText>Effect Value: {effectValue}</NavbarText>
					</Nav>
				</NavbarCollapse>
			</Navbar>
		);
}

export default Navigation;