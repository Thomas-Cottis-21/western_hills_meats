import DynamicPopover from "./DynamicPopover.com";

const TopBar = () => {

	//TODO find more efficient place to put store hours
	const storeHours = (
		<ul>
			<li>Mon - Sat: 10am - 6pm</li>
			<li>Closed Sunday</li>
			<li>Hours could be affected by holidays</li>
			<li>Call us +1 385 899 8586</li>
		</ul>
	);

    return (
			<div id="topBar">
				<p>
					Store Address:{" "}
					<a
						href="https://www.google.com/maps/place/Western+Hills+Meats%2FBBQ+Pit+Stop/@40.0438898,-111.720504,17z/data=!3m1!4b1!4m6!3m5!1s0x874da565e0b89d15:0x8a9eeae05a44346f!8m2!3d40.0438898!4d-111.7179291!16s%2Fg%2F11ss5b_t99?entry=ttu"
						target="_blank"
						rel="noopener noreferrer">
						35 N 900 E St, Payson, UT 84651
					</a>
				</p>
				<DynamicPopover title="Store Hours" content={storeHours} />
			</div>
		);
}

export default TopBar;