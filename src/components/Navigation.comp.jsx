import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, NavbarBrand, NavDropdown, NavbarCollapse, NavLink, NavbarToggle, NavbarText } from "react-bootstrap";
import { accessData } from "../context/DataContext.context";
import { getInventoryCount, getProductCountByCategory, getProductCountBySubcategory } from "../util/filterData.util";

const Navigation = () => {
    const [scrollY, setScrollY] = useState(0);
    const [effectValue, setEffectValue] = useState(0);
    const [backdropFilter, setBackdropFilter] = useState("");
    const navbarRef = useRef(null);

    const { data, setData } = accessData();

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

    const formatSubcategoryLink = (data, linkName) => {
        return `${linkName} (${getProductCountBySubcategory(data, linkName)})`;
    }

    const formatCategoryLink = (data, category, linkName) => {
        return `${linkName} (${getProductCountByCategory(data, category)})`;
    }

    const formatInventoryLink = (data, linkName) => {
        return `${linkName} (${getInventoryCount(data)})`;
    }

    return (
			<Navbar ref={navbarRef} expand="md" data-bs-theme="dark" fixed="top" id="navbar" style={{ backdropFilter: backdropFilter }}>
				<NavbarBrand>Western Hills Quality Meats</NavbarBrand>
				<NavbarToggle aria-controls="basic-navbar-nav" />
				<NavbarCollapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<NavLink>Home</NavLink>
						<NavLink>{formatInventoryLink(data, "Inventory")}</NavLink>
						<NavDropdown title="Meats">
							<NavDropdown.Item>
                                {formatSubcategoryLink(data, "Beef")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Pork")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Chicken")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Lamb")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Turkey")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Seafood")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatCategoryLink(data, "Meats", "All Meat Inventory")}
                            </NavDropdown.Item>
						</NavDropdown>
                        <NavDropdown title="Spices">
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Rubs")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Sauces")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Marinades")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatCategoryLink(data, "Condiments", "All Spice Inventory")}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Grills & Smokers">
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Accessories")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Thermometers")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Pellets")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Grills")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Smokers")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatCategoryLink(data, "Smokers", "All Smoker & Grill Inventory")}
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