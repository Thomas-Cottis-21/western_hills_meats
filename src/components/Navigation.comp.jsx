import React, { useState, useEffect, useRef } from "react";
import {
	Navbar,
	Nav,
	NavbarBrand,
	NavDropdown,
	NavbarCollapse,
	NavLink,
	NavbarToggle,
	NavbarText,
} from "react-bootstrap";
import { accessData } from "../context/DataContext.context";
import {
	getInventoryCount,
	getProductCountByCategory,
	getProductCountBySubcategory,
} from "../util/filterData.util";
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
	};

	useEffect(() => {
		//set backdrop blur value to effect value
		if (effectValue <= 27) {
			setBackdropFilter(`blur(${effectValue}px)`);
			navbarRef.current.style.backgroundColor = "";
		} else {
			setBackdropFilter("");
			navbarRef.current.style.backgroundColor = "#1b1b1b";
		}
	}, [effectValue]);

	const formatSubcategoryLink = (data, category, subcategory) => {
		return (
			<NavDropdown.Item
				as={Link}
				className="nav-link"
				to={`/inventory/${category}/${subcategory}`}>
				{subcategory} ({getProductCountBySubcategory(data, subcategory)})
			</NavDropdown.Item>
		);
	};

	const formatCategoryLink = (data, category, linkName) => {
		return (
			<NavDropdown.Item
				as={Link}
				className="nav-link"
				to={`/inventory/${category}`}>
				{linkName} ({getProductCountByCategory(data, category)})
			</NavDropdown.Item>
		);
	};

	const formatInventoryLink = (data, linkName) => {
		return (
			<Nav.Link as={Link} className="nav-link" to={"/inventory"}>
				{linkName} ({getInventoryCount(data)})
			</Nav.Link>
		);
	};

	const formatHomeLink = () => {
		return (
			<Nav.Link as={Link} className="nav-link" to="/">
				Home
			</Nav.Link>
		);
	};

	return (
		<Navbar
			ref={navbarRef}
			expand="lg"
			data-bs-theme="dark"
			fixed="top"
			id="navbar"
			style={{ backdropFilter: backdropFilter }}>
			<NavbarBrand>
				<Link to={"/"}>
					<img
						src="https://western-hills-data-space.nyc3.cdn.digitaloceanspaces.com/assets/images/propaganda/logos/western_hills_logo.svg"
						width="140"
						className="d-inline-block align-top p-2"
					/>
				</Link>
			</NavbarBrand>
			<NavbarToggle aria-controls="basic-navbar-nav" />
			<NavbarCollapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					{formatHomeLink()}
					{formatInventoryLink(data, "Inventory")}
					<NavDropdown title="Meats">
						{formatSubcategoryLink(data, "Meats", "Beef")}
						{formatSubcategoryLink(data, "Meats", "Pork")}
						{formatSubcategoryLink(data, "Meats", "Chicken")}
						{formatSubcategoryLink(data, "Meats", "Lamb")}
						{formatSubcategoryLink(data, "Meats", "Turkey")}
						{formatSubcategoryLink(data, "Meats", "Seafood")}
						{formatCategoryLink(data, "Meats", "All Meat Inventory")}
					</NavDropdown>
					<NavDropdown title="Spices">
						{formatSubcategoryLink(data, "Condiments", "Rubs")}
						{formatSubcategoryLink(data, "Condiments", "Sauces")}
						{formatSubcategoryLink(data, "Condiments", "Marinades")}
						{formatCategoryLink(
							data,
							"Condiments",
							"All Spice Inventory"
						)}
					</NavDropdown>
					<NavDropdown title="Grills & Smokers">
						{formatSubcategoryLink(data, "Smokers", "Accessories")}
						{formatSubcategoryLink(data, "Smokers", "Thermometers")}
						{formatSubcategoryLink(data, "Smokers", "Pellets")}
						{formatSubcategoryLink(data, "Smokers", "Grills")}
						{formatSubcategoryLink(data, "Smokers", "Smokers")}
						{formatCategoryLink(
							data,
							"Smokers",
							"All Smoker & Grill Inventory"
						)}
					</NavDropdown>
				</Nav>
				<NavbarText>
					<p>
						Store Phone: <a href="tel:+13858998586">+1 385 899 8586</a>
					</p>
				</NavbarText>
			</NavbarCollapse>
		</Navbar>
	);
};

export default Navigation;
