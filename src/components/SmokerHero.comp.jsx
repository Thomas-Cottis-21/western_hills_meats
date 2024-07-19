import ImageGrid from "./ImageGrid.comp";

const SmokerHero = () => {

	//TODO update this to follow best practice
	const traeger =
		"https://western-hills-data-space.nyc3.cdn.digitaloceanspaces.com/assets/images/propaganda/logos/traegerLogo.svg";
	const gozney =
		"https://western-hills-data-space.nyc3.cdn.digitaloceanspaces.com/assets/images/propaganda/logos/gozneyLogo.svg";
	const yoder = "https://western-hills-data-space.nyc3.cdn.digitaloceanspaces.com/assets/images/propaganda/logos/yoderLogo.png";
	const ooni =
		"https://western-hills-data-space.nyc3.cdn.digitaloceanspaces.com/assets/images/propaganda/logos/ooniLogo.svg";

	const imagesArray = [traeger, gozney, yoder, ooni];

    return (
			<section id="smokerHero">
				<h1 className="title">
					Grill more with <span>Western Hills Meats</span>
				</h1>
				<p className="subtitle">
					We supply the best brands at the lowest prices
				</p>

				<ImageGrid images={imagesArray}/>

				<button>Explore Grills & Smokers</button>
			</section>
		);
}

export default SmokerHero;