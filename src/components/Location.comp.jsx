const Location = () => {
    return (
			<div className="location">
				<h1 className="title">Conveniently located in Payson, Utah</h1>
				<p className="subtitle">
					We supply the tools to keep your grilling game on point and the
					meat to keep you and your family satisfied
				</p>
				<a
					href="https://www.google.com/maps/place/Western+Hills+Meats%2FBBQ+Pit+Stop/@40.0438898,-111.720504,17z/data=!3m1!4b1!4m6!3m5!1s0x874da565e0b89d15:0x8a9eeae05a44346f!8m2!3d40.0438898!4d-111.7179291!16s%2Fg%2F11ss5b_t99?entry=ttu"
					target="_blank"
					rel="noopener noreferrer">
					<button>Go to store</button>
				</a>
			</div>
		);
}

export default Location;