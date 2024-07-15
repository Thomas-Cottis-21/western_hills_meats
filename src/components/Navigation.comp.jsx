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
				<NavbarBrand>Western Hills Quality Meats</NavbarBrand>
				<NavbarToggle aria-controls="basic-navbar-nav" />
				<NavbarCollapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<NavLink>Home</NavLink>
						<NavLink>Inventory</NavLink>
						<NavDropdown title="Meats">
							<NavDropdown.Item>
                                Beef
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Pork
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Chicken
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Lamb
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Turkey
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Seafood
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                All Meat Inventory
                            </NavDropdown.Item>
						</NavDropdown>
                        <NavDropdown title="Spices">
                            <NavDropdown.Item>
                                Rubs
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Sauces
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Marinades
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                All Spice Inventory
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Grills & Smokers">
                            <NavDropdown.Item>
                                Accessories
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Thermometers
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Pellets
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Grills
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                Smokers
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                All Grills & Smoker Inventory
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavbarText>Scroll Y: {scrollY}</NavbarText>
                        <NavbarText>Effect Value: {effectValue}</NavbarText>
					</Nav>
				</NavbarCollapse>
			</Navbar>
		);
}

export default Navigation;