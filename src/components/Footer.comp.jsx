import { Link } from "react-router-dom";

const Footer = () => {
    return (
			<footer id="footer">
				<div className="footerContainer">
					<div className="footerLinksContainer">
						<div className="footerLinks">
							<h2 className="light">Quick links</h2>
							<Link to={"/"}>Home</Link>
                            <Link to={"/inventory"}>Inventory</Link>
                            <Link to={"/inventory/meats"}>Meats</Link>
                            <Link to={"/inventory/condiments"}>Condiments</Link>
                            <Link to={"/inventory/smokers"}>Grills & Smokers</Link>
						</div>
						<div className="footerLinks">
							<h2 className="light">Partners</h2>
							<a
								href="https://www.traeger.com/"
								target="_blank"
								rel="noopener noreferrer">
								Traeger
							</a>
							<a
								href="https://www.bbqpitstop.com/"
								target="_blank"
								rel="noopener noreferrer">
								BBQ PitStop
							</a>
							<a
								href="https://us.gozney.com/"
								target="_blank"
								rel="noopener noreferrer">
								Gozney
							</a>
							<a
								href="https://www.yodersmokers.com/"
								target="_blank"
								rel="noopener noreferrer">
								Yoder
							</a>
							<a
								href="https://bacanagrills.com/"
								target="_blank"
								rel="noopener noreferrer">
								Bacana
							</a>
						</div>
					</div>
					<div className="footerSupportContainer">
						<h2 className="light">Support</h2>
						<p className="subtitle light">
							Store Phone: <a href="tel:+13858998586">+1 385 899 8586</a>
						</p>
						<p className="subtitle light">
							Store Address:{" "}
							<a
								href="https://www.google.com/maps/place/Western+Hills+Meats%2FBBQ+Pit+Stop/@40.0438898,-111.720504,17z/data=!3m1!4b1!4m6!3m5!1s0x874da565e0b89d15:0x8a9eeae05a44346f!8m2!3d40.0438898!4d-111.7179291!16s%2Fg%2F11ss5b_t99?entry=ttu"
								target="_blank"
								rel="noopener noreferrer">
								35 N 900 E St, Payson, UT 84651
							</a>
						</p>
						<p className="subtitle light">
							Store Hours: Monday - Saturday 10AM - 6PM
						</p>
					</div>
				</div>
			</footer>
		);
}

export default Footer;