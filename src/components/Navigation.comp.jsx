import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, NavbarBrand, NavDropdown, NavbarCollapse, NavLink, NavbarToggle, NavbarText } from "react-bootstrap";
import { accessData } from "../context/DataContext.context";
import { getInventoryCount, getProductCountByCategory, getProductCountBySubcategory } from "../util/filterData.util";
import { Link } from "react-router-dom";

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
        const newValue = scrollY / 8;
        setEffectValue(Math.trunc(newValue + 2));
    }

    useEffect(() => {
        //set backdrop blur value to effect value
        if (effectValue <= 27) {
            setBackdropFilter(`blur(${effectValue}px)`);
            navbarRef.current.style.backgroundColor = "";
        } else {
            setBackdropFilter("");
            navbarRef.current.style.backgroundColor = "#393939";
        }
    }, [effectValue]);

    const formatSubcategoryLink = (data, category, subcategory) => {
        return <Link className="nav-link" to={`/inventory/${category}/${subcategory}`}>
            {subcategory} ({getProductCountBySubcategory(data, subcategory)})
        </Link>
    }

    const formatCategoryLink = (data, category, linkName) => {
        return <Link className="nav-link" to={`/inventory/${category}`}>
            {linkName} ({getProductCountByCategory(data, category)})
        </Link>
    }

    const formatInventoryLink = (data, linkName) => {
        return <Link className="nav-link" to={"/inventory"}>
            {linkName} ({getInventoryCount(data)})
        </Link>
    }

    const formatHomeLink = () => {
        return <Link className="nav-link" to="/">Home</Link>
    }

    return (
			<Navbar ref={navbarRef} expand="md" data-bs-theme="dark" fixed="top" id="navbar" style={{ backdropFilter: backdropFilter }}>
				<NavbarBrand>Western Hills Quality Meats</NavbarBrand>
				<NavbarToggle aria-controls="basic-navbar-nav" />
				<NavbarCollapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						{formatHomeLink()}
						{formatInventoryLink(data, "Inventory")}
						<NavDropdown title="Meats">
							<NavDropdown.Item>
                                {formatSubcategoryLink(data, "Meats", "Beef")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Meats", "Pork")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Meats", "Chicken")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Meats", "Lamb")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Meats", "Turkey")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Meats", "Seafood")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatCategoryLink(data, "Meats", "All Meat Inventory")}
                            </NavDropdown.Item>
						</NavDropdown>
                        <NavDropdown title="Spices">
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Condiments", "Rubs")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Condiments", "Sauces")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Condiments", "Marinades")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatCategoryLink(data, "Condiments", "All Spice Inventory")}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Grills & Smokers">
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Smokers", "Accessories")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Smokers", "Thermometers")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Smokers", "Pellets")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Smokers", "Grills")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatSubcategoryLink(data, "Smokers", "Smokers")}
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                {formatCategoryLink(data, "Smokers", "All Smoker & Grill Inventory")}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavbarText>{effectValue}</NavbarText>
                        <NavbarText>{scrollY}</NavbarText>
					</Nav>
				</NavbarCollapse>
			</Navbar>
		);
}

export default Navigation;