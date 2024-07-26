import ProductCard from "./ProductCard.comp";

const ProductGrid = (props) => {
    return (
			<div className="productGrid">
				{props.data && props.data.length > 0 ? (
					props.data.map((product, index) => (
						<ProductCard key={index} index={index} product={product} />
					))
				) : (
					<div className="noData light">
						<h1>Come and give us a visit!</h1>
						<p className="subtitle">
							<a
								href="https://www.google.com/maps/place/Western+Hills+Meats%2FBBQ+Pit+Stop/@40.0438898,-111.720504,17z/data=!3m1!4b1!4m6!3m5!1s0x874da565e0b89d15:0x8a9eeae05a44346f!8m2!3d40.0438898!4d-111.7179291!16s%2Fg%2F11ss5b_t99?entry=ttu"
								target="_blank"
								rel="noopener noreferrer"
								className="light">
								35 N 900 E St, Payson, UT 84651
							</a>
						</p>
						<h2>Store Hours</h2>
						<div>
							<ul>
								<li>Mon - Sat: 10am - 6pm</li>
								<li>Closed Sunday</li>
								<li>Hours could be affected by holidays</li>
								<li>Call us +1 385 899 8586</li>
							</ul>
						</div>
					</div>
				)}
			</div>
		);
}

export default ProductGrid;